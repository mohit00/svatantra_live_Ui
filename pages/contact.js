// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/sections/ContactForm";
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import InnerBanner from "@/components/InnerBanner";
import ContactSection from "@/pages/Contact/ContactSection";
import MapSection from "@/pages/Contact/MapSection";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/Contact.module.scss";

// UTILS //

// IMAGES //

// DATA //

/** Contact Page */
export default function ContactPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.ContactPage}>
				<InnerBanner bannerTitle="Get In touch" />
				<ContactSection />
				<MapSection />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
