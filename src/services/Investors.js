import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Investors Data */
export const getInvestors = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/investors=*`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
