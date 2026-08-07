// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import InnerBanner from "@/components/InnerBanner";
import Footer2 from "@/components/Footer2";
// SECTIONS //
import TechnologyDriven from "@/sections/digitally-svatantra/TechnologyDriven";
import StoriesOfSuccess from "@/sections/digitally-svatantra/StoriesOfSuccess";
import ConnectWithUs from "@/sections/digitally-svatantra/ConnectWithUs";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/DigitallySvatantra.module.scss";

// UTILS //

// IMAGES //
import banner_desktop from "/public/img/finalBanners/Digitally_sva_banner.jpg";
import mobile_banner from "/public/img/mobileBanners/digitally_mobile.jpg";

// DATA //
import { getDigitalSvatantra } from "@/services/digitalSvatantraService";
/** getDigitallySvatantra */
/** */
export const getStaticProps = async () => {
	const successStoriesData = await getDigitalSvatantra();
	return { props: { successStoriesData }, revalidate: 60 };
};

/** DigitallySvatantra Page */
export default function DigitallySvatantra({ successStoriesData }) {
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Digital Microfinance & Cashless Disbursement"}
				Desc={"Discover digital microfinance in India with Svatantra — 100% cashless loan disbursement and easy app-based EMI payments. See how paperless borrowing works."}
				OgImg={""}
				Url={"https://www.svatantramicrofin.com/digitally-svatantra"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.DigitallySvatantraPage}>
				<Breadcrum linkTitle="Digitally Svatantra" link5={"/digitally-svatantra"} />
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={mobile_banner.src}
					bannerTitle="Leveraging technology for growth and efficiency"
				/>
				<TechnologyDriven />
				<StoriesOfSuccess successStoriesData={successStoriesData} />
				<ConnectWithUs />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer2 />
		</div>
	);
}
