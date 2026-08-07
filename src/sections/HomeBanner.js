/* eslint-disable quotes */
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
import Blue from "../../public/img/home/blue.svg";
import Green from "../../public/img/banner/newLineLine.svg";

// DATA //

/** HomeBanner Component */
export default function HomeBanner({ gsap, ScrollTrigger }) {
	const lottieAnimations = [
		{ src: "/lottie/loading.json" },
		{ src: "/lottie/line1.json" },
		{ src: "/lottie/line2.json" },
		{ src: "/lottie/mobile_loader.json" },
	];

	useEffect(() => {
		const winW = window.innerWidth;
		const hasAnimationPlayed = sessionStorage.getItem("homeBannerAnimation");

		const introTimeline = gsap.timeline({
			onStart: () => {
				document.body.style.overflow = "hidden";
				document.documentElement.style.overflow = "hidden";
			},
			onComplete: () => {
				document.body.style.overflow = "";
				document.documentElement.style.overflow = "";
			},
		});

		if (!hasAnimationPlayed) {
			// First animation (store flag in sessionStorage)
			sessionStorage.setItem("homeBannerAnimation", "true");

			introTimeline
				.fromTo(
					`.${styles.home_banner_bg}`,
					1,
					{ y: "-100%" },
					{ y: "0", delay: 3 },
					"1st"
				)
				.to(`.${styles.line1}, .${styles.line2}`, { opacity: 0, delay: 3 }, "1st")
				.fromTo(
					`.${styles.info}`,
					1.5,
					{ x: "-100%" },
					{ x: "0", delay: 1.5 },
					"2nd"
				)
				.to(
					`.${styles.intro_loader}`,
					1,
					{ x: winW > 767 ? "-22%" : "unset", delay: 1 },
					"2nd"
				)
				.fromTo(
					`.main_header`,
					{ y: "-120%" },
					{ y: "12px", marginTop: "0" },
					"3rd"
				)
				.to(
					`.${styles.intro_loader_mobile}`,
					{ y: winW < 767 ? "0" : "-18vh", delay: 1 },
					"2nd"
				)
				.to(
					`.${styles.line_1}`,
					1,
					{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
					"3rd"
				)
				.to(
					`.${styles.line_2}`,
					1,
					{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", delay: 0.1 },
					"3rd"
				);
		} else {
			// Second animation (different logic)
			introTimeline
				.to(`.${styles.home_banner_bg}`, { y: "0" }, "1st")
				.to(
					`.${styles.intro_loader}`,
					{ x: "-22%", y: winW > 992 ? "0%" : "-10%" },
					"1st"
				)
				.to(`.${styles.info}`, { x: "0" }, "1st")
				.to(`.main_header`, { y: "12px", marginTop: "0" }, "1st")
				.to(`.${styles.line1}, .${styles.line2}`, { display: "none" }, "1st")
				.to(
					`.${styles.line_1}`,
					{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
					"1st"
				)
				.to(
					`.${styles.line_2}`,
					{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
					"1st"
				);
		}
	}, []);

	return (
		<div className={styles.home_banner}>
			<div className={styles.home_banner_bg}></div>
			<div className={`${styles.intro_loader} hidden_xs`}>
				<DotLottieReact
					src={lottieAnimations[0].src}
					autoplay
					loop
					renderer="svg"
				/>
			</div>
			<div className={`${styles.intro_loader_mobile} visible_xs`}>
				<DotLottieReact
					src={lottieAnimations[3].src}
					autoplay
					loop
					renderer="svg"
				/>
			</div>
			<div className={styles.line1}>
				<DotLottieReact
					src={lottieAnimations[1].src}
					autoplay
					loop
					renderer="svg"
				/>
			</div>
			<div className={styles.line2}>
				<DotLottieReact
					src={lottieAnimations[2].src}
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
							<h1 className="section_title testing">
								Building the <span>Entrepreneurs</span> <br className="hidden-xs" />{" "}
								who power India’s economy
							</h1>
							{/* <p className="text_md pt_20 opacity_80">
								We turn aspirations into breakthroughs, powering the journey of every
								Indian toward economic independence, prosperity, and success.
							</p> */}
						</div>
					</div>
					{/* <p className={`${styles.scroll} text_xs hidden`}>Scroll To Discover</p> */}
				</div>
				{/* <p className={`${styles.scroll} text_xs hidden_xs`}>Scroll To Discover</p> */}
			</div>

			<div className={styles.line_1}>
				<img src={Blue.src} alt="Line 1" className="img-responsive" />
			</div>
			<div className={styles.line_2}>
				<img src={Green.src} alt="Line 1" className="img-responsive" />
			</div>
		</div>
	);
}
