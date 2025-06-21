// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* eslint-disable require-jsdoc */
import { ServerHeaders } from "@/utils/RequestHeaders";

export default async function handler(req, res) {
	try {
		const apiRes = await fetch(
			`${process.env.STRAPI_DO_BASE_URL}/api/headers?populate[0]=pageName&populate[1]=pageName.subPages&sort[0]=order`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
				},
			}
		);

		const result = await apiRes.json();

		res.status(200).json({ data: result || null });
	} catch (error) {
		// console.error("Error fetching project data:", error);
		res.status(500).json({ error: error });
	}
}
