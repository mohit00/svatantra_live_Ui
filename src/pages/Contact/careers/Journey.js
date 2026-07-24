// MODULES //

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/pages/careers/Journey.module.scss";

// IMAGES //
import Indoor from "../../../../public/img/careers/indoor.jpg";

// DATA //

/** DummyComponent Component */
export default function Journey() {
	return (
		<div className={`${styles.Journey} ptb_80`}>
			<div className="container">
				<div className={`${styles.Journey_section} f_r_aj_between f_w`}>
					<div className={`${styles.Journey_info}`}>
						<div className="section_title">
							Embark on a journey that transforms and inspires lives
						</div>
						<p className="text_sm f_w_m pt_20">
							At Svatantra, we believe work is more than just a job to do. We love what
							we do, are passionate about it and make a meaningful impact on those
							around us.
						</p>
						<div className={`${styles.BtnBx} pt_20`}>
							<Button
								buttonType="four"
								condition={"white"}
								title={"Join Us"}
								link={"/careers/job-opening"}
							/>
						</div>
					</div>
					<div className={`${styles.Journey_img}`}>
						<img src={Indoor.src} className="img-responsive" alt="Indoor" />
					</div>
				</div>
			</div>
		</div>
	);
}
