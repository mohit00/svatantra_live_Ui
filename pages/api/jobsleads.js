import { ServerHeaders } from "@/utils/RequestHeaders";
import { rateLimit, validateJobLead } from "@/utils/apiSecurity";

/** handler */
export default async function handler(req, res) {
	if (req.method === "POST") {
		// Rate limit before doing any work
		if (!rateLimit(req, res, "jobsleads")) return;

		// Strict server-side validation; only known, cleaned fields are forwarded
		const validation = validateJobLead(req.body);
		if (validation.error) {
			return res.status(400).json({ error: validation.error });
		}

		try {
			const userData = { data: validation.data };

			const Headers = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
				},
				body: JSON.stringify({
					...userData,
				}),
			};

			const apiRes = await fetch(
				`${process.env.STRAPI_DO_BASE_URL}/api/jobs-leads`,
				Headers
			);
			const result = await apiRes.json();

			// Respond to client
			return res.status(200).json(result);
		} catch (error) {
			console.error("Error handling data:", error);
			return res.status(500).json({ error: "Server error while handling data" });
		}
	} else {
		return res.status(405).json({ error: "Method Not Allowed" });
	}
}
