// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import GalleryComponent from "@/sections/Gallery";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/GalleryPage.module.scss";

// UTILS //

// IMAGES //

// DATA //

/** Contact Page */
export default function GalleryPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Gallery"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.ContactPage}>
				<GalleryComponent />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
