// MODULES //

// COMPONENTS //

// STYLES //
import styles from "@/styles/components/InnerBanner.module.scss";

// PLUGINS //
import parse from "html-react-parser";

// IMAGES //
import DefaultBanner from "@/../public/img/contact/d_banner.png";
import DefaultBannerMob from "@/../public/img/banner/defaultMobileBanner.jpg";

// UTILS //

/** Inner Banner component */
function InnerBanner({ desktopImage, bannerTitle, bannerDesc, mobileImage }) {
	return (
		<div className={`${styles.inner_banner_wrap} `}>
			{/* Banner Content */}
			<div className="container">
				<div className={`${styles.banner_info}`}>
					<h1 className="section_title pb_20">{parse(bannerTitle || "")}</h1>
					<p className="text_md pb_30">{parse(bannerDesc || "")}</p>
				</div>
			</div>

			{/* Banner Image */}
			<div className={`${styles.banner_image} next_image`}>
				<picture>
					<source
						srcSet={desktopImage ? desktopImage : DefaultBanner.src}
						media="(min-width:768px)"
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
