// MODULES //

// COMPONENTS //
import ContentFromCms from "@/components/ContentFromCms";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Svatantra.module.scss";

// IMAGES //

// DATA //

/** Svatantra Component */
export default function Svatantra() {
	return (
		<div className={`${styles.svatantra_section} ptb_100`}>
			<div className="header_container">
				<div className={styles.svatantra_wrapper}>
					<div className={styles.left_box}>
						<h2 className="section_title">We are Svatantra</h2>
						<p className="text_lg pt_10">
							Svatantra is for the millions of foundational entrepreneurs who are the
							backbone of <span>India&lsquo;s growth story.</span>
						</p>
					</div>
					<div className={styles.right_box}>
						<div className={`${styles.box} ${styles.box_1} f_r_a_center`}>
							<div className={styles.title}>
								<h5>First</h5>
							</div>
							<div className={styles.desc}>
								<h6>to receive NBFC-MFI license from RBI</h6>
							</div>
						</div>
						<div className={`${styles.box} ${styles.box_2} f_r_a_center`}>
							<div className={styles.title}>
								<h5>Second</h5>
							</div>
							<div className={styles.desc}>
								<h6>largest MFI in the country</h6>
							</div>
						</div>
						<div className={`${styles.box} ${styles.box_3} f_r_a_center`}>
							<div className={styles.title}>
								<h5>Second</h5>
							</div>
							<div className={styles.desc}>
								<h6>largest MFI in the country</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
