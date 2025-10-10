import { ServerHeaders } from "@/utils/RequestHeaders";

/** handler */
export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			// Get data from request body
			const userData = JSON.parse(req.body);

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
				`${process.env.STRAPI_DO_BASE_URL}/api/contact-us-leads`,
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
