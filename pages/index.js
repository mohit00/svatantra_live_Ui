// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Homecontact from "@/sections/Homecontact";
import ContactPageForm from "@/sections/ContactPageForm";
import Homenews from "@/sections/Homenews";
import HomeInvestors from "@/sections/HomeInvestors";
// SECTIONS //
import ScaleBusiness from "../src/sections/ScaleBusiness";
import DigitallySvatantra from "../src/sections/DigitallySvatantra";
import StoriesSuccess from "../src/sections/StoriesSuccess";

// PLUGINS //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";
import HomeBanner from "@/sections/HomeBanner";
import Svatantra from "@/sections/Svatantra";
import Economic from "@/sections/Economic";
import Intro from "@/components/intro";

// IMAGES //

// DATA //
import { getDigitalSvatantra } from "@/services/digitalSvatantraService";
import { mediaMention } from "@/services/mediaMentionService";
import { getAwards } from "@/services/awardsService";
import { getInvestors } from "@/services/Investors";

/** getOurLeaderships */
export const getStaticProps = async (context) => {
	const successStoriesData = await getDigitalSvatantra();
	const mediaMentionData = await mediaMention();
	const getAwardsData = await getAwards();
	const investorData = await getInvestors();
	return {
		props: { successStoriesData, mediaMentionData, getAwardsData, investorData },
		revalidate: 60,
	};
};

/** Home Page */
export default function HomePage({
	successStoriesData,
	mediaMentionData,
	getAwardsData,
	investorData,
}) {
	gsap.registerPlugin(ScrollTrigger);
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Svatantra Microfinance"}
				Desc={
					" We are India’s second largest microfinance institution, offering diverse financial solutions for rural and semi-urban women at one of the lowest interest rates in the industry."
				}
				OgImg={""}
				Url={"/"}
			/>

			{/* <Intro /> */}
			{/* Header */}
			<Header />
			{/* <Header2 /> */}

			{/* Page Content starts here */}

			<main className={`${styles.HomePage} `}>
				<HomeBanner gsap={gsap} ScrollTrigger={ScrollTrigger} />
				<Svatantra gsap={gsap} ScrollTrigger={ScrollTrigger} />
				<Economic />
				<ScaleBusiness />
				<DigitallySvatantra gsap={gsap} ScrollTrigger={ScrollTrigger} />
				<StoriesSuccess successStoriesData={successStoriesData} getAwards />
				<Homenews
					mediaMentionData={mediaMentionData}
					getAwardsData={getAwardsData}
				/>
				<HomeInvestors investorData={investorData} />
				<Homecontact />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
