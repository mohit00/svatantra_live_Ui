/**
 * Server-side helpers for the public lead APIs (/api/contactleads, /api/jobsleads):
 * in-memory rate limiting and strict input validation.
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

// VALIDATION //

const nameRegex = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,24}$/;
const phoneRegex = /^[0-9]{10}$/;
const dateTextRegex = /^[0-9A-Za-z/\-., ]+$/;
const optionRegex = /^[\p{L}\p{N} .,&()/'’+-]+$/u;
const htmlTagRegex = /<\s*\/?\s*[a-zA-Z!?]/;
/** hasControlChars - true for control characters other than tab, newline and carriage return */
function hasControlChars(text) {
	for (let i = 0; i < text.length; i++) {
		const code = text.charCodeAt(i);
		if ((code < 32 && code !== 9 && code !== 10 && code !== 13) || code === 127) return true;
	}
	return false;
}

/** cleanText - trims and returns a string, or null if the value is not a string */
function cleanText(value) {
	return typeof value === "string" ? value.trim() : null;
}

/** textRule - string with length range and optional character pattern */
function textRule(label, { min = 1, max, pattern, patternMessage }) {
	return (value) => {
		const text = cleanText(value);
		if (text === null || text.length === 0) return { error: `${label} is required` };
		if (text.length < min || text.length > max) {
			return { error: `${label} must be between ${min} and ${max} characters` };
		}
		if (pattern && !pattern.test(text)) {
			return { error: patternMessage || `${label} contains invalid characters` };
		}
		return { value: text };
	};
}

/** messageRule - free text, no HTML tags or control characters */
function messageRule(label, max) {
	return (value) => {
		const text = cleanText(value);
		if (text === null || text.length === 0) return { error: `${label} is required` };
		if (text.length > max) return { error: `${label} must be at most ${max} characters` };
		if (htmlTagRegex.test(text) || hasControlChars(text)) {
			return { error: `${label} contains invalid characters` };
		}
		return { value: text };
	};
}

/** nameRule - person name with allowed letters, spaces and . ' - */
const nameRule = (label, max) => textRule(label, { max, pattern: nameRegex });
/** optionRule - short dropdown/option value */
const optionRule = (label, max = 100) => textRule(label, { max, pattern: optionRegex });

/** emailRule - email format and length limits */
const emailRule = (value) => {
	const text = cleanText(value);
	if (text === null || text.length === 0) return { error: "Email is required" };
	const [local = ""] = text.split("@");
	if (text.length > 254 || local.length > 64 || !emailRegex.test(text)) {
		return { error: "Invalid email address" };
	}
	return { value: text };
};

/** phoneRule - exactly 10 digits */
const phoneRule = (label) => (value) => {
	const text = cleanText(value);
	if (text === null || text.length === 0) return { error: `${label} is required` };
	if (!phoneRegex.test(text)) return { error: `${label} must be exactly 10 digits` };
	return { value: text };
};

/** fileIdRule - Strapi file id returned by the upload API */
const fileIdRule = (value) => {
	if (!Number.isInteger(value) || value < 1) return { error: "Invalid CV file" };
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
	dob: textRule("Date of birth", { min: 6, max: 20, pattern: dateTextRegex }),
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

/** parseBody - body may arrive as a JSON string (text/plain fetch) or a parsed object */
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

/**
 * validatePayload - validates `{ data: {...} }` against a schema.
 * Returns `{ data }` containing only the known, cleaned fields, or `{ error }`.
 */
function validatePayload(body, schema) {
	const parsed = parseBody(body);
	const input = parsed && typeof parsed === "object" ? parsed.data : null;
	if (!input || typeof input !== "object" || Array.isArray(input)) {
		return { error: "Invalid request body" };
	}

	const data = {};
	for (const [field, rule] of Object.entries(schema)) {
		const result = rule(input[field]);
		if (result.error) return { error: result.error, field };
		data[field] = result.value;
	}
	return { data };
}

/** validateContactLead - validates the contact-us payload */
export const validateContactLead = (body) => validatePayload(body, contactSchema);
/** validateJobLead - validates the job application payload */
export const validateJobLead = (body) => validatePayload(body, jobSchema);
