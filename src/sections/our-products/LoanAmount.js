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
export default function LoanAmount({ loanAmount, tenure, interestRate }) {
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
								{loanAmount}
							</h6>
						</div>
					</div>
					<div className={`${styles.box} ${styles.box_2} f_r_a_center`}>
						<div className={styles.title}>
							<h5 className="text_lg font_primary">Tenure</h5>
						</div>
						<div className={styles.desc}>
							<h6 className="font_secondary color_light_black text_reg_20 f_w_m">
								{tenure}
							</h6>
						</div>
					</div>
					<div className={`${styles.box} ${styles.box_3} f_r_a_center`}>
						<div className={styles.title}>
							<h5 className="text_lg font_primary">Rate of interest (p.a)</h5>
						</div>
						<div className={styles.desc}>
							<h6 className="font_secondary text_reg_20 f_w_m">{interestRate}</h6>
						</div>
					</div>
				</div>
				<p className="text_xs pt_20 f_w_l opacity_80 pt_10">
					<strong>Approach for gradation of Risk:</strong>
					<br />
					The decision to give loan is assessed by performance of a risk assessment at the individual and group level, evaluating borrowers occupation profiles, stated loan purpose, potential cross-lending exposure, house ownership status and migration risk. Such information is collected based on borrower inputs and field inspection by the Company officials.
				</p>
			</div>
		</section>
	);
}
