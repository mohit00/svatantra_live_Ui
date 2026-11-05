
/**
 * Server-side security helpers for public APIs:
 * - Rate limiting
 * - Same-origin enforcement for CV uploads
 * - Strict input validation for Contact and Job Lead APIs
 */

// RATE LIMIT //

const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaxRequests = 10;
const rateLimitStore = new Map();

/** Get the client IP address */
function getClientIp(req) {
	const realIp = req.headers["x-real-ip"];
	if (typeof realIp === "string" && realIp.trim()) return realIp.trim();

	const forwarded = req.headers["x-forwarded-for"];
	if (typeof forwarded === "string" && forwarded.trim()) {
		return forwarded.split(",").pop().trim();
	}

	return req.socket?.remoteAddress || "unknown";
}

/**
 * Rate limit: 10 requests per IP, per endpoint, per 15-minute window.
 * Sends HTTP 429 when the limit is exceeded.
 */
export function rateLimit(req, res, name) {
	const now = Date.now();

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
		res.status(429).json({
			error: "Too many requests. Please try again later.",
		});
		return false;
	}

	return true;
}

// SAME-ORIGIN //

/**
 * Checks whether a browser request originates from this site.
 */
export function isSameOrigin(req) {
	const host = req.headers.host;
	if (!host) return false;

	const fetchSite = req.headers["sec-fetch-site"];
	if (typeof fetchSite === "string" && fetchSite !== "same-origin") {
		return false;
	}

	const source = req.headers.origin || req.headers.referer;
	if (typeof source !== "string" || !source) return false;

	try {
		return new URL(source).host === host;
	} catch {
		return false;
	}
}

// INPUT VALIDATION //

const nameRegex = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,24}$/;
const phoneRegex = /^[0-9]{10}$/;
const dateTextRegex = /^[0-9A-Za-z/\-., ]+$/;
const optionRegex = /^[\p{L}\p{N} .,&()/'’+-]+$/u;
const htmlTagRegex = /<\s*\/?\s*[a-zA-Z!?]/;

/** Check for control characters */
function hasControlChars(text) {
	for (let i = 0; i < text.length; i++) {
		const code = text.charCodeAt(i);
		if ((code < 32 && code !== 9 && code !== 10 && code !== 13) || code === 127) {
			return true;
		}
	}
	return false;
}

/** Trim string values */
function cleanText(value) {
	return typeof value === "string" ? value.trim() : null;
}

/** Validate text length and optional character pattern */
function textRule(label, { min = 1, max, pattern, patternMessage }) {
	return (value) => {
		const text = cleanText(value);

		if (text === null || text.length === 0) {
			return { error: `${label} is required` };
		}

		if (text.length < min || text.length > max) {
			return {
				error: `${label} must be between ${min} and ${max} characters`,
			};
		}

		if (pattern && !pattern.test(text)) {
			return {
				error: patternMessage || `${label} contains invalid characters`,
			};
		}

		return { value: text };
	};
}

/** Validate free text without HTML tags or control characters */
function messageRule(label, max) {
	return (value) => {
		const text = cleanText(value);

		if (text === null || text.length === 0) {
			return { error: `${label} is required` };
		}

		if (text.length > max) {
			return { error: `${label} must be at most ${max} characters` };
		}

		if (htmlTagRegex.test(text) || hasControlChars(text)) {
			return { error: `${label} contains invalid characters` };
		}

		return { value: text };
	};
}

const nameRule = (label, max) =>
	textRule(label, { max, pattern: nameRegex });

const optionRule = (label, max = 100) =>
	textRule(label, { max, pattern: optionRegex });

/** Validate email */
const emailRule = (value) => {
	const text = cleanText(value);

	if (text === null || text.length === 0) {
		return { error: "Email is required" };
	}

	const [local = ""] = text.split("@");

	if (text.length > 254 || local.length > 64 || !emailRegex.test(text)) {
		return { error: "Invalid email address" };
	}

	return { value: text };
};

/** Validate 10-digit phone number */
const phoneRule = (label) => (value) => {
	const text = cleanText(value);

	if (text === null || text.length === 0) {
		return { error: `${label} is required` };
	}

	if (!phoneRegex.test(text)) {
		return { error: `${label} must be exactly 10 digits` };
	}

	return { value: text };
};

/** Validate Strapi CV file ID */
const fileIdRule = (value) => {
	if (!Number.isInteger(value) || value < 1) {
		return { error: "Invalid CV file" };
	}

	return { value };
};

const contactSchema = {
	firstName: nameRule("First name", 50),
	surname: nameRule("Surname", 50),
	email: emailRule,
	tel: phoneRule("Phone number"),
	message: messageRule("Message", 2000),
};

const jobSchema = {
	name: nameRule("Name", 100),
	email: emailRule,
	number: phoneRule("Contact number"),
	dob: textRule("Date of birth", {
		min: 6,
		max: 20,
		pattern: dateTextRegex,
	}),
	qualification: optionRule("Qualification"),
	experience: optionRule("Experience"),
	state: optionRule("State"),
	preferredState: optionRule("Preferred state"),
	industry: optionRule("Industry"),
	previousMFI: optionRule("Previous MFI experience"),
	currentJobStatus: optionRule("Current job status"),
	sourceOfCv: optionRule("Source of CV"),
	designation: textRule("Designation", {
		max: 150,
		pattern: optionRegex,
	}),
	cv: fileIdRule,
};

/** Parse request body */
function parseBody(body) {
	if (typeof body === "string") {
		try {
			return JSON.parse(body);
		} catch {
			return null;
		}
	}

	return body;
}

/** Validate payload against the supplied schema */
function validatePayload(body, schema) {
	const parsed = parseBody(body);
	const input = parsed && typeof parsed === "object" ? parsed.data : null;

	if (!input || typeof input !== "object" || Array.isArray(input)) {
		return { error: "Invalid request body" };
	}

	const data = {};

	for (const [field, rule] of Object.entries(schema)) {
		const result = rule(input[field]);

		if (result.error) {
			return { error: result.error, field };
		}

		data[field] = result.value;
	}

	return { data };
}

/** Validate Contact Lead payload */
export const validateContactLead = (body) =>
	validatePayload(body, contactSchema);

/** Validate Job Lead payload */
export const validateJobLead = (body) =>
	validatePayload(body, jobSchema);
