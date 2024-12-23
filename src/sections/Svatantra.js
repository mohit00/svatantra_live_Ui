// MODULES //

// COMPONENTS //
import Button from "../../src/components/Buttons/Button";

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
		<div className={`${styles.svatantra_section} ptb_100`} name="About">
			<div className={styles.svatantra_wrapper}>
				<div className={styles.left_box}>
					<h2 className="section_title">We are Svatantra</h2>
					<p className={`${styles.para_width} text_lg pt_10 opacity_80`}>
						Svatantra is for the millions of foundational entrepreneurs who are the
						backbone of India&lsquo;s growth story. These visionary individuals, with
						grit and determination, fuel the engines of progress, propelling our
						nation towards <span>a brighter future</span>
					</p>
					<div className={`${styles.BtnBx} pt_20 hidden`}>
						<Button
							buttonType="secondary"
							condition={"white"}
							link={"#"}
							title={"Grow More"}
						/>
					</div>
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
							<h5>Largest PE</h5>
						</div>
						<div className={styles.desc}>
							<h6>investment in the sector</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
