/* eslint-disable @next/next/no-html-link-for-pages */
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
import styles from "@/styles/pages/MicrofinanceLoans.module.scss";

// UTILS //

// IMAGES //
import banner_desktop from "../../public/img/newImg/microNew.jpg";
import mobile_banner from "../../public/img/newImg/micreMobile.jpg";
import identification from "../../public/img/our-products/microfinance/identification.svg";
import training from "../../public/img/our-products/microfinance/training.svg";
import disbursement from "../../public/img/our-products/microfinance/disbursement.svg";
import formation from "../../public/img/our-products/microfinance/formation.svg";
import appraisal from "../../public/img/our-products/microfinance/appraisal.svg";
import repayment from "../../public/img/our-products/microfinance/repayment.svg";

// DATA //
import { getAllBlogs } from "@/services/BlogService";
/** */
export const getStaticProps = async (context) => {
	const blogsData = await getAllBlogs();
	return { props: { blogsData }, revalidate: 60 };
};
/** MicrofinanceLoans Page */
export default function MicrofinanceLoans({ blogsData }) {
	const loanAmountData = {
		loanAmount: "₹ 5,000 to ₹ 1.5 lakh",
		tenure: "12 to 24 Months",
		interestRate: "23.00% to 24.00%",
	};

	const pavingThePathData = {
		title: "Paving the path empowerment for women entrepreneurs",
		description:
			"Svatantra's microfinance loans promote entrepreneurship, especially among the semi-urban and rural women, making them economically independent. Our microfinance loans create a supportive financial environment for individuals to easily start and grow their businesses, bringing economic stability to their lives and those around them.",
		subTitle: "Key features powering our entrepreneurs and our economy",
		features: [
			"We offer competitive interest rates.",
			" Services that enable rural and semi-urban women entrepreneurs to become agents of change within their communities.",
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
					"Conduct workshops on financial literacy to ensure prospective customers develop money management skills.",
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
						target low-income clients, living either on or below the poverty line,
						particularly women. It aims to empower these clients by providing them
						access to microcredit for income-generating activities, savings and
						insurance, and remittance services.
					</p>
				),
			},
			{
				title: "What is a microfinance institution (MFI)?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						A Microfinance Institution (MFI) is an organisation that provides
						microfinance services such as microcredit and insurance services targeted
						to the poor. All MFIs share the common characteristic of providing these
						services to a clientele who are otherwise excluded from formal financial
						services.
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
				title: "What is financial inclusion?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						Financial inclusion or inclusive financing refers to delivering financial
						services at affordable costs to sections of disadvantaged and low-income
						households in society who are otherwise unable to avail formal financial
						services.
					</p>
				),
			},
			{
				title: "Who are microfinance clients?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						Microfinance clients are either below or above the poverty line who
						otherwise do not have access to financial services from formal financial
						institutions such as banks. They may reside in either rural or urban areas
						but due to lack of proper documents or insufficient collateral security,
						are unable to utilise banking facilities.
					</p>
				),
			},
			{
				title: "Why is microfinance important for rural women?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						As rural women are prone to discrimination due to prevalent beliefs and
						practices, microfinance was designed to improve their status within the
						family and community by giving them access to financial services, thus
						financial independence. Women availing microfinance activities tend to be
						more assertive, confident, own more assets and play a stronger role in
						decision-making & contributions in the family.
					</p>
				),
			},
			{
				title: "What is the rate of interest charged on the loan?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						Svatantra Microfin Ltd. offers one of the lowest interest rates in
						the country. Details on our interest rates{" "}
						<a className="f_w_b" href="/our-products/microfinance-loans">
							https://svatantramicrofin.com/our-products/microfinance-loans
						</a>
					</p>
				),
			},
			{
				title: "What is the recruitment process at Svatantra?",
				children: (
					<>
						<p className="text_xs font_secondary color_light_black opacity_8 pb_10">
							What is the recruitment process at Svatantra?
						</p>
						<ol className="text_xs font_secondary color_light_black opacity_8">
							<li>Identify Vacancy</li>
							<li>Prepare Job Description and Person Specification</li>
							<li>Publishing of Vacancy & Sourcing of CVs</li>
							<li>Managing the Response</li>
							<li>Screening & Short-Listing</li>
							<li>Arranging for Functional Interview of Shortlisted Candidates</li>
							<li>Decision Making</li>
							<li>Reference Check (Except from Current Employer)</li>
							<li>Compensation Fitment</li>
							<li>Offer Roll-Out</li>
						</ol>
					</>
				),
			},
			{
				title: "What is the criteria to get a loan?",
				children: (
					<>
						<p className="text_xs font_secondary color_light_black opacity_8 pb_10">
							Clients must meet the following criteria to avail a loan:
						</p>
						<ol className="text_xs font_secondary color_light_black opacity_8 ">
							<li>Client should not have borrowed from more than one other MFI</li>
							<li>Clients total indebtedness should not exceed &#8377;1,00,000</li>
							<li>Client should have an income generating activity</li>
							<li>Client should have documents (ID and address proof)</li>
							<li>Client should have a bank account</li>
						</ol>
					</>
				),
			},
			{
				title: "Are microfinance institutions regulated?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						Microfinance Institutions in India are regulated by the Reserve Bank of
						India through its master circulars pertaining to NBFC-MFIs. Based on the{" "}
						<a
							className="f_w_b"
							href="https://rbidocs.rbi.org.in/rdocs/notification/PDFs/43BF010714FSC.pdf"
						>
							RBI Circular No: DNBS (PD) CC No: 395/03. 10. 38/2014-15
						</a>
					</p>
				),
			},
			{
				title: "Why are the MFIs interest rates higher than traditional banks?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						Interest rate in MFIs tend to be higher than loans from traditional banks
						because small loans tend to be more expensive to process than larger ones
						(as offered by traditional banks). Moreover, MFIs loans are collateral
						free and require a more hands-on and time-intensive assessment to
						determine the creditworthiness of a potential client. Microfinance clients
						tend to reside in remote areas and since MFIs travel to clients, there is
						also a high cost of operations which is also reflected in the interest
						rate for MFI loans
					</p>
				),
			},
			{
				title: "What customer protection measures exist for clients?",
				children: (
					<>
						<p className="text_xs font_secondary color_light_black opacity_8 pb_10">
							Concerns about negative impact of excessive interest rates, abusive
							lending practices and over-indebtedness and high multiple lending among
							poor borrowers have all led to the greater attention given to responsible
							financial practices and developing Client Protection Principles. The
							three main aspects of these are as follows:
						</p>
						<ol className="text_xs font_secondary color_light_black opacity_8 ">
							<li>
								Customer Protection, Regulation and Supervision to ensure customers are
								treated fairly and appropriately and that they understand the
								implications of their actions
							</li>
							<li>
								Improve standards and codes of conduct with an emphasis on consistency
							</li>
							<li>
								Financial Literacy training to make clients more informed so that they
								can become more responsible for their own financial welfare.
							</li>
						</ol>
					</>
				),
			},
			{
				title: "Can you share more details on the mediclaim?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						The company offers affordable and comprehensive Mediclaim to its customer
						in partnership with a reputed third-party insurance company. This is one
						of a kind product offered by Svatantra and is tailor-made to the family of
						5, including the client, parents, and parent in-laws of the rural
						household.
					</p>
				),
			},
			{
				title: "Do you only lend microloans to women?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						Yes, at present Svatantra provides microloans to women for their
						livelihood earnings.
					</p>
				),
			},
			{
				title: "What is the difference between bank and microfinance?",
				children: (
					<p className="text_xs font_secondary color_light_black opacity_8">
						Banks are financial institutions that provide banking and other financial
						services such as accepting deposits and providing loans to customers. On
						the other hand, MFIs’ mainly target underserved households in rural areas
						to access financial services such as very small loans (micro credit) to
						help them to invest in or scale up their small businesses.
					</p>
				),
			},
		],
		// brochureText: "Everything you need to know about our financial services",
		// brochureUrl: "https://www.google.com/",
	};
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Microfinance Loans"}
				Desc={""}
				OgImg={""}
				Url={"/microfinance-loans"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.MicrofinanceLoansPage}>
				<Breadcrum
					linkTitle="Our Products"
					linkTitle2="Microfinance Loans"
					link10="/our-products/microfinance-loans"
				/>
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={mobile_banner.src}
					bannerTitle="Microfinance loans"
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
				<LoanFactSheet />
				<SixSteps title={sixStepsData.title} steps={sixStepsData.steps} />
				<CommonQueries
					title={commonQueriesData.title}
					faqItems={commonQueriesData.faqItems}
					brochureText={commonQueriesData.brochureText}
					brochureUrl={commonQueriesData.brochureUrl}
				/>
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
