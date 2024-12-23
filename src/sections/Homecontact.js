// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import Button from "@/components/Buttons/Button";
import styles from "@/styles/sections/Homecontact.module.scss";

// IMAGES //

// DATA //

/** Homecontact Section */
export default function Homecontact() {
	return (
		<section className={styles.Homecontact} name="ContactUs">
			<div className="container">
				<div className={`${styles.mainbox}`}>
					<div className={`${styles.left}`}>
						<h1 className="text_xxxl pb_20 color_primary">Connect with us</h1>
						<p className="text_sm pb_20 opacity_80">
							Have questions or need support? We&apos;re here to guide and assist you
							in building a brighter future. Reach out to us and take the first step
							toward financial resilience and self-reliance.
						</p>
						<h3 className="text_md">
							Toll free number: <br />
							18002679911
						</h3>
					</div>
					<div className={`${styles.right}`}>
						<form>
							<input
								type="text"
								placeholder="Name"
								className={`${styles.inputField}`}
							/>
							<input
								type="text"
								placeholder="Email Address"
								className={`${styles.inputField}`}
							/>
							<input
								type="text"
								placeholder="Phone No"
								className={`${styles.inputField}`}
							/>
							<textarea placeholder="Message" />
							{/* <button>Submit</button> */}

							<div className={`${styles.BtnBx} pt_10`}>
								<Button
									buttonType="secondary"
									condition={"white"}
									link={"#"}
									title={"Submit"}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
