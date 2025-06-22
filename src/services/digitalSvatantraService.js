import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Awards Data */
export const getDigitalSvatantra = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/success-stories?populate=*`,
		ServerHeaders
	);

	const res = await req.json();
	return res;
};
