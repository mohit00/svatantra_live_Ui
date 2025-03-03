import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Employee Testimonials Data */
export const getEmployeeTestimonials = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/employee-testimonials?populate[0]=profileImg`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};

/** Fetch Employee Testimonials Data */
export const getTalents = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/talents?populate[0]=thumb`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
