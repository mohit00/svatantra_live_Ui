import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Gallery Data */
export const getGallery = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/gallery?populate[0]=images`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
