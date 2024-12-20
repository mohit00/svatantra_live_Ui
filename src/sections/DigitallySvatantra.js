// MODULES //

// COMPONENTS //
import Button from "../../src/components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/DigitallySvatantra.module.scss";

// IMAGES //
import DigitalImg from "../../public/img/home/DigitalImg.png";
import BtnArrow from "../../public/img/home/BtnArrow.svg";

// DATA //

/** DigitallySvatantra Section */
export default function DigitallySvatantra() {
	return (
		<section className={styles.DigitallySvatantra}>
			{/* <div className="container"> */}
			<div className={`${styles.DigitalFlex}`}>
				<div className={`${styles.ContentBx}`}>
					<h2 className="text_xxxl color_primary pb_20">
						Making every Indian digitally Svatantra
					</h2>
					<p className="text_sm">
						At Svatantra, we harness the power of technology to make our services far
						more accessible and impactful, ensuring entrepreneurial freedom with
						growth and prosperity. We were the first in the sector to implement 100%
						cashless disbursement and roll out a customer facing app, bringing success
						to your fingertips.
					</p>
					<div className={`${styles.BtnBx}`}>
						<Button color="secondary" variant="filled" shape="rounded">
							Read More
							<img src={BtnArrow.src} alt="" />
						</Button>
					</div>
				</div>
				<div className={`${styles.ImgBx}`}>
					<img src={DigitalImg.src} alt="" />
				</div>
			</div>
			{/* </div> */}
		</section>
	);
}
