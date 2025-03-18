import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Investors Data */
export const getCustomerProtections = async () => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/customer-protections?populate[0]=thumbnail`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};

/** Fetch Investors Slug Data */
export const getCustomerProtectionsSlug = async (slug) => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/customer-protections?populate[0]=thumbnail&populate[1]=slugRow&populate[2]=slugRow.row&populate[3]=slugRow.row.media&populate[4]=slugRow.Category&populate[5]=slugRow.Category.row&populate[6]=slugRow.Category.row.media&filters[slug][$eq]=${slug}`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};

/** Fetch Investors Slug inside slug Data */
export const getCustomerProtectionsSlugInsideSlug = async (slug) => {
	try {
		const req = await fetch(
			`${process.env.STRAPI_DO_BASE_URL}/api/customer-protections?populate[0]=thumbnail&populate[1]=slugRow&populate[2]=slugRow.row&populate[3]=slugRow.row.media&populate[4]=slugRow.Category&populate[5]=slugRow.Category.row&populate[6]=slugRow.Category.row.media`,
			ServerHeaders
		);

		const res = await req.json();
		console.log("Full API Response:", res); // Debugging ke liye print karo

		// Check karo ki API data sahi aa raha hai
		if (!res?.data || !Array.isArray(res.data)) {
			console.error("Invalid API response:", res);
			return { data: [] };
		}

		// **SlugRow ko filter karo jo URL slug se match kare**
		const filteredData = res.data
			.map((item) => {
				console.log("Checking item:", item); // Debugging ke liye

				// **Directly slugRow access karo**
				const matchedSlugRow = item?.slugRow?.find(
					(row) =>
						row.slug.trim().toLowerCase().replace(/\s+/g, "-") ===
						slug.trim().toLowerCase().replace(/\s+/g, "-")
				);

				console.log("Matched Slug Row:", matchedSlugRow); // Debugging ke liye

				if (matchedSlugRow) {
					return {
						...item,
						slugRow: [matchedSlugRow], // Sirf matched slugRow return karo
					};
				}
				return null;
			})
			.filter(Boolean); // Null values hata do

		console.log("Filtered Data:", filteredData); // Debugging ke liye

		return { data: filteredData };
	} catch (error) {
		console.error("Error fetching data:", error);
		return { data: [] };
	}
};
