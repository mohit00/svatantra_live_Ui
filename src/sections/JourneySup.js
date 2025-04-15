/* eslint-disable react/jsx-key */
// MODULES //
import { useEffect, useState, useRef } from "react";
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
	console.log(journeyData, "dddddddddddd");
	const [activeYear, setActiveYear] = useState("");
	const [hideSticky, setHideSticky] = useState(false);
	const mainBoxRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);
	/** */
	const scrollAnimation = () => {
		gsap.registerPlugin(ScrollTrigger);
		const winH = window.innerHeight;
		const boxes = document.querySelectorAll(".box1");
		const mainHeader = document.querySelector(".main_header");
		const mainHeaderHeight = mainHeader.offsetHeight + 12 + 15;
		const mainHeaderHeight2 = mainHeader.offsetHeight - 65;
		console.log(mainHeaderHeight, " mainHeaderHeight");

		// Pin the stickyYear element throughout the scroll
		ScrollTrigger.create({
			trigger: ".mainBox",
			start: `top ${mainHeaderHeight2}`,
			end: () =>
				window.innerWidth > 1024
					? "+=" + document.querySelector(".mainBox").offsetHeight
					: winH,
			pin: ".stickyYear",
			pinSpacing: false,
			// markers: true,
		});

		/** */
		const createScrollTriggers = (startOffset) => {
			boxes.forEach((box, index) => {
				const numberImg = box.querySelector(".number");

				ScrollTrigger.create({
					trigger: box,
					// start: `top ${startOffset}`,
					start: `top ${mainHeaderHeight}px`,
					end: "bottom center",
					// pin: true,
					pin: window.innerWidth < 767 ? false : numberImg,
					pinSpacing: false,
					anticipatePin: 1,
					onEnter: () => showNumber(index),
					onLeaveBack: () => showNumber(index - 1),
				});

				gsap.fromTo(
					numberImg,
					{ autoAlpha: 1 },
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
		};

		ScrollTrigger.matchMedia({
			all: function () {
				createScrollTriggers(`${mainHeaderHeight}px`);
			},
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
			// Timeout ensures DOM is painted
			const timeout = setTimeout(() => {
				const mainBoxEl = document.querySelector(".mainBox");
				if (mainBoxEl) {
					scrollAnimation();
				}
			}, 0);

			return () => {
				clearTimeout(timeout);
				// Clean up all ScrollTriggers when component unmounts or switches to mobile
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
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

	const contentData = journeyData.data
		.sort((a, b) => b.year - a.year) // Sort by year descending
		.flatMap((yearItem) =>
			yearItem.year_content.map((monthItem) => ({
				...monthItem,
				year: yearItem.year,
			}))
		);
	// const contentData = journeyData.data.flatMap((yearItem) =>
	// 	yearItem.year_content.map((monthItem) => ({
	// 		...monthItem,
	// 		year: yearItem.year,
	// 	}))
	// );

	useEffect(() => {
		if (isMobile) {
			const sections = document.querySelectorAll("[data-year]");
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveYear(entry.target.getAttribute("data-year"));
						}
					});
				},
				{ threshold: 0.5 }
			);

			sections.forEach((section) => observer.observe(section));

			return () => {
				sections.forEach((section) => observer.unobserve(section));
			};
		}
	}, [isMobile]);

	useEffect(() => {
		if (isMobile) {
			const sections = document.querySelectorAll("[data-year]");
			let hideTimeout = null;

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const year = entry.target.getAttribute("data-year");
							setActiveYear(year);

							// Clear any existing timer
							if (hideTimeout) {
								clearTimeout(hideTimeout);
								hideTimeout = null;
							}

							if (year === "2012") {
								// Show it first, then hide after 2.5 seconds
								setHideSticky(false);

								hideTimeout = setTimeout(() => {
									setHideSticky(true);
								}, 500);
							} else {
								setHideSticky(false); // For all other years, show as normal
							}
						}
					});
				},
				{ threshold: 0.5 }
			);

			sections.forEach((section) => observer.observe(section));

			return () => {
				sections.forEach((section) => observer.unobserve(section));
				if (hideTimeout) clearTimeout(hideTimeout);
			};
		}
	}, [isMobile]);

	console.log(contentData, "contentData");

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
							{[...journeyData.data]
								.sort((a, b) => b.year - a.year) // changed to descending
								.map((item, index) => {
									return (
										<div key={index} className={`${styles.box1} box1`}>
											<h1 className={`${styles.number} number`}>
												{item.year.toString().slice(-2)}
											</h1>
											<div className={styles.column}>
												{item.year_content.map((i, idx) => {
													return (
														<div key={idx} className={`${styles.content} content`}>
															<h1 className="text_reg f_w_b">{i.month}</h1>
															{i.content.map((j, jIndex) => {
																return (
																	<div key={jIndex} className={styles.content2}>
																		<p className="text_sm f_w_m opacity_80 pb_20">{j.title}</p>
																		{j.image && (
																			<img
																				src={StrapiImage(j?.image)?.url}
																				// className="pt_20"
																				alt={j.title}
																			/>
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
					<div className={styles.ipadJourneyDiv}>
						<div className="container">
							<div className={styles.mainBoxIpad} ref={mainBoxRef}>
								<div
									className={`${styles.stickyYearMobile} ${
										hideSticky ? styles.opacityZero : ""
									}`}
								>
									<h1 className={`${styles.number} number text_center`}>{activeYear}</h1>
								</div>

								{contentData.map((item, index) => (
									<div
										key={`${item.year}-${item.month}-${index}`}
										className={styles.box}
										data-year={item.year}
									>
										<div className={styles.contentIpad}>
											<h1 className="text_reg f_w_b pb_10">{item.month}</h1>

											{item.content.map((j, subIndex) => (
												<div key={subIndex}>
													<p className="text_sm f_w_m opacity_80 pb_20">{j.title}</p>
													{j.image && (
														<img
															src={StrapiImage(j.image)?.url}
															alt="journey-img"
															className="pb_20"
														/>
													)}
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
