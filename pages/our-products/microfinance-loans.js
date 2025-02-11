// MODULES //

// COMPONENTS //
import Breadcrum from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import LoanAmount from "@/sections/our-products/LoanAmount";
import PavingThePath from "@/sections/our-products/PavingThePath";
import LoanFactSheet from "@/sections/our-products/LoanFactSheet";
import SixSteps from "@/sections/our-products/SixSteps";
import CommonQueries from "@/sections/our-products/CommonQueries";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/MicrofinanceLoans.module.scss";

// UTILS //

// IMAGES //
import banner_desktop from "../../public/img/our-products/microfinance/banner_desktop.jpg";

// DATA //

/** MicrofinanceLoans Page */
export default function MicrofinanceLoans() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Microfinance Loans"}
				Desc={""}
				OgImg={""}
				Url={"/microfinance-loans"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.MicrofinanceLoansPage}>
				<Breadcrum link2="Our Products" link3="Microfinance Loans" />
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={banner_desktop.src}
					bannerTitle="Microfinance loans"
				/>
				<LoanAmount />
				<PavingThePath />
				<LoanFactSheet />
				<SixSteps />
				<CommonQueries />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
