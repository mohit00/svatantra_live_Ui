// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import InnerBanner from "@/components/InnerBanner";

// SECTIONS //
import TechnologyDriven from "@/sections/digitally-svatantra/TechnologyDriven";
import StoriesOfSuccess from "@/sections/digitally-svatantra/StoriesOfSuccess";
import ConnectWithUs from "@/sections/digitally-svatantra/ConnectWithUs";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/DigitallySvatantra.module.scss";

// UTILS //

// IMAGES //
import banner_desktop from "../public/img/digitally-svatantra/banner_desktop.jpg";

// DATA //
import { getDigitalSvatantra } from "@/services/digitalSvatantra";
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
				Title={"Digitally Svatantra"}
				Desc={""}
				OgImg={""}
				Url={"/digitally-svatantra"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.DigitallySvatantraPage}>
				<Breadcrum link2="Digitally Svatantra" />
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={banner_desktop.src}
					bannerTitle="Leveraging technology for growth and efficiency"
				/>
				<TechnologyDriven />
				<StoriesOfSuccess successStoriesData={successStoriesData} />
				<ConnectWithUs />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
