// MODULES //
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //
import SmoothScrolling from "@/utils/SmoothScrolling";

// STYLES //
import "@/styles/globals/globals.scss";

// IMAGES //

// DATA //

/** App Page */
export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		SmoothScrolling();
	}, []);

	useEffect(() => {
		const handleInvestorCategoryRedirect = (event) => {
			if (
				event.defaultPrevented ||
				event.button !== 0 ||
				event.metaKey ||
				event.ctrlKey ||
				event.shiftKey ||
				event.altKey
			) {
				return;
			}

			const anchor = event.target?.closest?.("a[href]");

			if (!anchor) {
				return;
			}

			if (anchor.target && anchor.target !== "_self") {
				return;
			}

			const href = anchor.getAttribute("href");

			if (!href || !href.startsWith("/investors/")) {
				return;
			}

			const match = href.match(/^\/investors\/([^/]+)\/?$/);

			if (!match) {
				return;
			}

			event.preventDefault();
			router.push(`/investor-relations/${match[1]}`);
		};

		document.addEventListener("click", handleInvestorCategoryRedirect);

		return () => {
			document.removeEventListener("click", handleInvestorCategoryRedirect);
		};
	}, [router]);

	return (
		<>
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


			<Component {...pageProps} />
		</>
	);
}
