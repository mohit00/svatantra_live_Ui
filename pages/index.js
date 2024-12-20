// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Homecontact from "@/sections/Homecontact";
import Homenews from "@/sections/Homenews";

// SECTIONS //
import ScaleBusiness from "../src/sections/ScaleBusiness";
import DigitallySvatantra from "../src/sections/DigitallySvatantra";
import StoriesSuccess from "../src/sections/StoriesSuccess";

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";
import HomeBanner from "@/sections/HomeBanner";
import Svatantra from "@/sections/Svatantra";

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

			<main className={`${styles.HomePage} `}>
				{/* <h2>This is ting base next.js template</h2> */}
				{/* <HomeBanner />
				<Svatantra />
				<ScaleBusiness />
				<DigitallySvatantra />
				<StoriesSuccess /> */}
				<Homenews />
				<Homecontact />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
