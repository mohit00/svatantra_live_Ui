/** Production origin used for every canonical URL */
const siteOrigin = "https://www.svatantramicrofin.com";

/**
 * Build the self-referencing canonical URL for the page currently being
 * rendered, from the router's `asPath` (the resolved URL, with dynamic
 * segments already filled in - not the `/investors/[slug]` route pattern).
 *
 * Rules, matching how the site actually serves URLs:
 *  - query strings and hash fragments are dropped
 *  - no trailing slash, because next.config.js leaves `trailingSlash` at its
 *    default of false, so /about-us/ is redirected to /about-us
 *  - the home page keeps its single slash, matching public/sitemap.xml
 *
 * @param {string} asPath - router.asPath, e.g. "/investors/annual-reports?x=1"
 * @returns {string|null} absolute canonical URL, or null when the path is not
 *   a real URL yet and no canonical should be rendered
 */
export default function canonicalUrl(asPath) {
	// Drop the query string and the hash; take whichever comes first.
	const pathOnly = String(asPath == null ? "/" : asPath).split(/[?#]/)[0];

	// asPath is always rooted, but stay defensive so a bad value can never
	// produce a canonical pointing at another origin.
	const rooted = pathOnly.startsWith("/") ? pathOnly : `/${pathOnly}`;

	// An unresolved dynamic segment ("/media/blogs/[slug]") is a route pattern,
	// not a real URL. That is what asPath holds while a fallback: true page is
	// still resolving, and those shells are served to clients with a 200, so
	// returning null here keeps a placeholder canonical off the page entirely.
	if (rooted.includes("[") || rooted.includes("]")) return null;

	// Collapse any trailing slashes; an empty result means the home page.
	const normalised = rooted.replace(/\/+$/, "");

	return normalised ? `${siteOrigin}${normalised}` : `${siteOrigin}/`;
}
