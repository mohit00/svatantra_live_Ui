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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";
import HomeBanner from "@/sections/HomeBanner";
import Svatantra from "@/sections/Svatantra";
import Economic from "@/sections/Economic";

// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	gsap.registerPlugin(ScrollTrigger);
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Svatantra Microfinance"}
				Desc={
					" We are India’s second largest microfinance institution, offering diverse financial solutions for rural and semi-urban women at one of the lowest interest rates in the industry."
				}
				OgImg={""}
				Url={"/"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}

			<main className={`${styles.HomePage} `}>
				{/* <h2>This is ting base next.js template</h2> */}
				<HomeBanner />
				<Svatantra />
				<Economic />
				<ScaleBusiness />
				<DigitallySvatantra gsap={gsap} ScrollTrigger={ScrollTrigger} />
				<StoriesSuccess />
				<Homenews />
				<Homecontact />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
