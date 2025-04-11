// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// STYLES //
import styles from "@/styles/pages/OurJourney.module.scss";
import Breadcrum from "@/components/Breadcrumb";
import JourneyComponent from "@/sections/Journey";

// UTILS //

// IMAGES //

// DATA //
gsap.registerPlugin(ScrollTrigger);
import { getOurJourney } from "@/services/whoWeAreService";
import JourneySup from "@/sections/JourneySup";
import OurJ2 from "@/sections/OurJ2";
/** getOurLeaderships */
export const getStaticProps = async (context) => {
	const journeyData = await getOurJourney();
	return { props: { journeyData }, revalidate: 60 };
};

/** Contact Page */
export default function OurJourneyPage({ journeyData }) {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Our Journey"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.OurJourneyPage}>
				<Breadcrum link5="we-are-svatantra/our-journey" linkTitle="Our Journey" />
				<JourneyComponent journeyData={journeyData} />
				{/* <JourneySup
					gsap={gsap}
					ScrollTrigger={ScrollTrigger}
					journeyData={journeyData}
				/> */}
				{/* <OurJ2 journeyData={journeyData} /> */}
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
