// MODULES //

// COMPONENTS //
import AccordianCommon from "@/components/AccordianCommon";
import Breadcrum from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/Faqs.module.scss";

// UTILS //

// IMAGES //
import banner_desktop from "../public/img/faq/banner_desktop.jpg";

// DATA //

/** Faqs Page */
export default function Faqs() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Faqs"} Desc={""} OgImg={""} Url={"/faqs"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.FaqsPage}>
				<Breadcrum link2="faqs" />
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={banner_desktop.src}
					bannerTitle="FAQs"
				/>
				<section className={`${styles.faqs_main} ptb_80`}>
					<div className="container">
						<AccordianCommon
							fontStyle={"text_lg"}
							fontWeight={"f_w_m"}
							fontFamily={"font_primary"}
							fontColor={"color_light_black"}
							items={[
								{
									title: "What is microfinance?",
									children: (
										<div>
											<p className="text_sm color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "What is a Microfinance Institution (MFI)?",
									children: (
										<div>
											<p className="text_sm color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "How is Svatantra different from other MFIs?",
									children: (
										<div>
											<p className="text_sm color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "Who are microfinance clients?",
									children: (
										<div>
											<p className="text_sm color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "Why is microfinance important for rural women?",
									children: (
										<div>
											<p className="text_sm color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "What is the rate of interest charged on the loan?",
									children: (
										<div>
											<p className="text_sm color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "What is the recruitment process at Svatantra?",
									children: (
										<div>
											<p className="text_sm color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
							]}
						/>
					</div>
				</section>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
