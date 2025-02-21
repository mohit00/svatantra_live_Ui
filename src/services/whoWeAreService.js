import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch getOurLeaderships Data */
export const getOurLeaderships = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/leaderships?populate[0]=profileImg`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
/** Fetch getOurJourney Data */
export const getOurJourney = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/journies?populate[0]=months.image`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
