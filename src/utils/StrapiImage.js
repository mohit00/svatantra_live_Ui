/** Strapi Image */
export default function StrapiImage(image) {
	if (!image) {
		return;
	}

	const data = {
		// url: `${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${image?.url}`,
		url: `https://svatantramicrofin.com/${image?.url}`,
		width: image.data?.attributes.width,
		height: image.data?.attributes.height,
	};

	return data;
}
