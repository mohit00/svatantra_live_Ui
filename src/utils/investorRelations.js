export const slugifyInvestorText = (value = "") =>
	value
		.toString()
		.trim()
		.toLowerCase()
		.replace(/&/g, "and")
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");

const createMediaUrl = (media, baseUrl = "") => {
	if (!media?.url) {
		return "";
	}

	if (/^https?:\/\//i.test(media.url)) {
		return media.url;
	}

	return `${baseUrl}${media.url}`;
};

const mapDocument = (item, baseUrl, groupTitle = "") => {
	const fileUrl = createMediaUrl(item?.media, baseUrl);

	if (!item?.title && !fileUrl) {
		return null;
	}

	return {
		id: item?.id ?? `${groupTitle}-${fileUrl}`,
		title: item?.title || "Untitled document",
		fileUrl,
		groupTitle,
	};
};

export const normalizeInvestorCategory = (category, baseUrl = "") => {
	console.log(
		"Current Category:",
		category.title,
		category.slugRow?.map((x) => x.title)
	);
	const sections =
		category?.slugRow?.map((section, index) => {
			const primaryDocuments =
				section?.row
					?.map((item) => mapDocument(item, baseUrl))
					.filter(Boolean) || [];

			const groupedDocuments =
				section?.Category?.map((group, groupIndex) => {
					const documents =
						group?.row
							?.map((item) => mapDocument(item, baseUrl, group?.text || "Documents"))
							.filter(Boolean) || [];

					return {
						id: group?.id ?? `${index}-${groupIndex}`,
						title: group?.text || `Group ${groupIndex + 1}`,
						documents,
					};
				}).filter((group) => group.documents.length > 0) || [];

			const documentCount =
				primaryDocuments.length +
				groupedDocuments.reduce((total, group) => total + group.documents.length, 0);

			return {
				menuKey: `${section?.id ?? "section"}-${index}`,
				id: section?.id ?? index,
				title: section?.title || section?.slug || `Section ${index + 1}`,
				slug: section?.slug || section?.title || `section-${index + 1}`,
				anchorId: slugifyInvestorText(
					section?.slug || section?.title || `section-${index + 1}`
				),
				documentCount,
				primaryDocuments,
				groupedDocuments,
			};
		}) || [];

	return {
		id: category?.id,
		title: category?.title || "Investor Relations",
		slug: category?.slug || "",
		sections,
		documentCount: sections.reduce((total, section) => total + section.documentCount, 0),
		sectionCount: sections.length,
	};
};
