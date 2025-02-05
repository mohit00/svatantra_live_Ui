// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import MetaTags from "@/components/MetaTags";
import JoinComponent from "@/pages/Contact/careers/Join";

// SECTIONS //
import Journey from "@/pages/Contact/careers/Journey";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/careers.module.scss";

// UTILS //

// IMAGES //

// DATA //

/** Contact Page */
export default function CareersPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Careers"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.CareersPage}>
				<InnerBanner bannerTitle="Elevate your career and create a purpose-driven future" />
				<Journey />
				<JoinComponent />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
