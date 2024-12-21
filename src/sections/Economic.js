// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Economic.module.scss";

// IMAGES //

// DATA //

/** DummyComponent Component */
export default function Economic() {
	return (
		<div className={`${styles.economic} pb_100`}>
			<div className="container">
				<div className={styles.economic_wrapper}>
					<h2 className="section_title">
						We are in the business of activating economic engines of growth
					</h2>
					<div className={`${styles.economic_info} f_r_aj_between ptb_30`}>
						<div className={styles.desc}>
							<h6 className="text_sm">
								*Combined numbers of Svatantra Microfin Pvt. Ltd. & Chaitanya India
							</h6>
						</div>
						<div className={styles.title}>
							<h5 className="text_reg">
								<span>*Crisil</span> A - Stable Rating
							</h5>
						</div>
					</div>

					<div className={`${styles.counter} f_w`}>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<h4 className="text_xxl">
									4.18 <span>M+</span>
								</h4>
								<h5 className="text_xs">Active customer</h5>
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<h4 className="text_xxl">
									48,636 <span>CR</span>
								</h4>
								<h5 className="text_xs">Loans disbursed</h5>
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<h4 className="text_xxl">
									14,149 <span>CR</span>
								</h4>
								<h5 className="text_xs">AUM</h5>
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<h4 className="text_xxl">
									21,500 <span>+</span>
								</h4>
								<h5 className="text_xs">Total employees</h5>
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<h4 className="text_xxl">2000</h4>
								<h5 className="text_xs">Total branches</h5>
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<h4 className="text_xxl">19</h4>
								<h5 className="text_xs">States</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
