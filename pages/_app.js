// MODULES //
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import OrganizationSchema from "@/components/Seo/OrganizationSchema";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //
import SmoothScrolling from "@/utils/SmoothScrolling";
import canonicalUrl from "@/utils/CanonicalUrl";

// STYLES //
import "@/styles/globals/globals.scss";

// IMAGES //

// DATA //

/** App Page */
export default function MyApp({ Component, pageProps, router }) {
	useEffect(() => {
		SmoothScrolling();
	}, []);

	// While a `fallback: true` page is still resolving, asPath is the route
	// pattern rather than the real URL, so no canonical is rendered until the
	// router settles. canonicalUrl() returns null for that case too.
	const canonical = router?.isFallback ? null : canonicalUrl(router?.asPath);

	return (
		<>
			{/*
				Self-referencing canonical, emitted here so every page gets one
				from its own resolved URL. This is the single place the site
				renders rel="canonical" - MetaTags deliberately does not, so a
				page can never end up with two. The key lets next/head collapse
				any future duplicate onto this one rather than printing both.
			*/}
			{canonical && (
				<Head>
					<link rel="canonical" href={canonical} key="canonical" />
				</Head>
			)}

			{/* Google Tag Manager */}
			<Script
				id="gtm-script"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];
						w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
						var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
						j.async=true;
						j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
						f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-W5Z474C');
					`,
				}}
			/>
			{/* End Google Tag Manager */}

			{/* Google Tag Manager (noscript) */}
			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-W5Z474C"
					height="0"
					width="0"
					style={{ display: "none", visibility: "hidden" }}
				/>
			</noscript>
			{/* End Google Tag Manager (noscript) */}

			<OrganizationSchema />
			<Component {...pageProps} />
		</>
	);
}
