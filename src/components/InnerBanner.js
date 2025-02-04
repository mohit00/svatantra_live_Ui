// MODULES //

// COMPONENTS //

// STYLES //
import styles from "@/styles/components/InnerBanner.module.scss";

// PLUGINS //

// IMAGES //
import Blue from "../../public/img/home/blue.svg";
import Green from "../../public/img/home/green.svg";
import DefaultBanner from "@/../public/img/contact/d_banner.png";
import DefaultBannerMob from "@/../public/img/banner/defaultMobileBanner.jpg";

// UTILS //

/** Inner Banner component */
function InnerBanner({ desktopImage, bannerTitle, mobileImage }) {
	return (
		<div className={`${styles.inner_banner_wrap} `}>
			{/* Banner Content */}
			<div className="container">
				<h1 className="section_title pb_30">{bannerTitle}</h1>
			</div>

			{/* Banner Image */}
			<div className={`${styles.banner_image} next_image`}>
				<picture>
					<source
						srcSet={desktopImage ? desktopImage : DefaultBanner.src}
						media="(min-width:767px)"
					/>
					<img
						src={mobileImage ? mobileImage : DefaultBannerMob.src}
						alt="mobileImage"
					/>
				</picture>
			</div>

			{/* <div className={styles.line_1}>
				<img src={Blue.src} alt="Line 1" className="img-responsive" />
			</div>
			<div className={styles.line_2}>
				<img src={Green.src} alt="Line 1" className="img-responsive" />
			</div> */}
		</div>
	);
}

export default InnerBanner;
