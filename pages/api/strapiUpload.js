import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import axios from "axios";
import FormData from "form-data";
import { isSameOrigin, rateLimit } from "@/utils/apiSecurity";

export const config = {
	api: {
		bodyParser: false, // required for formidable
	},
};

/** isValidPdf - checks extension, MIME type and %PDF- magic bytes */
function isValidPdf(file) {
	const isPdfName = path.extname(file.originalFilename || "").toLowerCase() === ".pdf";
	const isPdfMime = file.mimetype === "application/pdf";
	if (!isPdfName || !isPdfMime) return false;

	const header = Buffer.alloc(5);
	const fd = fs.openSync(file.filepath, "r");
	try {
		fs.readSync(fd, header, 0, 5, 0);
	} finally {
		fs.closeSync(fd);
	}
	return header.toString("latin1") === "%PDF-";
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB, matches the form's client-side limit


/** safePdfName - keeps a recognisable name but strips everything except [A-Za-z0-9._-] */
function safePdfName(originalName) {
	const base = path
		.basename(originalName, path.extname(originalName))
		.replace(/[^A-Za-z0-9._-]+/g, "_")
		.replace(/^[._]+/, "")
		.slice(0, 80);
	return `${base || "resume"}.pdf`;
}

/** handler  */
export default async function handler(req, res) {
	// the response is JSON only; never let a browser render or sniff it
	res.setHeader("X-Content-Type-Options", "nosniff");
	res.setHeader("Content-Security-Policy", "default-src 'none'; sandbox");

	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	// Only our own pages may call this endpoint, and not in bulk
	if (!isSameOrigin(req)) {
		return res.status(403).json({ error: "Forbidden" });
	}
	if (!rateLimit(req, res, "strapiUpload")) return;

	// Content-Length is only a hint; formidable enforces maxFileSize while streaming
	const contentLength = Number(req.headers["content-length"] || 0);
	if (contentLength > MAX_FILE_SIZE + 64 * 1024) {
		return res.status(413).json({ error: "File size should be less than 10MB" });
	}

	const data = await new Promise((resolve, reject) => {
		const form = new IncomingForm({
			keepExtensions: true,
			maxFiles: 1,
			maxFileSize: MAX_FILE_SIZE,
			maxFields: 5,
			allowEmptyFiles: false,
		});

		form.parse(req, (err, fields, files) => {
			if (err) return reject(err);
			resolve({ fields, files });
		});
	}).catch((err) => {
		console.error("Form parsing error:", err);
		return { error: err };
	});

	if (data.error) {
		// formidable codes 1009 (maxFileSize) / 1015 (maxFiles) / 1016 (maxFields) are client errors
		const code = data.error.httpCode || 500;
		return res
			.status(code >= 400 && code < 500 ? code : 500)
			.json({ error: code >= 400 && code < 500 ? "Invalid upload" : "Form parsing failed" });
	}

	// Collect every temp file so none is left behind, whatever happens below
	const allFiles = Object.values(data.files).flat().filter(Boolean);
	const cleanup = () => allFiles.forEach((f) => f?.filepath && fs.unlink(f.filepath, () => { }));


	try {
		const fileList = data.files.file;
		const file = Array.isArray(fileList) ? fileList[0] : fileList;

		// exactly one file, in the field the form uses
		if (allFiles.length !== 1 || !file?.filepath || !file?.originalFilename) {
			return res.status(400).json({ error: "No valid file received" });
		}

		// Server-side validation: only genuine PDF files may reach Strapi
		if (!isValidPdf(file)) {
			return res.status(400).json({ error: "Only PDF files are allowed." });
		}

		const formData = new FormData();
		formData.append("files", fs.createReadStream(file.filepath), {
			filename: safePdfName(file.originalFilename),
			contentType: "application/pdf",
		});

		const strapiRes = await axios.post(
			`${process.env.STRAPI_DO_BASE_URL}/api/upload`,
			formData,
			{
				headers: {
					...formData.getHeaders(),
					Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
				},
				maxBodyLength: MAX_FILE_SIZE + 1024 * 1024,
			}
		);

		// expose only what the form needs (the file id), not Strapi's internal metadata
		const ids = (Array.isArray(strapiRes.data) ? strapiRes.data : []).map((f) => ({
			id: f.id,
		}));
		return res.status(200).json(ids);
	} catch (error) {
		console.error("Strapi upload error:", error.response?.data || error.message);
		return res.status(500).json({ error: "Failed to upload to Strapi" });
	} finally {
		cleanup();
	}
}
