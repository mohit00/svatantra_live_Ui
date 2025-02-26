import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Blog Data */
export const getAllBlogs = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/blogs?populate[0]=thumbnail&populate[1]=banner.desktop&populate[2]=banner.mobile&populate[3]=author`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};

/** Fetch Blogs Inside Data */
export const getBlogBySlug = async (slug) => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/blogs?populate[0]=thumbnail&populate[1]=banner.desktop&populate[2]=banner.mobile&populate[3]=author&filters[slug][$eq]=${slug}`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};

/** Fetch Related Blogs Data */
export const getRelatedBlogsBySlug = async (slug) => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/blogs?populate=*&filters[slug][$ne]=${slug}`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
