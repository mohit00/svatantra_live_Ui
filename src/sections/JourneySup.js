/* eslint-disable react/jsx-key */
// MODULES //
import { useEffect, useState } from "react";
// COMPONENTS //
import StrapiImage from "@/utils/StrapiImage";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/JourneySup.module.scss";

// IMAGES //
import img_20 from "../../public/img/year/20.svg";
import img_24 from "../../public/img/year/13.svg";
import img_23 from "../../public/img/year/12.svg";
import img1 from "../../public/img/year/img1.jpg";
import img2 from "../../public/img/year/img2.jpg";

// DATA //

/** JourneySup Section */
export default function JourneySup({ gsap, ScrollTrigger, journeyData }) {
	const [isMobile, setIsMobile] = useState(false);
	/** */
	const scrollAnimation = () => {
		gsap.registerPlugin(ScrollTrigger);
		const winH = window.innerHeight;

		const boxes = document.querySelectorAll(".box1");

		// Pin the stickyYear element throughout the entire scroll duration
		ScrollTrigger.create({
			trigger: ".mainBox",
			start: "top top",
			end: () => "+=" + document.querySelector(".mainBox").offsetHeight,
			pin: ".stickyYear",
			pinSpacing: false,
			markers: true,
		});

		boxes.forEach((box, index) => {
			const numberImg = box.querySelector(".number");

			ScrollTrigger.create({
				trigger: box,
				start: "top top",
				end: "bottom center",
				pin: window.innerWidth < 767 ? false : numberImg,
				pinSpacing: true,
				markers: true,
				onEnter: () => showNumber(index),
				onLeaveBack: () => showNumber(index - 1),
			});

			gsap.fromTo(
				numberImg,
				{ autoAlpha: 0 },
				{
					autoAlpha: 1,
					scrollTrigger: {
						trigger: box,
						start: "top center",
						end: `+=${winH}`,
						scrub: true,
					},
				}
			);
		});
		/** */
		function showNumber(index) {
			const allNumbers = document.querySelectorAll(".number");
			allNumbers.forEach((num, i) => {
				num.style.opacity = i === index ? 0 : 1;
			});
		}
	};

	useEffect(() => {
		if (!isMobile) {
			const mainBoxEl = document.querySelector(".mainBox");
			if (mainBoxEl) {
				scrollAnimation();
			}
		}
	}, [isMobile]);

	useEffect(() => {
		/** */
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className={styles.JourneySup}>
			<div className="container">
				<h1 className="text_xxxl color_primary pb_30">
					Building a legacy of growth and <br />
					change
				</h1>
				<p className="text_reg_20 opacity_8 pb_50">
					A story of bold steps, innovation, and lasting impact from a single <br />
					branch to India&apos;s second-largest MFI.
				</p>
				{!isMobile ? (
					<div className={`${styles.mainBox} mainBox`}>
						<div className={`${styles.stickyYear} stickyYear`}>
							<h1 className={`${styles.year20} year20`}>20</h1>
						</div>

						<div className={`${styles.contentBox} contentBox`}>
							{journeyData.data.map((item, index) => {
								return (
									<div className={`${styles.box1} box1`}>
										<h1 className={`${styles.number} number`}>
											{item.year.toString().slice(-2)}
										</h1>
										<div className="column">
											{item.year_content.map((i, index) => {
												return (
													<div className={`${styles.content} content`}>
														<h1 className="text_reg f_w_b">{i.month}</h1>
														{i.content.map((j, index) => {
															return (
																<div className="content2">
																	<p className="text_sm f_w_m opacity_80 pb_20">{j.title}</p>
																	{j.image && (
																		<img src={StrapiImage(j?.image)?.url} className="pt_20" />
																	)}
																</div>
															);
														})}
													</div>
												);
											})}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				) : (
					<div className="ipadJourneyDiv">
						<div className="mainBox"></div>
					</div>
				)}
			</div>
		</section>
	);
}
