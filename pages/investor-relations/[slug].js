import { useEffect, useMemo, useState } from "react";

import Breadcrum from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import { getInvestorsSlug } from "@/services/Investors";
import styles from "@/styles/pages/InvestorRelations.module.scss";
import {
	normalizeInvestorCategory,
	slugifyInvestorText,
} from "@/utils/investorRelations";

import downloadIcon from "../../public/img/download_icon.svg";

const resolveActiveSection = (menuItems, hash = "") => {
	if (!menuItems.length) {
		return "";
	}

	const hashedValue = hash?.replace(/^#/, "");

	if (hashedValue && menuItems.some((item) => item.anchorId === hashedValue)) {
		return menuItems.find((item) => item.anchorId === hashedValue)?.menuKey || "";
	}

	return menuItems[0].menuKey;
};

export async function getServerSideProps({ params }) {
	const categoryResponse = await getInvestorsSlug(params.slug);
	const category = categoryResponse?.data?.[0];

	if (!category) {
		return {
			notFound: true,
		};
	}

	const baseUrl =
		process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL || process.env.STRAPI_DO_BASE_URL || "";

	return {
		props: {
			category: normalizeInvestorCategory(category, baseUrl),
			sidebarItems:
				category?.slugRow?.map((section, index) => ({
					menuKey: `${section?.id ?? "section"}-${index}`,
					id: section?.id ?? index,
					title: section?.title || section?.slug || `Section ${index + 1}`,
					anchorId: slugifyInvestorText(
						section?.slug || section?.title || `section-${index + 1}`
					),
				})) || [],
		},
	};
}

export default function InvestorRelationsPage({ category, sidebarItems }) {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		setActiveSection(resolveActiveSection(sidebarItems, window.location.hash));

		const handleHashChange = () => {
			setActiveSection(resolveActiveSection(sidebarItems, window.location.hash));
		};

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [sidebarItems]);

	const selectedSection = useMemo(() => {
		if (!category.sections.length) {
			return null;
		}

		return (
			category.sections.find((section) => section.menuKey === activeSection) ||
			category.sections[0]
		);
	}, [activeSection, category.sections]);

	const selectedDocuments = useMemo(() => {
		if (!selectedSection) {
			return [];
		}

		return [
			...selectedSection.primaryDocuments,
			...selectedSection.groupedDocuments.flatMap((group) => group.documents),
		];
	}, [selectedSection]);

	const handleSectionChange = (item) => {
		setActiveSection(item.menuKey);
		if (typeof window !== "undefined") {
			window.history.replaceState(null, "", `#${item.anchorId}`);
		}
	};
	// console.log("CATEGORY", category);
	// console.log("SECTIONS", category.sections);

	return (
		<div>
			<MetaTags
				Title={`${selectedSection?.title || category.title} | Investor Relations`}
				Desc={selectedSection?.title || category.title}
				OgImg={""}
				Url={`/investor-relations/${category.slug}`}
			/>

			<Header />

			<Breadcrum
				link5="investors"
				linkTitle={"Investor Relations"}
				linknest1={`investor-relations/${category.slug}`}
				linknestTitle1={category.title}
			/>

			<main className={styles.investorRelationsPage}>
				<section className={`${styles.intro} pb_40`}>
					<div className="container">
						<div className={styles.introWrap}>
							<h1 className="text_xxxl color_primary pb_10">{category.title}</h1>
							<p className={`${styles.introText} text_md`}>
								Access investor documents and disclosures for the selected
								section.
							</p>
						</div>
					</div>
				</section>

				<section className={`${styles.documentPage} pb_80`}>
					<div className="container">
						<div className={styles.layout}>
							<aside className={styles.sidebar}>
								<div className={styles.sidebarInner}>
									<nav className={styles.sectionNav}>
										{sidebarItems.map((item) => (
											<button
												key={item.menuKey}
												type="button"
												data-active={selectedSection?.menuKey === item.menuKey}
												onClick={() => handleSectionChange(item)}
											>
												{item.title}
											</button>
										))}
									</nav>
								</div>
							</aside>

							<div className={styles.contentArea}>
								<section className={styles.contentSection}>
									{selectedSection && (
										<>
											<div className={styles.sectionBlock}>
												<div className={styles.titleBar}>
													<h2 className="text_lg color_white">
														{selectedSection.title}
													</h2>
													<p className={`${styles.documentCount} text_xxs color_white`}>
														{selectedSection.documentCount} Documents
													</p>
												</div>
												<div className={styles.sectionBody}>
													{selectedDocuments.length > 0 && (
														<div className={styles.documentList}>
															{selectedDocuments.map((document) => (
																<div key={document.id} className={styles.documentRow}>
																	<p className="text_sm color_light_black">
																		{document.title}
																	</p>
																	{document.fileUrl && (
																		<div className={styles.documentActions}>
																			<a
																				href={document.fileUrl}
																				target="_blank"
																				rel="noreferrer"
																				download
																			>
																				<img src={downloadIcon.src} alt="" />
																				<span>Download</span>
																			</a>
																		</div>
																	)}
																</div>
															))}
														</div>
													)}
												</div>
											</div>

											{selectedSection.documentCount === 0 && (
												<div className={styles.emptyState}>
													<p className="text_sm color_light_black">
														No documents are available in this section yet.
													</p>
												</div>
											)}
										</>
									)}
								</section>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer2 />
		</div>
	);
}
