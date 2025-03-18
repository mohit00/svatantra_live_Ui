import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch press release Data */
export const getHeadersData = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/headers?populate=*`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
