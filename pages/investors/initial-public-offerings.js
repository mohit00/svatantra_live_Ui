import Breadcrum from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import styles from "@/styles/pages/InvestorRelations.module.scss";

import downloadIcon from "../../public/img/download_icon.svg";

const ipoDocuments = [
	{ id: 1, title: "DRHP", fileUrl: "#" },
	{ id: 2, title: "Draft Abridged Prospectus", fileUrl: "#" },
	{ id: 3, title: "Audio-Visual DRHP English", fileUrl: "#" },
	{ id: 4, title: "Audio-Visual DRHP Hindi", fileUrl: "#" },
	{ id: 5, title: "Red Herring Prospectus", fileUrl: "#" },
	{
		id: 6,
		title: "OS amount overdue to Material Creditors as on 31 Dec 2025",
		fileUrl: "#",
	},
	{ id: 7, title: "Industry Report - Cement Sector", fileUrl: "#" },
	{ id: 8, title: "Industry Research Report", fileUrl: "#" },
	{ id: 9, title: "Corporate Governance Policy", fileUrl: "#" },
];

const groupCompanies = [
	"Aditya Birla Sun Life Insurance Company Limited",
	"Ananya Birla Foundation",
	"IGH Holdings Private Limited",
	"IKAI ASAI Online Services Private Limited (formerly known as Svatantra Online Services Private Limited)",
	"Violicina Limited",
	"Vodafone Idea Limited",
];

export default function InitialPublicOfferingsPage() {
	return (
		<div>
			<MetaTags
				Title="Initial Public Offerings | Investor Relations"
				Desc="Browse through our Initial Public Offerings"
				OgImg=""
				Url="/investor-relations/initial-public-offerings"
			/>

			<Header />

			<Breadcrum
				link5="investors"
				linkTitle="Investors"
				linknest1="investor/initial-public-offerings"
				linknestTitle1="Initial Public Offerings"
			/>

			<main className={styles.investorRelationsPage}>
				<section className={`${styles.intro} pb_40`}>
					<div className="container">
						<div className={styles.introWrap}>
							<h1 className="text_xxxl color_primary pb_10">
								Initial Public Offerings
							</h1>

							<p className={`${styles.introText} text_md`}>
								Browse through our Initial Public Offerings
							</p>
						</div>
					</div>
				</section>

				<section className={`${styles.documentPage} pb_80`}>
					<div className="container">
						<div className={styles.contentArea}>
							{/* IPO Documents */}
							<div className={styles.sectionBlock}>
								<div className={styles.titleBar}>
									<h2 className="text_lg color_white">
										Initial Public Offerings
									</h2>

									<p
										className={`${styles.documentCount} text_xxs color_white`}
									>
										{ipoDocuments.length} Documents
									</p>
								</div>

								<div className={styles.sectionBody}>
									<div className={styles.documentList}>
										{ipoDocuments.map((document) => (
											<div
												key={document.id}
												className={styles.documentRow}
											>
												<p className="text_sm color_light_black">
													{document.title}
												</p>

												<div className={styles.documentActions}>
													<a href={document.fileUrl}>
														<img
															src={downloadIcon.src}
															alt="Download"
														/>
														<span>Download</span>
													</a>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Group Companies */}
							<div
								className={styles.sectionBlock}
								style={{ marginTop: "40px" }}
							>
								<div className={styles.titleBar}>
									<h2 className="text_lg color_white">
										Group Companies
									</h2>

									<p
										className={`${styles.documentCount} text_xxs color_white`}
									>
										{groupCompanies.length} Companies
									</p>
								</div>

								<div className={styles.sectionBody}>
									<div className={styles.documentList}>
										{groupCompanies.map((company, index) => (
											<div
												key={index}
												className={styles.documentRow}
											>
												<p className="text_sm color_light_black">
													{index + 1}. {company}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer2 />
		</div>
	);
}