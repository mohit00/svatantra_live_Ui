/**
 * Server-side helpers for the public upload API (/api/strapiUpload):
 * in-memory rate limiting and same-origin enforcement.
 */

// RATE LIMIT //

const rateLimitWindowMs = 15 * 60 * 1000; // 15 minutes
const rateLimitMaxRequests = 10; // per client IP, per endpoint, per window
const rateLimitStore = new Map();

/** getClientIp - real client IP as seen by the reverse proxy, else the socket address */
function getClientIp(req) {
	const realIp = req.headers["x-real-ip"];
	if (typeof realIp === "string" && realIp.trim()) return realIp.trim();

	const forwarded = req.headers["x-forwarded-for"];
	if (typeof forwarded === "string" && forwarded.trim()) {
		// the last entry is the one appended by our own proxy; earlier ones can be spoofed
		return forwarded.split(",").pop().trim();
	}
	return req.socket?.remoteAddress || "unknown";
}

/**
 * rateLimit - returns true when the request is allowed. When the limit is exceeded
 * it sends the 429 response itself and returns false.
 */
export function rateLimit(req, res, name) {
	const now = Date.now();

	// drop expired entries so the map cannot grow without bound
	if (rateLimitStore.size > 5000) {
		for (const [key, entry] of rateLimitStore) {
			if (entry.resetAt <= now) rateLimitStore.delete(key);
		}
	}

	const key = `${name}:${getClientIp(req)}`;
	let entry = rateLimitStore.get(key);
	if (!entry || entry.resetAt <= now) {
		entry = { count: 0, resetAt: now + rateLimitWindowMs };
		rateLimitStore.set(key, entry);
	}
	entry.count += 1;

	if (entry.count > rateLimitMaxRequests) {
		const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
		res.setHeader("Retry-After", retryAfter);
		res.status(429).json({ error: "Too many requests. Please try again later." });
		return false;
	}
	return true;
}


// SAME-ORIGIN //

/**
 * isSameOrigin - true when a browser request originates from this site. Browsers always
 * send Origin on cross-origin POSTs (and Sec-Fetch-Site); requests carrying neither
 * header (curl, scripts) fall back to a Referer check and are otherwise rejected.
 * This blocks cross-site and casual direct-API uploads; it is not authentication,
 * since headers can be forged by a determined client.
 */
export function isSameOrigin(req) {
	const host = req.headers.host;
	if (!host) return false;

	const fetchSite = req.headers["sec-fetch-site"];
	if (typeof fetchSite === "string" && fetchSite !== "same-origin") return false;

	const source = req.headers.origin || req.headers.referer;
	if (typeof source !== "string" || !source) return false;
	try {
		return new URL(source).host === host;
	} catch {
		return false;
	}
}
