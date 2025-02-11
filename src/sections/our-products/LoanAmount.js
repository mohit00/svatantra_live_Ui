// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/our-products/LoanAmount.module.scss";

// IMAGES //

// DATA //

/** LoanAmount Component */
export default function LoanAmount() {
	return (
		<section className={`${styles.LoanAmount} ptb_80`}>
			<div className="container">
				<div className={styles.right_box}>
					<div className={`${styles.box} ${styles.box_1} f_r_a_center`}>
						<div className={styles.title}>
							<h5 className="text_lg font_primary">Loan amount</h5>
						</div>
						<div className={styles.desc}>
							<h6 className="font_secondary color_light_black text_reg_20 f_w_m">
								₹ 5,369 to ₹ 1 lakh
							</h6>
						</div>
					</div>
					<div className={`${styles.box} ${styles.box_2} f_r_a_center`}>
						<div className={styles.title}>
							<h5 className="text_lg font_primary">Tenure</h5>
						</div>
						<div className={styles.desc}>
							<h6 className="font_secondary color_light_black text_reg_20 f_w_m">
								12 to 30 Months
							</h6>
						</div>
					</div>
					<div className={`${styles.box} ${styles.box_3} f_r_a_center`}>
						<div className={styles.title}>
							<h5 className="text_lg font_primary">Rate of interest (p.a)</h5>
						</div>
						<div className={styles.desc}>
							<h6 className="font_secondary text_reg_20 f_w_m">19.75% to 24.25%</h6>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
