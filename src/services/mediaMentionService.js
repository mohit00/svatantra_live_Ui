import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch press media Mention */
export const mediaMention = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/medias?populate=*&sort=date:desc&pagination[page]=1&pagination[pageSize]=100`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};

/** Fetch Blogs Inside Data */
export const getPressReleaseBySlug = async (slug) => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/presses?populate=*&filters[slug][$eq]=${slug}`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
