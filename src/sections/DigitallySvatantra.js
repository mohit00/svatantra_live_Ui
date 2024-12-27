// MODULES //
import { useEffect } from "react";

// COMPONENTS //
import Button from "../../src/components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/DigitallySvatantra.module.scss";

// IMAGES //
import DigitalImg from "../../public/img/home/DigitalImg.png";
import HandImg from "../../public/img/home/HandImg.png";
import DesignBg from "../../public/img/home/DesignBg.png";

// DATA //

/** DigitallySvatantra Section */
export default function DigitallySvatantra({ gsap, ScrollTrigger }) {
	useEffect(() => {
		const counterAnimTimeline = gsap.timeline({});

		/** animation counter */
		function counterAnimation() {
			counterAnimTimeline
				.to(".ContentBx", 2, { x: "0", opacity: "1" }, "first")
				.to(
					`.${styles.HandImg}`,
					2,
					{ y: "-25%", x: "0", paddingTop: "0" },
					"first"
				)
				.to(`.${styles.DesignImg}`, 2, { rotate: "360deg" }, "first");
			ScrollTrigger.create({
				animation: counterAnimTimeline,
				trigger: ".DigitallySvatantra",
				start: "top center",
				end: "center center",
				scrub: 1,
				// markers: true,
			});
		}
		counterAnimation();
	}, []);
	return (
		<section
			className={`${styles.DigitallySvatantra} DigitallySvatantra ptb_80`}
			name="DigitallySvatantra"
		>
			{/* <div className="container"> */}
			<div className={`${styles.DigitalFlex}`}>
				<div className={`${styles.ContentBx} ContentBx`}>
					<h2 className="text_xxxl color_primary pb_20">
						Making every Indian digitally Svatantra
					</h2>
					<p className="text_sm color_light_black opacity_8">
						At Svatantra, we harness the power of technology to make our services far
						more accessible and impactful, ensuring entrepreneurial freedom with
						growth and prosperity. We were the first in the sector to implement 100%
						cashless disbursement and roll out a customer facing app, bringing success
						to your fingertips.
					</p>
					<div className={`${styles.BtnBx} hidden`}>
						<Button
							buttonType="secondary"
							condition={"white"}
							link={"#"}
							title={"Explore More"}
						/>
					</div>{" "}
				</div>
				<div className={`${styles.ImgBx} ImgBx`}>
					<div className={`${styles.ImgInsideBx}`}>
						<img src={HandImg.src} className={`${styles.HandImg}`} alt="Hand Image" />
						<img
							src={DesignBg.src}
							className={`${styles.DesignImg}`}
							alt="Design Image"
						/>
					</div>
				</div>
			</div>
			{/* </div> */}
		</section>
	);
}
