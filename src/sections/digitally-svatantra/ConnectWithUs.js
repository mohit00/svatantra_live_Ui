// MODULES //

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import ScrollOut from "scroll-out";

// UTILS //

// STYLES //
import styles from "@/styles/sections/digitally-svatantra/ConnectWithUs.module.scss";

// IMAGES //
import ConnectImg from "../../../public/img/digitally-svatantra/ConnectImage.jpg";

// DATA //

/** ConnectWithUs Section */
export default function ConnectWithUs() {
	return (
		<section className={styles.ConnectWithUs}>
			<div className="container">
				<div className={`${styles.mainbox}`}>
					<div className={`${styles.left}`}>
						<h1 className="text_xxxl pb_20 color_primary">Connect with us</h1>
						<p className="text_sm pb_20 opacity_80">
							Have questions or need support? We&lsquo;re here to guide and assist you
							in building a brighter future. Reach out to us and take the first step
							toward financial resilience and self-reliance.
						</p>
						<div className={`${styles.BtnBx} pt_10`}>
							<Button buttonType="four" condition={"white"} title={"Submit"} />
						</div>
					</div>
					<div className={`${styles.right}`}>
						<img className="width_100" src={ConnectImg.src} alt="Connect Image" />
					</div>
				</div>
			</div>
		</section>
	);
}
