// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/BlogsInside.module.scss";

// IMAGES //

// DATA //

/** Blogs Inside Page */
export default function BlogsInsidePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Blogs Inside"} Desc={""} OgImg={""} Url={"/blogs-inside"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.BlogsInsidePage}>
				
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
        