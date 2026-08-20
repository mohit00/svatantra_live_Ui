/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ["img.youtube.com"],
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},

	async redirects() {
		return [
			/**
			 * The IPO content has a single canonical URL:
			 * /investor-relations/initial-public-offerings
			 *
			 * These two legacy paths rendered the same Strapi category. The
			 * section-level one was a second implementation
			 * (pages/investors/[slug]/[according_slug]/index.js) that also
			 * bypassed the DRHP / Draft Abridged Prospectus disclaimer, so it
			 * is collapsed here at the routing layer rather than gated twice.
			 *
			 * Scoped to the initial-public-offerings slug on purpose: the same
			 * [according_slug] route still serves 22 URLs for the other six
			 * investor categories, and none of them are affected.
			 *
			 * :section* also covers any future section added under the IPO
			 * category in Strapi, so a new one cannot reopen the bypass.
			 */
			{
				source: "/investors/initial-public-offerings/:section*",
				destination: "/investor-relations/initial-public-offerings",
				permanent: true,
			},
			{
				source: "/investors/initial-public-offerings",
				destination: "/investor-relations/initial-public-offerings",
				permanent: true,
			},
		];
	},

	async headers() {
		return [
			{
				source: "/(.*)", // applies to all routes
				headers: [
					{
						key: "Content-Security-Policy",
						value: `
							default-src 'self' http://10.21.1.74:1337;
							media-src 'self' https://svatantracms.tinglabs.in;
							script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms/ https://googleads.g.doubleclick.net/ https://connect.facebook.net/ https://www.googletagmanager.com/ https://www.youtube.com https://s.ytimg.com https://maps.googleapis.com https://maps.gstatic.com;
							style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://maps.googleapis.com https://maps.gstatic.com;
							img-src 'self' data: https://www.google.co.in/ https://www.googletagmanager.com/ https://svatantracms.tinglabs.in https://img.youtube.com https://i.ytimg.com https://maps.googleapis.com https://maps.gstatic.com https://*.google.com https://*.ggpht.com https://www.svatantramicrofin.com http://svatantramicrofin.com;
							font-src 'self' data: https://fonts.gstatic.com https://maps.gstatic.com;
							connect-src 'self' https://cdn.jsdelivr.net/ https://f.clarity.ms/ https://svatantracms.tinglabs.in https://analytics.google.com/ https://www.youtube.com https://maps.googleapis.com https://www.google.com/ https://unpkg.com;
							frame-src https://www.googletagmanager.com/ https://www.youtube.com https://www.youtube-nocookie.com/ https://www.google.com https://maps.google.com https://www.google.com/maps;
							object-src 'none';
							base-uri 'self';
							form-action 'self';
							upgrade-insecure-requests;
						`
							.replace(/\s{2,}/g, " ")
							.trim(),
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "geolocation=(), camera=(), microphone=()",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
