// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeBanner.module.scss";

// IMAGES //
import Line1 from "../../public/img/home/banner_line.png";
import RoateteImg from "../../public/img/home/rotate_img.png";
import rupeesImg from "../../public/img/home/rupees_img.png";

// DATA //

/** HomeBanner Component */
export default function HomeBanner() {
	return (
		<div className={styles.home_banner}>
			<div className="container">
				<div className={styles.banner}>
					<div className={styles.image}>
						<div className={styles.image_wrapper}>
							<img
								src={RoateteImg.src}
								alt="rotate Image"
								className="img-responsive"
							/>
						</div>
						<div className={styles.rupees_img}>
							<img src={rupeesImg.src} alt="Rupees Image" className="img-responsive" />
						</div>
					</div>
					<div className={styles.info}>
						<h1 className="section_title">
							Building the <span>Entrepreneurs</span> <br className="hidden-xs" /> that
							build India’s economy
						</h1>
						<p className="text_md pt_20 opacity_80">
							We turn aspirations into breakthroughs, powering the journey of every
							Indian toward economic independence, prosperity, and success.
						</p>
					</div>
					<p className={`${styles.scroll} text_xs hidden`}>Scroll To Discover</p>
				</div>
				<p className={`${styles.scroll} text_xs hidden_xs`}>Scroll To Discover</p>
			</div>

			<div className={styles.line_1}>
				<img src={Line1.src} alt="Line 1" className="img-responsive" />
			</div>
		</div>
	);
}
