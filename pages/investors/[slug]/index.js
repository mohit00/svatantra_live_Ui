// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import Button from "@/components/Buttons/Button";
import Footer2 from "@/components/Footer2";
import AccordianCommon from "@/components/AccordianCommon";
// SECTIONS //

// PLUGINS //

// SERVICES //
import { getInvestorsSlug } from "@/services/Investors";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// IMAGES //
import download_icon from "../../../public/img/download_icon.svg";

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

/** Inside1 Page */
export default function SlugPage({ data }) {
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
	const breadcrumbProps = isInitialPublicOfferings
		? { linknest2: true, linknestTitle2: data[0]?.title }
		: { linknest1: `investors/${data[0]?.title}`, linknestTitle1: data[0]?.title };
	const visibleSlugRows = data[0]?.slugRow?.filter(
		(item) => !hiddenRows.includes(normaliseSlug(item?.slug))
	);

	/** The section this page renders itself, instead of listing a link to it */
	const inlineSection = inlineSlugRowCategories.includes(
		normaliseSlug(data[0]?.slug)
	)
		? visibleSlugRows?.[0]
		: null;

	/** Enclosure cell — shared by the section table and its category tables */
	const downloadCell = (item) => (
		<a
			href={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item?.media?.url}`}
			target="_blank"
			rel="noreferrer"
		>
			<img
				src={download_icon.src}
				className={styles.download_icon}
				alt="Download icon"
			/>
			<span>Download</span>
		</a>
	);

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={data[0]?.title} Desc={""} OgImg={""} Url={"/inside1"} />

			{/* Header */}
			<Header />
			<Breadcrum
				link5="investors"
				linkTitle={"Investors"}
				{...breadcrumbProps}
			/>
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
		</div>
	);
}
