/* eslint-disable require-jsdoc */
// MODULES //

// COMPONENTS //
import Breadcrum from "@/components/Breadcrumb";
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

// SERVICES //
import { getGallery } from "@/services/galleryService";

export const getStaticProps = async () => {
	const GalleryList = await getGallery();
	return { props: { GalleryList }, revalidate: 60 };
};

/** Contact Page */
export default function GalleryPage({ GalleryList }) {
	console.log(GalleryList, " GalleryList");

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Gallery"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.ContactPage}>
				<Breadcrum link2="gallery" />
				<GalleryComponent GalleryList={GalleryList} />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
