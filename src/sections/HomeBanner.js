// MODULES //
import React, { useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeBanner.module.scss";

// IMAGES //
import Line1 from "../../public/img/home/banner_line.png";
import RoateteImg from "../../public/img/home/rotate_img.png";
import rupeesImg from "../../public/img/home/rupees_img.png";

// DATA //

/** HomeBanner Component */
export default function HomeBanner({ gsap, ScrollTrigger }) {
	const lottieAnimations = [{ src: "/lottie/loading.json" }];

	useEffect(() => {
		const introTimeline = gsap.timeline({
			// onStart: () => {
			// 	document.body.style.overflow = "hidden";
			// 	document.body.style.height = "100vh";
			// 	document.documentElement.style.overflow = "hidden";
			// },
		});

		introTimeline.to(
			`.${styles.home_banner_bg}`,
			1.5,
			{
				y: "0",
				delay: 5,
			},
			"1st"
		);
		introTimeline.to(
			`.${styles.info}`,
			1.5,
			{
				x: "0",
				delay: 1.5,
			},
			"2st"
		);
		introTimeline.to(
			`.${styles.intro_loader}`,
			1.5,
			{
				x: "-22%",
				delay: 1,
			},
			"2st"
		);
		introTimeline.to(
			// eslint-disable-next-line quotes
			`.main_header`,
			{
				y: "12px",
			},
			"3st"
		);
		introTimeline.to(
			`.${styles.line_1}`,
			{
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
			},
			"3st"
		);
		// aa.fromTo(
		// 	".banner_animation",
		// 	1,
		// 	{
		// 		y: "90%",
		// 		opacity: 1,
		// 	},
		// 	{
		// 		y: "0%",
		// 		opacity: 1,
		// 		delay: 0.1,
		// 	},
		// 	"1st"
		// )
	}, []);
	return (
		<div className={styles.home_banner}>
			<div className={styles.home_banner_bg}></div>
			<div className={styles.intro_loader}>
				<DotLottieReact
					src={lottieAnimations[0].src}
					autoplay
					loop
					renderer="svg"
				/>
			</div>
			<div className="container">
				<div className={styles.banner}>
					<div className={styles.image}>
						{/* <div className={styles.image_wrapper}>
							<img
								src={RoateteImg.src}
								alt="rotate Image"
								className="img-responsive"
							/>
						</div>
						<div className={styles.rupees_img}>
							<img src={rupeesImg.src} alt="Rupees Image" className="img-responsive" />
						</div> */}
					</div>
					<div className={styles.info_wrapper}>
						<div className={styles.info}>
							<h1 className="section_title">
								Building the <span>Entrepreneurs</span> <br className="hidden-xs" />{" "}
								that build India’s economy
							</h1>
							<p className="text_md pt_20 opacity_80">
								We turn aspirations into breakthroughs, powering the journey of every
								Indian toward economic independence, prosperity, and success.
							</p>
						</div>
					</div>
					{/* <p className={`${styles.scroll} text_xs hidden`}>Scroll To Discover</p> */}
				</div>
				{/* <p className={`${styles.scroll} text_xs hidden_xs`}>Scroll To Discover</p> */}
			</div>

			<div className={styles.line_1}>
				<img src={Line1.src} alt="Line 1" className="img-responsive" />
			</div>
		</div>
	);
}
