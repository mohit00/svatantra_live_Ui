// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/DigitallySvatantra.module.scss";

// IMAGES //
import DigitalImg from "../../public/img/home/DigitalImg.png";

// DATA //

/** DigitallySvatantra Section */
export default function DigitallySvatantra() {
	return (
		<section className={styles.DigitallySvatantra}>
			<div className={`${styles.DigitalFlex}`}>
				<div className={`${styles.ContentBx}`}>
					<h2>Making every Indian digitally Svatantra</h2>
					<p>
						At Svatantra, we harness the power of technology to make our services far
						more accessible and impactful, ensuring entrepreneurial freedom with
						growth and prosperity. We were the first in the sector to implement 100%
						cashless disbursement and roll out a customer facing app, bringing success
						to your fingertips.
					</p>
				</div>
				<div className={`${styles.ImgBx}`}>
					<img src={DigitalImg.src} alt="" />
				</div>
			</div>
		</section>
	);
}
