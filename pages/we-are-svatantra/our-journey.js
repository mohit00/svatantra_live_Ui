// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/OurJourney.module.scss";
import Breadcrum from "@/components/Breadcrumb";
import JourneyComponent from "@/sections/Journey";

// UTILS //

// IMAGES //

// DATA //

/** Contact Page */
export default function OurJourneyPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Our Journey"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.OurJourneyPage}>
				<Breadcrum link2="our-journey" />
				<JourneyComponent />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
