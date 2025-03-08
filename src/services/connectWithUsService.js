import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Faq Data */
export const getFaqs = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/faqs?populate=*`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
