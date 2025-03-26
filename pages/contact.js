// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import InnerBanner from "@/components/InnerBanner";
import ContactSection from "@/pages/Contact/contact/ContactSection";
import MapSection from "@/pages/Contact/contact/MapSection";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/Contact.module.scss";
import Breadcrum from "@/components/Breadcrumb";

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
				<Breadcrum link5="/contact" linkTitle={"Contact Us"} />
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
