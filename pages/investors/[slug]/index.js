// MODULES //
import { useState } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import Button from "@/components/Buttons/Button";
import Footer2 from "@/components/Footer2";
import AccordianCommon from "@/components/AccordianCommon";
import IpoDisclaimerPopup from "@/components/IpoDisclaimerPopup";
// SECTIONS //

// PLUGINS //

// SERVICES //
import { getInvestorsSlug } from "@/services/Investors";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// IMAGES //
import download_icon from "../../../public/img/download_icon.svg";
import play_icon from "../../../public/img/icons/play_icon.svg";

// DATA //
/** Data Fetching */
export async function getServerSideProps({ params }) {
	const data = await getInvestorsSlug(params.slug);

	return {
		props: {
			data: data.data,
		},
	};
}

/** Sections hidden from the UI only — the data stays untouched in Strapi */
const hiddenSlugRows = {
	"circulars-and-announcements": ["debenture-trustee-noting-certificate"],
};

/**
 * Categories that render their only section on this page instead of linking out
 * to /investors/<category>/<section>. Keyed by category slug rather than by
 * section count, because credit-and-grading also has a single section and keeps
 * its existing "Read More" navigation.
 */
const inlineSlugRowCategories = ["initial-public-offerings"];

/**
 * The IPO documents that may only be opened after the user accepts the
 * disclaimer. Matched on the normalised row title rather than on the Strapi row
 * id or the media filename: both of those change whenever the document is
 * re-uploaded, which would silently drop the gate on a legal restriction.
 *
 * Compared with normaliseSlug, so casing and stray whitespace in Strapi do not
 * matter. Exact matches only - a differently named document (for example an
 * addendum) is deliberately not covered and needs to be added here explicitly.
 */
const disclaimerGatedDocuments = [
	"drhp",
	"draft-abridged-prospectus",
	"audio-visual-drhp-english",
	"audio-visual-drhp-hindi",
];

/**
 * Rows that are videos rather than documents: these show the play icon and
 * "Play" instead of the download icon and "Download". Matched on the title for
 * the same reason as above - the media is expected to be re-uploaded.
 */
const audioVisualDocuments = [
	"audio-visual-drhp-english",
	"audio-visual-drhp-hindi",
];

/** Inside1 Page */
export default function SlugPage({ data, breadcrumbContext = "investors" }) {
	/** createSlug */
	const createSlug = (text) =>
		text
			.trim()
			.replace(/\s+/g, "-")
			.replace(/[^a-zA-Z0-9-]/g, "")
			.replace(/-+$/, "");

	/** normaliseSlug - same comparison the investors service uses */
	const normaliseSlug = (text = "") =>
		text.trim().toLowerCase().replace(/\s+/g, "-");

	const hiddenRows = hiddenSlugRows[normaliseSlug(data[0]?.slug)] || [];
	const isInitialPublicOfferings =
		normaliseSlug(data[0]?.slug) === "initial-public-offerings";
	let breadcrumbProps = {
		link5: "investors",
		linkTitle: "Investors",
	};

	if (breadcrumbContext === "investor-relations") {
		breadcrumbProps = {
			link5: "investor-relations",
			linkTitle: "Investor Relations",
			linknest2: true,
			linknestTitle2: data[0]?.title,
		};
	} else if (isInitialPublicOfferings) {
		breadcrumbProps = {
			...breadcrumbProps,
			linknest2: true,
			linknestTitle2: data[0]?.title,
		};
	} else {
		breadcrumbProps = {
			...breadcrumbProps,
			linknest1: `investors/${data[0]?.title}`,
			linknestTitle1: data[0]?.title,
		};
	}
	const visibleSlugRows = data[0]?.slugRow?.filter(
		(item) => !hiddenRows.includes(normaliseSlug(item?.slug))
	);

	/** The section this page renders itself, instead of listing a link to it */
	const inlineSection = inlineSlugRowCategories.includes(
		normaliseSlug(data[0]?.slug)
	)
		? visibleSlugRows?.[0]
		: null;

	/** The document waiting on a disclaimer decision, or null */
	const [pendingDocument, setPendingDocument] = useState(null);

	/** Absolute URL of an enclosure — same string the anchors have always used */
	const mediaUrl = (item) =>
		`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item?.media?.url}`;

	/**
	 * Only the IPO category's DRHP and Draft Abridged Prospectus are gated.
	 * Checking the category as well as the title keeps a same-named row in any
	 * other investor category on its existing behaviour.
	 */
	const requiresDisclaimer = (item) =>
		isInitialPublicOfferings &&
		disclaimerGatedDocuments.includes(normaliseSlug(item?.title));

	/** I Confirm — open the document the user originally asked for */
	const handleDisclaimerConfirm = () => {
		// Opened synchronously from the click so the browser keeps treating it
		// as a user gesture and the popup blocker stays out of the way.
		if (pendingDocument?.url) {
			window.open(pendingDocument.url, "_blank", "noopener,noreferrer");
		}
		setPendingDocument(null);
	};

	/** X, backdrop, Escape and the post-decline Close — never opens anything */
	const handleDisclaimerClose = () => setPendingDocument(null);

	/** Videos get the play icon and "Play"; everything else is unchanged */
	const isAudioVisual = (item) =>
		audioVisualDocuments.includes(normaliseSlug(item?.title));

	/** Icon + label inside the enclosure link, shared by both branches below */
	const enclosureLabel = (item) =>
		isAudioVisual(item) ? (
			<>
				<img src={play_icon.src} className={styles.play_icon} alt="Play icon" />
				<span>Play</span>
			</>
		) : (
			<>
				<img
					src={download_icon.src}
					className={styles.download_icon}
					alt="Download icon"
				/>
				<span>Download</span>
			</>
		);

	/** Enclosure cell — shared by the section table and its category tables */
	const downloadCell = (item) => {
		// Gated rows keep the real href so the link still looks and behaves like
		// every other row (styling, hover, open-in-new-tab affordance); the
		// click is intercepted and only completed after the disclaimer.
		if (requiresDisclaimer(item)) {
			return (
				<a
					href={mediaUrl(item)}
					target="_blank"
					rel="noreferrer"
					onClick={(event) => {
						event.preventDefault();
						setPendingDocument({ title: item?.title, url: mediaUrl(item) });
					}}
				>
					{enclosureLabel(item)}
				</a>
			);
		}

		return (
			<a href={mediaUrl(item)} target="_blank" rel="noreferrer">
				{enclosureLabel(item)}
			</a>
		);
	};

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={data[0]?.title} Desc={""} OgImg={""} Url={"/inside1"} />

			{/* Header */}
			<Header />
			<Breadcrum {...breadcrumbProps} />
			{/* Page Content starts here */}
			<main className={styles.investors_page}>
				<div className="container">
					<h1 className="text_xxxl color_primary pb_40">{data[0]?.title}</h1>

					{inlineSection ? (
						<section className={`${styles.investors_main} pb_80`}>
							{inlineSection?.row?.length > 0 && (
								<div className={`${styles.table_wrap}`}>
									<table>
										<thead>
											<tr>
												<th>Details</th>
												<th>Enclosures</th>
											</tr>
										</thead>
										<tbody>
											{inlineSection.row.map((item) => (
												<tr key={item.id}>
													<td>{item.title}</td>
													<td>{downloadCell(item)}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}

							{inlineSection?.Category?.length > 0 && (
								<div className={`${styles.accordian_main} pt_40`}>
									<AccordianCommon
										fontStyle={"text_lg"}
										fontWeight={"f_w_m"}
										fontFamily={"font_primary"}
										fontColor={"color_light_black"}
										items={inlineSection.Category.map((category) => ({
											title: category.text,
											children: (
												<div className={`${styles.table_wrap}`}>
													<table>
														<thead>
															<tr>
																<th>Details</th>
																<th>Enclosures</th>
															</tr>
														</thead>
														<tbody>
															{category.row.map((item) => (
																<tr key={item.id}>
																	{item?.title && <td>{item?.title}</td>}
																	{item?.media?.url && <td>{downloadCell(item)}</td>}
																</tr>
															))}
														</tbody>
													</table>
												</div>
											),
										}))}
									/>
								</div>
							)}
						</section>
					) : (
						<div className={`${styles.main_title_btn}  pb_80`}>
							{visibleSlugRows?.map((item, ind) => {
								return (
									<div className={`${styles.title_btn} f_w_j`} key={ind}>
										<div className={`${styles.title}`}>
											<h2 className="text_lg f_w_m font_primary color_light_black">
												{item.title}
											</h2>
										</div>
										<a
											href={`/investors/${createSlug(data[0]?.slug)}/${createSlug(
												item.slug
											)}`}
										>
											<Button buttonType="four" condition={"white"} title={"Read More"} />
										</a>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer2 />

			{/* Mounted once for the whole page, not per row: the IPO tables sit
				inside AccordianCommon, which measures panel scrollHeight, and a
				popup per row would interfere with that measurement. */}
			<IpoDisclaimerPopup
				isOpen={Boolean(pendingDocument)}
				document={pendingDocument}
				onConfirm={handleDisclaimerConfirm}
				onClose={handleDisclaimerClose}
			/>
		</div>
	);
}
