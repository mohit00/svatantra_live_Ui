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
import banner_desktop from "../../public/img/newImg/ilNew.jpg";
import mobile_banner from "../../public/img/newImg/newMsmeImg.jpg";
import pdf_icon from "../../public/img/pdf_icon.svg";

import identification from "../../public/img/our-products/microfinance/identification.svg";
import training from "../../public/img/our-products/microfinance/training.svg";
import disbursement from "../../public/img/our-products/microfinance/disbursement.svg";
import formation from "../../public/img/our-products/microfinance/formation.svg";
import appraisal from "../../public/img/our-products/microfinance/appraisal.svg";
import repayment from "../../public/img/our-products/microfinance/repayment.svg";
import { getAllBlogs } from "@/services/BlogService";

// DATA //
/** */
export const getStaticProps = async (context) => {
	const blogsData = await getAllBlogs();
	return { props: { blogsData }, revalidate: 60 };
};
/** MsmeLoans Page */
export default function MsmeLoans({ blogsData }) {
	const loanAmountData = {
		loanAmount: "₹ 1 lakh to ₹ 3 lakh",
		tenure: "24 to 36 Months",
		interestRate: "22.75% to 24.00%",
	};
	const pavingThePathData = {
		title: "Scale small businesses to robust MSMEs",
		description:
			"We tailor our Individual Loans to build entrepreneurs who fuel the Indian economy, enabling aspiring individuals, especially rural women to invest in their economic growth. With easy access to micro-credit at one of the lowest interest rates in the Country, we provide timely support to address the evolving business needs. From starting a venture or expanding a rural based business, our Individual Loans can help maximise success and achievements throughout an individual's entrepreneurial journey.",
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
		title: "Common queries",
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
				title: "What is a microfinance institution (MFI)?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						A Microfinance Institution (MFI) is an organization that provides
						financial services to low-income individuals.
					</p>
				),
			},
			{
				title: "How is Svatantra different from other MFIs?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						Svatantra is one of the fastest growing MFIs in India. It is the first
						institution to receive the NBFC-MFI license which was introduced by the
						RBI in 2012. It is also the only institution that makes 100% cashless
						disbursements. Svatantra offers one of the lowest interest rates in the
						industry. Unlike other MFIs, innovation forms the core of business
						processes and is used as a tool to drive, optimize as well as expand
						business.
					</p>
				),
			},
			{
				title: "What is a microfinance institution (MFI)?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						A Microfinance Institution (MFI) is an organization that provides
						financial services to low-income individuals.
					</p>
				),
			},
		],
		brochureText: "Everything you need to know about our financial services",
		brochureUrl: "https://www.google.com/",
	};
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Individual Loans"}
				Desc={""}
				OgImg={""}
				Url={"/individual-loans"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.MsmeLoansPage}>
				<Breadcrum
					linkTitle="Our Products"
					linkTitle2="Individual Loans"
					link10="/our-products/individual-loans"
				/>
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={mobile_banner.src}
					bannerTitle="Individual loans"
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
							{/* <table>
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
										Svatantra offers Credit Linked Insurance, a life insurance tailored to
										provide financial support to our women customers and their spouses. It
										ensures the family remains economically independent, especially in
										case of death of the insured person.
									</td>
								</tr>
							</table> */}
							<table>
								<thead>
									<tr>
										<th>Products</th>
										<th>Loan amount</th>
										<th>Tenure</th>
										<th>Repayment option</th>
										<th>Rate of interest (p.a)</th>
										<th>Loan processing fee</th>
										<th>Prepayment charges</th>
									</tr>
								</thead>
								<tr>
									<td>Microfinance loans</td>
									<td>₹ 5,000 to ₹ 1 lakh</td>
									<td>12 to 30 Months</td>
									<td>Monthly</td>
									<td>22.30% to 24.00%*</td>
									<td>1.50% (+GST)</td>
									<td>Nil</td>
								</tr>
								<tr>
									<td>Individual Loans</td>
									<td>₹ 1 lakh to ₹ 3 lakh</td>
									<td>24 to 36 Months</td>
									<td>Monthly</td>
									<td>22.75% to 24.00%</td>
									<td>1.50% (+GST)</td>
									<td>Nil</td>
								</tr>
								<tr>
									<td rowSpan="2">Insurance</td>
									<td colSpan="6">
										Svatantra offers Credit Linked Insurance, a life insurance tailored to
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
							<p className={`${styles.averageRate} text_sm pt_20 f_w_l opacity_80`}>
								Penal charges - Nil
							</p>
						</div>
						<div className={`${styles.btnBox} pt_30`}>
							<a
								href="https://www.svatantramicrofin.com/our-products/customer-protection/disclosure-of-interest-rates"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span>
									<img src={pdf_icon.src} alt="icon" />
								</span>
								Disclosure of Interest Rate
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
				<div className="pt_60"></div>
				{/* <CommonQueries
					title={commonQueriesData.title}
					faqItems={commonQueriesData.faqItems}
					brochureText={commonQueriesData.brochureText}
					brochureUrl={commonQueriesData.brochureUrl}
				/> */}
				<BlogsInsights data={blogsData} />
				<Homecontact
					formTitle="Fill in the details, and our team of experts will contact you to help
								bring your entrepreneurial vision to life."
				/>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
