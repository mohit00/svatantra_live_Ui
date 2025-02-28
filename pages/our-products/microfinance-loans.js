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
import banner_desktop from "../../public/img/our-products/microfinance/banner_desktop.jpg";

import identification from "../../public/img/our-products/microfinance/identification.svg";
import training from "../../public/img/our-products/microfinance/training.svg";
import disbursement from "../../public/img/our-products/microfinance/disbursement.svg";
import formation from "../../public/img/our-products/microfinance/formation.svg";
import appraisal from "../../public/img/our-products/microfinance/appraisal.svg";
import repayment from "../../public/img/our-products/microfinance/repayment.svg";

// DATA //

/** MicrofinanceLoans Page */
export default function MicrofinanceLoans() {
	const loanAmountData = {
		loanAmount: "₹ 5,369 to ₹ 1 lakh",
		tenure: "12 to 30 Months",
		interestRate: "19.75% to 24.25%",
	};
	const pavingThePathData = {
		title: "Paving the path to prosperity for women entrepreneurs",
		description:
			"Svatantra’s micro finance loans have been instrumental in promoting entrepreneurship, especially among semi-urban and rural women, making them economically independent. Our microfinance loans create a supportive financial environment for individuals to easily start and grow their businesses, bringing economic stability to their lives and those around them.",
		subTitle: "Key features powering our entrepreneurs and our economy",
		features: [
			"We provide one of the lowest interest rates in India.",
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
					"Offer timely guidance and collection of the monthly loan installments.",
			},
		],
	};
	const commonQueriesData = {
		title: "Common Queries",
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
		brochureText: "Everything you need to know about our financial services",
		brochureUrl: "https://www.google.com/",
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
				<Breadcrum link2="Our Products" link3="Microfinance Loans" />
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={banner_desktop.src}
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
				<BlogsInsights />
				<Homecontact />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
