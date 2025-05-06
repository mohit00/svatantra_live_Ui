// MODULES //
import { useState, useEffect } from "react";
// COMPONENTS //
import AccordianCommon from "@/components/AccordianCommon";
import Breadcrum from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import MetaTags from "@/components/MetaTags";
import ContentFromCms from "@/components/ContentFromCms";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/Faqs.module.scss";

// UTILS //

// IMAGES //
import banner_desktop from "../../public/img/newImg/faqNew.jpg";
import mobile_banner from "../../public/img/newImg/faqMobile.jpg";

// SERVICES //
import { getFaqs } from "@/services/connectWithUsService";

/**  */
export const getStaticProps = async () => {
	const faqData = await getFaqs();
	return { props: { faqData }, revalidate: 60 };
};

/** Faqs Page */
export default function Faqs({ faqData }) {
	const [faqitem, setFaqitem] = useState([]);

	useEffect(() => {
		if (faqData?.data) {
			const formattedFAQs = faqData?.data?.map((item) => ({
				title: item?.title,
				children: (
					<div>
						<ContentFromCms>
							{item?.desc || "No description available"}
						</ContentFromCms>
					</div>
				),
			}));

			setFaqitem(formattedFAQs);
		}
	}, [faqData]); // Runs only when `faqData` changes

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Faqs"}
				Desc={""}
				OgImg={""}
				Url={"/connect-with-us/faqs"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.FaqsPage}>
				<Breadcrum link5="/our-products/faqs" linkTitle={"Faqs"} />
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={mobile_banner.src}
					bannerTitle="FAQs"
				/>
				<section className={`${styles.faqs_main} ptb_80`}>
					<div className="container">
						<AccordianCommon
							fontStyle={"text_lg"}
							fontWeight={"f_w_m"}
							fontFamily={"font_primary"}
							fontColor={"color_light_black"}
							items={faqitem} // Now faqitem updates correctly
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
