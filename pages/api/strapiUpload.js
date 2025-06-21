import { IncomingForm } from "formidable";
import fs from "fs";
import axios from "axios";
import FormData from "form-data";

export const config = {
	api: {
		bodyParser: false, // required for formidable
	},
};

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

	try {
		const formData = new FormData();
		formData.append(
			"files",
			fs.createReadStream(file.filepath),
			file.originalFilename
		);

		const strapiRes = await axios.post(
			`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/upload`,
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
