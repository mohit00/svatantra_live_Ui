import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import axios from "axios";
import FormData from "form-data";

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

/** handler  */
export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const data = await new Promise((resolve, reject) => {
		const form = new IncomingForm({ keepExtensions: true });

		form.parse(req, (err, fields, files) => {
			if (err) return reject(err);
			resolve({ fields, files });
		});
	}).catch((err) => {
		console.error("Form parsing error:", err);
		return null;
	});

	if (!data) {
		return res.status(500).json({ error: "Form parsing failed" });
	}

	const filesArray = Object.values(data.files);
	const file = Array.isArray(filesArray[0]) ? filesArray[0][0] : filesArray[0];

	if (!file?.filepath || !file?.originalFilename) {
		return res.status(400).json({ error: "No valid file received" });
	}

	// Server-side validation: only genuine PDF files may reach Strapi
	if (!isValidPdf(file)) {
		fs.unlink(file.filepath, () => {});
		return res.status(400).json({ error: "Only PDF files are allowed." });
	}

	try {
		const formData = new FormData();
		formData.append(
			"files",
			fs.createReadStream(file.filepath),
			file.originalFilename
		);

		const strapiRes = await axios.post(
			`${process.env.STRAPI_DO_BASE_URL}/api/upload`,
			formData,
			{
				headers: {
					...formData.getHeaders(),
					Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
				},
			}
		);

		return res.status(200).json(strapiRes.data);
	} catch (error) {
		console.error("Strapi upload error:", error.response?.data || error.message);
		return res.status(500).json({ error: "Failed to upload to Strapi" });
	}
}
