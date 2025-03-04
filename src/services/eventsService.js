import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch events Data */
export const getEvents = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/events?populate[0]=logo&populate[1]=images`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
