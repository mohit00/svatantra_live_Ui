import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Awards Data */
export const getAwards = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/awards?populate[0]=logo`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
