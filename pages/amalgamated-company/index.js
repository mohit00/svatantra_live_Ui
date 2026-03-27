// MODULES //
import Link from "next/link";

// COMPONENTS //
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";

// STYLES //
import styles from "@/styles/pages/InvestorIndex.module.scss";

// IMAGES //
import investor_thumb from "../../public/img/amalgamated-company/investors.jpg";
import governance_thumb from "../../public/img/amalgamated-company/governace.jpg";
import impact_thumb from "../../public/img/amalgamated-company/impact.jpg";
import amalgamation_thumb from "../../public/img/amalgamated-company/amalgamation.jpg";
import arrow_btn from "../../public/img/arrow_btn.svg";

export default function AmalgamatedCompanyPage() {

	return (
		<div>
			{/* Meta Tags */}
			<MetaTags
				Title={"Amalgamated Company"}
				Desc={""}
				OgImg={""}
				Url={"/amalgamated-company"}
			/>

			{/* Header */}
			<Header />

			{/* Breadcrumb */}
			<Breadcrum
				link5="/amalgamated-company"
				linkTitle={"Amalgamated Company"}
			/>

			{/* Main Content */}
			<main className={styles.InvestorIndexPage}>
				<section className="container">
					<h1 className="text_xxxl color_primary pb_10">
						Amalgamated Company
					</h1>

					<p className="text_md">
						Archives Documents of Chaitanya India Fin Credit Private Limited
					</p>

					<div className={`${styles.StoriesOfSvatantra_main} pb_80`}>
						<div className="container">
							<div className={`${styles.content_main_wrap} pt_40`}>
								<div className={`${styles.box_wrap}`}>

									{/* Investor Relations  */}
									<Link
										href="/amalgamated-company/investor-relations"
										className={styles.box_item}
									>
										<img
											src={investor_thumb.src}
											className="b_r_10"
											alt="Investor Relations"
										/>
										<div className={`${styles.content} pt_20 f_r_aj_between`}>
											<p className="text_md color_light_black font_secondary opacity_8">
												Investor Relations
											</p>
											<img src={arrow_btn.src} alt="arrow icon" />
										</div>
									</Link>

									{/* Governance */}
									<Link
										href="/amalgamated-company/governance"
										className={styles.box_item}
									>
										<img
											src={governance_thumb.src}
											className="b_r_10"
											alt="Governance"
										/>
										<div className={`${styles.content} pt_20 f_r_aj_between`}>
											<p className="text_md color_light_black font_secondary opacity_8">
												Governance
											</p>
											<img src={arrow_btn.src} alt="arrow icon" />
										</div>
									</Link>

									{/* Our Impact */}
									<Link
										href="/amalgamated-company/our-impact"
										className={styles.box_item}
									>
										<img
											src={impact_thumb.src}
											className="b_r_10"
											alt="Our Impact"
										/>
										<div className={`${styles.content} pt_20 f_r_aj_between`}>
											<p className="text_md color_light_black font_secondary opacity_8">
												Our Impact
											</p>
											<img src={arrow_btn.src} alt="arrow icon" />
										</div>
									</Link>

									{/* Our amalgamation */}
									<Link
										href="/amalgamated-company/scheme-of-amalgamation"
										className={styles.box_item}
									>
										<img
											src={amalgamation_thumb.src}
											className="b_r_10"
											alt="Our Impact"
										/>
										<div className={`${styles.content} pt_20 f_r_aj_between`}>
											<p className="text_md color_light_black font_secondary opacity_8">
												Scheme of Amalgamation
											</p>
											<img src={arrow_btn.src} alt="Proposed Scheme of Amalgamation" />
										</div>
									</Link>

								</div>
							</div>
						</div>
					</div>

				</section>
			</main>

			{/* Footer */}
			<Footer2 />
		</div>
	);
}