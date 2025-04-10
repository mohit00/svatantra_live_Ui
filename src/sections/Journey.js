import { useRef, useEffect, useState } from "react";
import StrapiImage from "@/utils/StrapiImage";
import styles from "@/styles/sections/Journey.module.scss";

/** Homenews Section */
export default function JourneyComponent({ journeyData }) {
	const journeyBoxRef = useRef(null);
	const titleRef = useRef(null);
	const [isInView, setIsInView] = useState(false);
	const [offsetTop, setOffsetTop] = useState(0);

	useEffect(() => {
		if (titleRef.current) {
			const topPosition =
				titleRef.current.getBoundingClientRect().top + window.scrollY;
			setOffsetTop(topPosition);
		}
	}, []);

	useEffect(() => {
		/**  */
		const handleScroll = () => {
			if (journeyBoxRef.current) {
				const rect = journeyBoxRef.current.getBoundingClientRect();
				const isVisible = rect.top <= window.innerHeight * 0.57;
				setIsInView(isVisible);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={`${styles.Journey_section} pb_80`}>
			<div className="container">
				<div className={`${styles.banner_info}`}>
					<h2 className="section_title">Building a legacy of growth and change</h2>
					<p className="text_md pt_10 pb_40">
						A story of bold steps, innovation, and lasting impact from a single branch
						to India&lsquo;s second-largest MFI.
					</p>
				</div>

				<div className={`${styles.Journey_box_wrapper}`}>
					<div ref={titleRef}>
						{journeyData?.data?.map((item, index) => {
							const isLast = index === journeyData.data.length - 1;

							return (
								<div
									key={index}
									ref={isLast ? journeyBoxRef : null}
									className={`${styles.Journey_box} ${
										isLast ? "last" : "notLast"
									} f_w_j`}
								>
									<div className={`${styles.title}`}>
										<h2>
											<span
												className={`${styles.position_fixed} ${
													isInView ? styles.additionalClass : ""
												}`}
												style={{ top: `${offsetTop}px` }}
											>
												20
											</span>
											<span
												className={`${styles.color_trans} ${
													isInView ? styles.additionalClassRemove : ""
												}`}
											>
												20
											</span>
											{item.year.toString().substring(2)}
										</h2>
									</div>

									<div className={styles.info_wrapper}>
										{item.year_content?.map((jitem, ind) => (
											<div className={styles.info} key={ind}>
												<h4 className="text_reg f_w_b">{jitem.month}</h4>
												<div>
													{jitem.content?.map((titem, idx) => (
														<div className="m_b_15" key={idx}>
															{titem.title && (
																<h6 className="text_reg f_w_m opacity_80">{titem.title}</h6>
															)}
															{titem.desc && (
																<p className="text_sm f_w_m opacity_80">{titem.desc}</p>
															)}
															<div className={`${styles.image} pt_20`}>
																{titem?.image && (
																	<img
																		src={StrapiImage(titem?.image)?.url}
																		className="img-responsive"
																		alt="Journey"
																	/>
																)}
															</div>
														</div>
													))}
												</div>
											</div>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
