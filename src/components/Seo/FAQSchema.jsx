import React from "react";

/**
 * Recursively extract plain text from React elements
 */
function getText(node) {
	if (!node) return "";

	if (typeof node === "string" || typeof node === "number") {
		return String(node);
	}

	if (Array.isArray(node)) {
		return node.map(getText).join(" ");
	}

	if (React.isValidElement(node)) {
		return getText(node.props.children);
	}

	return "";
}

/**
 * Remove HTML tags and extra spaces
 */
function stripHtml(text = "") {
	return text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export default function FAQSchema({ faqs = [] }) {
	if (!Array.isArray(faqs) || faqs.length === 0) return null;

	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((item) => ({
			"@type": "Question",
			name: item.title || "",
			acceptedAnswer: {
				"@type": "Answer",
				text: stripHtml(getText(item.children)),
			},
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema),
			}}
		/>
	);
}