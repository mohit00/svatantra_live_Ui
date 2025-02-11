// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/our-products/SixSteps.module.scss";

// IMAGES //
import identification from "../../../public/img/our-products/microfinance/identification.svg";
import training from "../../../public/img/our-products/microfinance/training.svg";
import disbursement from "../../../public/img/our-products/microfinance/disbursement.svg";
import formation from "../../../public/img/our-products/microfinance/formation.svg";
import appraisal from "../../../public/img/our-products/microfinance/appraisal.svg";
import repayment from "../../../public/img/our-products/microfinance/repayment.svg";

// DATA //

/** SixSteps Component */
export default function SixSteps() {
	return (
		<section className={`${styles.SixSteps} ptb_80`}>
			<div className="container">
				<div className={`${styles.title_wrap} pb_40`}>
					<h2 className="text_xxxl color_white">
						Take the six steps to economic self-sufficiency
					</h2>
				</div>
				<div className={`${styles.keyfeatureFlex} `}>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<img src={identification.src} alt="Identification" />
						</div>
						<div className={styles.itemContent}>
							<h5 className="text_md color_light_black font_primary pb_20">
								Identification
							</h5>
							<p className="text_xs color_light_black font_secondary opacity_8">
								Identify customers, especially rural women who benefit from loans
								through detailed surveys.
							</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<img src={training.src} alt="Training" />
						</div>
						<div className={styles.itemContent}>
							<h5 className="text_md color_light_black font_primary pb_20">
								Training
							</h5>
							<p className="text_xs color_light_black font_secondary opacity_8">
								Conduct workshops on financial literacy to help prospective customers
								develop money management skills
							</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<img src={disbursement.src} alt="Disbursement" />
						</div>
						<div className={styles.itemContent}>
							<h5 className="text_md color_light_black font_primary pb_20">
								Disbursement
							</h5>
							<p className="text_xs color_light_black font_secondary opacity_8">
								Transfer money to bank accounts of the shortlisted customers who are
								starting a business or expanding existing ventures.
							</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<img src={formation.src} alt="Formation" />
						</div>
						<div className={styles.itemContent}>
							<h5 className="text_md color_light_black font_primary pb_20">
								Formation
							</h5>
							<p className="text_xs color_light_black font_secondary opacity_8">
								The field officers create groups of 5-12 people, primarily of women
								customers.
							</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<img src={appraisal.src} alt="Appraisal" />
						</div>
						<div className={styles.itemContent}>
							<h5 className="text_md color_light_black font_primary pb_20">
								Group Appraisal
							</h5>
							<p className="text_xs color_light_black font_secondary opacity_8">
								Implement a detailed application process to shortlist potential
								customers.
							</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<img src={repayment.src} alt="repayment" />
						</div>
						<div className={styles.itemContent}>
							<h5 className="text_md color_light_black font_primary pb_20">
								Repayment/Collection
							</h5>
							<p className="text_xs color_light_black font_secondary opacity_8">
								Offer timely guidance and collection of the monthly loan instalments.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
