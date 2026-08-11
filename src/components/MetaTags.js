/* eslint-disable react/no-unescaped-entities */
// MODULES //

// COMPONENTS //
import Head from "next/head";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //

// IMAGES //
import OgImage from "public/img/og-image.jpg";
import Favicon from "public/img/favicon.png";

// DATA //

/** Meta Tags */
export default function MetaTags({ Title, Desc, OgImg, Url }) {
	// Metas for all page
	const defaultMetas = {
		desc: "Description",
		url: "http://localhost:3000",
		ogImg: `${OgImage.src}`,
	};

	// Check if page has its own metadetails
	// If not then use the default
	// Built here rather than in the tags below: the old `Title ? Title : "Title"`
	// was always truthy, so the brand fallback in those ternaries never ran and a
	// page passing no Title rendered the literal "Title | Svatantra Microfin".
	const title = Title
		? `${Title} | Svatantra Microfin`
		: "Svatantra Microfin - Building the Entrepreneurs who power India’s economy";
	const desc = Desc ? Desc : defaultMetas.desc;
	const ogImg = OgImg ? OgImg : defaultMetas.ogImg;
	const url = Url ? Url : defaultMetas.url;

	return (
		<Head>
			<title>{title}</title>
			<meta
				name="description"
				content={desc
					? `${desc}`
					: "Svatantra Microfin offers affordable and accessible microfinance services to rural women, promoting financial independence and entrepreneurship."}
			/>
			<meta name="theme-color" content="#000" />

			{/* OG Tags  */}
			<meta property="og:title" content={title} />
			<meta
				property="og:description"
				content={
					desc
						? `${desc}`
						: "Svatantra Microfin offers affordable and accessible microfinance services to rural women, promoting financial independence and entrepreneurship."
				}
			/>
			<meta property="og:url" content={url} />
			<meta property="og:image" content={ogImg} />
			<meta property="og:image:secure_url" content={ogImg} />
			<meta property="og:type" content="website" />

			{/* twitter card  */}
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={desc
				? `${desc}`
				: "Svatantra Microfin offers affordable and accessible microfinance services to rural women, promoting financial independence and entrepreneurship."} />
			<meta name="twitter:image" content={ogImg} />
			<meta name="twitter:card" content="summary_large_image" />

			{/* canonical tag */}
			<link rel="canonical" href={url} />

			{/* Favicon */}
			<link rel="icon" href={`${Favicon.src}`} />
		</Head>
	);
}
