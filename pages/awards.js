// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Awards.module.scss";

// IMAGES //

// DATA //

/** Awards Page */
export default function AwardsPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Awards"} Desc={""} OgImg={""} Url={"/awards"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.AwardsPage}>
				
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
        