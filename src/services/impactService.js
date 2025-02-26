import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Awards Data */
export const getCustomerTestimonials = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/customer-testimonials?populate[0]=thumbnail`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};

/** Fetch Awards Data */
export const getFinancialTraining = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/financial-trainings?populate[0]=thumbnail`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
