import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch events Data */
export const getEvents = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/events?populate[0]=logo&populate[1]=images&populate[2]=thumbnail&populate[3]=result&populate[4]=problems.media&populate[5]=table&populate[6]=gallery_img.image`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};

/** Fetch Blogs Inside Data */
export const getEventsBySlug = async (slug) => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/events?populate[0]=logo&populate[1]=images&populate[2]=thumbnail&populate[3]=result&populate[4]=problems.media&populate[5]=table&populate[6]=gallery_img.image&filters[slug][$eq]=${slug}`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
