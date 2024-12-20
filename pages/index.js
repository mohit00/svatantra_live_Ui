// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import ScaleBusiness from "../src/sections/ScaleBusiness";
import DigitallySvatantra from "../src/sections/DigitallySvatantra";
import StoriesSuccess from "../src/sections/StoriesSuccess";

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";
import HomeBanner from "@/sections/HomeBanner";

// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				{/* <h2>This is ting base next.js template</h2> */}
				<HomeBanner />
				<ScaleBusiness />
				<DigitallySvatantra />
				<StoriesSuccess />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
