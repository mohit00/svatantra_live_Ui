// MODULES //

// COMPONENTS //
import Breadcrum from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import LoanAmount from "@/sections/our-products/LoanAmount";
import PavingThePath from "@/sections/our-products/PavingThePath";
import LoanFactSheet from "@/sections/our-products/LoanFactSheet";
import SixSteps from "@/sections/our-products/SixSteps";
import CommonQueries from "@/sections/our-products/CommonQueries";
import BlogsInsights from "@/sections/our-products/BlogsInsights";
import Homecontact from "@/sections/Homecontact";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/MsmeLoans.module.scss";

// UTILS //

// IMAGES //
import banner_desktop from "../../public/img/our-products/microfinance/banner_desktop.jpg";
import pdf_icon from "../../public/img/pdf_icon.svg";

import identification from "../../public/img/our-products/microfinance/identification.svg";
import training from "../../public/img/our-products/microfinance/training.svg";
import disbursement from "../../public/img/our-products/microfinance/disbursement.svg";
import formation from "../../public/img/our-products/microfinance/formation.svg";
import appraisal from "../../public/img/our-products/microfinance/appraisal.svg";
import repayment from "../../public/img/our-products/microfinance/repayment.svg";

// DATA //

/** MsmeLoans Page */
export default function MsmeLoans() {
	const loanAmountData = {
		loanAmount: "₹ 3,3456 to ₹ 1 lakh",
		tenure: "20 to 30 Months",
		interestRate: "20.75% to 24.25%",
	};
	const pavingThePathData = {
		title: "Scale your MSMEs to large enterprises",
		description:
			"We tailor our MSME loans to build entrepreneurs who fuel the Indian economy, enabling aspiring individuals, especially rural women to invest in their economic growth. With easy access to micro-credit at one of the lowest interest rates in the Country, we provide timely support to address the evolving business needs. From starting a venture or expanding your startup, our MSME loans can help maximise success and achievements throughout your entrepreneurial journey.",
		subTitle: "Key features powering our entrepreneurs and our economy",
		features: [
			"We provide one of the lowest interest rates in India.",
			"Services that enable rural and semi-urban women to become agents of change within their communities.",
			"Customised solutions for entrepreneurs to achieve business goals and drive economic growth.",
			"A financial ecosystem that ensures every individual experiences a self-reliant future.",
		],
	};
	const sixStepsData = {
		title: "Take the six steps to economic self-sufficiency",
		steps: [
			{
				icon: identification.src,
				title: "Identification",
				description:
					"Identify customers, especially rural women who benefit from loans through detailed surveys.",
			},
			{
				icon: training.src,
				title: "Training",
				description:
					"Conduct workshops on financial literacy to help prospective customers develop money management skills.",
			},
			{
				icon: disbursement.src,
				title: "Disbursement",
				description:
					"Transfer money to bank accounts of the shortlisted customers who are starting a business or expanding existing ventures.",
			},
			{
				icon: formation.src,
				title: "Formation",
				description:
					"The field officers create groups of 5-12 people, primarily of women customers.",
			},
			{
				icon: appraisal.src,
				title: "Group Appraisal",
				description:
					"Implement a detailed application process to shortlist potential customers.",
			},
			{
				icon: repayment.src,
				title: "Repayment/Collection",
				description:
					"Offer timely guidance and collection of the monthly loan instalments.",
			},
		],
	};
	const commonQueriesData = {
		title: "Common Queries3",
		faqItems: [
			{
				title: "What is microfinance?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						Microfinance refers to a variety of affordable financial services that
						target low-income clients.
					</p>
				),
			},
			{
				title: "What is a Microfinance Institution (MFI)?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						A Microfinance Institution (MFI) is an organization that provides
						financial services to low-income individuals.
					</p>
				),
			},
			{
				title: "What is a Microfinance Institution (MFI)?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						A Microfinance Institution (MFI) is an organization that provides
						financial services to low-income individuals.
					</p>
				),
			},
			{
				title: "What is a Microfinance Institution (MFI)?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						A Microfinance Institution (MFI) is an organization that provides
						financial services to low-income individuals.
					</p>
				),
			},
		],
		brochureText: "Everything you need to know about our financial services2",
		brochureUrl: "https://www.google.com/",
	};
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"MSME Loans"} Desc={""} OgImg={""} Url={"/msme-loans"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.MsmeLoansPage}>
				<Breadcrum link2="Our Products" link3="MSME Loans" />
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={banner_desktop.src}
					bannerTitle="Micro Small & Medium Enterprise (MSME) loans"
				/>
				<LoanAmount
					loanAmount={loanAmountData.loanAmount}
					tenure={loanAmountData.tenure}
					interestRate={loanAmountData.interestRate}
				/>
				<PavingThePath
					title={pavingThePathData.title}
					description={pavingThePathData.description}
					subTitle={pavingThePathData.subTitle}
					features={pavingThePathData.features}
				/>
				<section className={`${styles.LoanFactSheet} pb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap} pb_40`}>
							<h2 className="text_xxxl color_primary ">
								A quick guide to our loan fact sheet
							</h2>
						</div>
						<div className={`${styles.table_wrap}`}>
							<table>
								<thead>
									<tr>
										<th>Products</th>
										<th>Loan amount</th>
										<th>Tenure</th>
										<th>Repayment option</th>
										<th>Rate of interest (p.a)</th>
										<th>Loan processing fee</th>
										<th>Repayment charges</th>
									</tr>
								</thead>
								<tr>
									<td>Microfinance loans</td>
									<td>₹ 5,369 to ₹ 1 lakh</td>
									<td>12 to 30 Months</td>
									<td>Monthly</td>
									<td>19.75% to 24.25%*</td>
									<td>0.75% to 1.50% (+GST)</td>
									<td>Nil</td>
								</tr>
								<tr>
									<td>MSME loans</td>
									<td>₹ 1 lakh to ₹ 3 lakh</td>
									<td>24 to 36 Months</td>
									<td>Monthly</td>
									<td>23%</td>
									<td>2% (+GST)</td>
									<td>
										2% (excluding GST) on principal amount outstanding as on date of
										payment
									</td>
								</tr>
								<tr>
									<td rowSpan="2">Insurance</td>
									<td colSpan="6">
										Svantra offers Credit Linked Insurance, a life insurance tailored to
										provide financial support to our women customers and their spouses. It
										ensures the family remains economically independent, especially in
										case of death of the insured person.
									</td>
								</tr>
								{/* <tr className={`${styles.bgWhite} ${styles.bgBorder}`}>
									<td colSpan="6">
										₹ 1 lakh to ₹ 3 lakhCredit Linked Insurance is a life insurance
										offered by Svatantra to women customers and her spouse to provide
										relief to her family in case of death of the insured person.
									</td>
								</tr>
								<tr className={`${styles.bgWhite} `}>
									<td colSpan="7" className={`${styles.bgBorder}`}>
										ROI is a function of risk profile of the customers and will be
										reviewed periodically. All the products above Rs.25000 have tenure
										ranging from 24 to 30 months. Apart from credit life insurance all
										other insurance products are optional (consent based) Penal charges -
										Nil
									</td>
								</tr> */}
							</table>
						</div>
						<div className={`${styles.btnBox} pt_30`}>
							<a href="">
								<span>
									<img src={pdf_icon.src} alt="icon" />
								</span>
								Disclouser of Interest Rate
							</a>
							<a href="">
								<span>
									<img src={pdf_icon.src} alt="icon" />
								</span>
								Customer Awareness on Overdue, SMA/ NPA
							</a>
						</div>
					</div>
				</section>
				<SixSteps title={sixStepsData.title} steps={sixStepsData.steps} />
				<CommonQueries
					title={commonQueriesData.title}
					faqItems={commonQueriesData.faqItems}
					brochureText={commonQueriesData.brochureText}
					brochureUrl={commonQueriesData.brochureUrl}
				/>
				<BlogsInsights />
				<Homecontact />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
