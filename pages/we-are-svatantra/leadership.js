// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Popup from "@/components/Popup";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Buttons/Button";
import Footer2 from "@/components/Footer2";
// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";
// UTILS //
import StrapiImage from "@/utils/StrapiImage";
// STYLES //
import styles from "@/styles/pages/Leadership.module.scss";

// IMAGES //
import Leader1 from "../../public/img/leadership/Leader1.jpg";
import PlusIcon from "../../public/img/leadership/PlusIcon.svg";
import Ananya from "../../public/img/leadership/Ananya.png";
import design from "../../public/img/leadership/design.png";
import arrow_btn from "../../public/img/arrow_btn.svg";

// DATA //
import { getOurLeaderships } from "@/services/whoWeAreService";

/** getOurLeaderships */
export const getStaticProps = async (context) => {
	const leadershipsData = await getOurLeaderships();
	return { props: { leadershipsData }, revalidate: 60 };
};
/** Leadership Page */
export default function LeadershipPage({ leadershipsData }) {
	console.log(leadershipsData.data, "leadershipsData");

	const [isVisible, setIsVisible] = useState(false);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [slideNo, setSlideNo] = useState(0);

	const [openPop1, setOpenPop1] = useState(false);

	/** handleSlideClick Function */
	const handleSlideClick = (e, index) => {
		e.preventDefault();
		setSlideNo(index);
		setIsPopupOpen(true);
		setOpenPop1(true);
	};

	/** handleClosePopup Function */
	const handleClosePopup = () => {
		setIsPopupOpen(false);
	};
	const data = [
		{
			image: Leader1.src,
			name: "Vineet Chattree",
			designation: "Managing Director, Svatantra Microfin Pvt. Ltd",
			desc:
				"Vineet brings over 25 years of diverse experience across operations and management consulting in India, the USA, and the Middle East. His strategic acumen and passion for empowering underserved communities have been instrumental in shaping the growth of Svatantra Microfin and Svatantra Micro Housing into industry leaders. With a philosophy rooted in aligning people, products, and processes with customer needs, Vineet envisions impactful and sustainable growth. An eternal learner, he is a chemical engineer, holds a post-graduate degree in Business Administration, and is currently pursuing Business Laws while serving as Vice-Chairperson of MFIN.",
		},
		{
			image: Leader1.src,
			name: "Vineet Chattree",
			designation: "Managing Director, Svatantra Microfin Pvt. Ltd",
			desc:
				"Vineet brings over 25 years of diverse experience across operations and management consulting in India, the USA, and the Middle East. His strategic acumen and passion for empowering underserved communities have been instrumental in shaping the growth of Svatantra Microfin and Svatantra Micro Housing into industry leaders. With a philosophy rooted in aligning people, products, and processes with customer needs, Vineet envisions impactful and sustainable growth. An eternal learner, he is a chemical engineer, holds a post-graduate degree in Business Administration, and is currently pursuing Business Laws while serving as Vice-Chairperson of MFIN.",
		},
		{
			image: Leader1.src,
			name: "Vineet Chattree",
			designation: "Managing Director, Svatantra Microfin Pvt. Ltd",
			desc:
				"Vineet brings over 25 years of diverse experience across operations and management consulting in India, the USA, and the Middle East. His strategic acumen and passion for empowering underserved communities have been instrumental in shaping the growth of Svatantra Microfin and Svatantra Micro Housing into industry leaders. With a philosophy rooted in aligning people, products, and processes with customer needs, Vineet envisions impactful and sustainable growth. An eternal learner, he is a chemical engineer, holds a post-graduate degree in Business Administration, and is currently pursuing Business Laws while serving as Vice-Chairperson of MFIN.",
		},
		{
			image: Leader1.src,
			name: "Vineet Chattree",
			designation: "Managing Director, Svatantra Microfin Pvt. Ltd",
			desc:
				"Vineet brings over 25 years of diverse experience across operations and management consulting in India, the USA, and the Middle East. His strategic acumen and passion for empowering underserved communities have been instrumental in shaping the growth of Svatantra Microfin and Svatantra Micro Housing into industry leaders. With a philosophy rooted in aligning people, products, and processes with customer needs, Vineet envisions impactful and sustainable growth. An eternal learner, he is a chemical engineer, holds a post-graduate degree in Business Administration, and is currently pursuing Business Laws while serving as Vice-Chairperson of MFIN.",
		},
	];
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Leadership"} Desc={""} OgImg={""} Url={"/leadership"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.LeadershipPage} pb_80`}>
				<Breadcrumb
					link5={"we-are-svatantra/leadership"}
					linkTitle={"Leadership"}
				/>
				<div className="container">
					<div className={`${styles.Sec1}`}>
						<h2 className="section_title pb_20">
							Guiding Svatantra with a<br /> commitment to financial freedom
						</h2>
						<p className="text_md color_light_black opacity_80 pb_60">
							Our team leads by example at the forefront of change, <br />
							building a future where financial freedom is accessible to all.
						</p>
						{leadershipsData.data.map((item, index) => {
							if (!item.desc) return null;
							const paragraphs = item.desc.split(/<br\s*\/?>/i);

							const splitParagraphs = paragraphs[0]
								.split(/<\/p>\s*<p>/gi)
								.map((para, idx, arr) => {
									if (idx === 0) return para + "</p>";
									else if (idx === arr.length - 1) return "<p>" + para;
									return "<p>" + para + "</p>";
								});

							return (
								<>
									{item.isFounder && (
										<div className={`${styles.AnanyaIntro}`} key={index}>
											{console.log(item, " item.isFounder")}
											<div className={`${styles.Left}`}>
												<div className={`${styles.DetailsHead} pb_40`}>
													<p className="text_md font_primary pb_10">{item.name}</p>
													<p className="color_light_black text_xs opacity_80">
														{item.designation} |{" "}
														<a target="_blank" href={`${item.websiteLink}`} rel="noreferrer">
															www.ananyabirla.com
														</a>
													</p>
												</div>
												{/* <div className="text_sm color_light_black f_w_m opacity_80 pb_20">
													{parse(item.desc)}
												</div> */}
												<div className="text_sm color_light_black f_w_m opacity_80 pb_20">
													{parse(splitParagraphs[0])}
												</div>
												<div
													className={`${styles.paraWrapper} ${isVisible ? styles.show : ""}`}
												>
													{/* Show additional content when isVisible is true */}
													{isVisible && (
														<div className={`${styles.paraWrapper} ${styles.show}`}>
															{splitParagraphs.slice(1).map((para, idx) => (
																<p
																	key={idx}
																	className="text_sm color_light_black f_w_m opacity_80"
																>
																	{parse(para)}
																</p>
															))}
														</div>
													)}
												</div>
												{/* <p className="text_sm color_light_black f_w_m opacity_80 pb_20">
													At 17, Ananya Birla founded Svatantra Microfin Pvt. Ltd., setting a
													new benchmark in microfinance with a vision for technology-led
													financial inclusion. Steering the company to become one of India’s
													fastest-growing MFIs, she introduced transformative practices like
													100% cashless disbursements and tailored microfinance solutions.
													Her leadership extends beyond Svatantra, as Chairperson of
													Svatantra Micro Housing Finance Corporation and Co-Chairperson of
													ASSOCHAM’s Microfinance Council of India, driving systemic change
													in how financial services empower rural and semi-urban India.
												</p>
												<div
													className={`${styles.paraWrapper} ${isVisible ? styles.show : ""}`}
												>
													<p className="text_sm color_light_black f_w_m opacity_80">
														Ananya’s achievements reflect a relentless commitment to
														meaningful impact from being honored by the former Chief Minister
														of Maharashtra for empowering over 500,000 women to co-founding
														the Mpower movement to break mental health stigmas. An Oxford
														alumna and celebrated musician, she approaches leadership with a
														balance of innovation and empathy, creating an environment that
														inspires bold ideas and fosters tangible progress.
													</p>
												</div> */}
												<div
													className={`${styles.Btn} pt_20`}
													onClick={() => setIsVisible(!isVisible)}
												>
													<Button
														buttonType="five"
														title={isVisible ? "Read Less" : "Read More"}
													/>
												</div>
											</div>
											<div className={`${styles.Right}`}>
												<img
													src={design.src}
													className="img-responsive"
													alt="Design Image"
												/>
												<img
													// src={Ananya.src}
													src={StrapiImage(item.profileImg).url}
													className={styles.AnanyaImg}
													alt="Design Image"
												/>
											</div>
										</div>
									)}
								</>
							);
						})}
						{/* <div className={`${styles.AnanyaIntro}`}>
							<div className={`${styles.Left}`}>
								<div className={`${styles.DetailsHead} pb_40`}>
									<p className="text_md">Ananya Birla</p>
									<p className="color_light_black text_xs opacity_80">
										Founder, Chairperson, and Director |{" "}
										<a target="_blank" href="www.ananyabirla.com">
											www.ananyabirla.com
										</a>
									</p>
								</div>
								<p className="text_sm color_light_black f_w_m opacity_80 pb_20">
									At 17, Ananya Birla founded Svatantra Microfin Pvt. Ltd., setting a new
									benchmark in microfinance with a vision for technology-led financial
									inclusion. Steering the company to become one of India’s
									fastest-growing MFIs, she introduced transformative practices like 100%
									cashless disbursements and tailored microfinance solutions. Her
									leadership extends beyond Svatantra, as Chairperson of Svatantra Micro
									Housing Finance Corporation and Co-Chairperson of ASSOCHAM’s
									Microfinance Council of India, driving systemic change in how financial
									services empower rural and semi-urban India.
								</p>
								<div
									className={`${styles.paraWrapper} ${isVisible ? styles.show : ""}`}
								>
									<p className="text_sm color_light_black f_w_m opacity_80">
										Ananya’s achievements reflect a relentless commitment to meaningful
										impact from being honored by the former Chief Minister of Maharashtra
										for empowering over 500,000 women to co-founding the Mpower movement
										to break mental health stigmas. An Oxford alumna and celebrated
										musician, she approaches leadership with a balance of innovation and
										empathy, creating an environment that inspires bold ideas and fosters
										tangible progress.
									</p>
								</div>
								<div
									className={`${styles.Btn} pt_20`}
									onClick={() => setIsVisible(!isVisible)}
								>
									<Button
										buttonType="five"
										title={isVisible ? "Read Less" : "Read More"}
									/>
								</div>
							</div>
							<div className={`${styles.Right}`}>
								<img src={design.src} className="img-responsive" alt="Design Image" />
								<img src={Ananya.src} className={styles.AnanyaImg} alt="Design Image" />
							</div>
						</div> */}
					</div>
					<div className={`${styles.ChangeMakers}`}>
						<h2 className="section_title pb_40">Our changemakers</h2>
						<div className={`${styles.GridContainer}`}>
							{/* {data.map((item, index) => (
								<div className={`${styles.GridItem} b_r_16`} key={index}>
									<div className={styles.ImgBx}>
										<img
											src={item.image}
											className="img-responsive b_r_10 width_100"
											alt="Leaders Image"
										/>
										<div
											className={`${styles.box_btn} bx1`}
											onClick={(e) => handleSlideClick(e, index)}
											data-slide={index}
										>
											<div className={`${styles.btn_primary}`}>
												<img src={PlusIcon.src} className="img-responsive" />
											</div>
										</div>
									</div>
									<div className={styles.DetailsBx}>
										<div className={styles.Details}>
											<p className={`${styles.Name} font_primary text_md f_w_m`}>
												{item.name}
											</p>
											<p
												className={`${styles.Designation} color_light_black text_xs opacity_80`}
											>
												{item.designation}
											</p>
										</div>
									</div>
								</div>
							))} */}
							{leadershipsData.data.map((item, index) => {
								return (
									<>
										{!item.isFounder && (
											<div className={`${styles.GridItem} b_r_16`} key={index}>
												<div className={styles.ImgBx}>
													<img
														src={StrapiImage(item.profileImg).url}
														className="img-responsive b_r_10 width_100"
														alt="Leaders Image"
													/>
													<div
														className={`${styles.box_btn} bx1`}
														onClick={(e) => handleSlideClick(e, index)}
														data-slide={index}
													>
														<div className={`${styles.btn_primary}`}>
															<img src={PlusIcon.src} className="img-responsive" />
														</div>
													</div>
												</div>
												<div className={styles.DetailsBx}>
													<div className={styles.Details}>
														<p className={`${styles.Name} font_primary text_md f_w_r`}>
															{item.name}
															{/* item.name */}
														</p>
														<p
															className={`${styles.Designation} color_light_black text_xs opacity_80`}
														>
															{item.designation}
														</p>
													</div>
												</div>
											</div>
										)}
									</>
								);
							})}
						</div>
					</div>
				</div>
				{isPopupOpen && (
					<Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
						<div>
							{openPop1 && (
								<div className={`${styles.className}`}>
									{leadershipsData.data.map((item, ind) => {
										return (
											<>
												{slideNo == ind && (
													<div className={`${styles.PopupItem}`} key={ind}>
														<div className={styles.ImgBx}>
															<img
																src={StrapiImage(item.profileImg).url}
																className="img-responsive b_r_10"
																alt="Leaders Image"
															/>
															<div className={`${styles.LinksBx} pt_10`}>
																<div className={`${styles.Link} pt_20`}>
																	{item.email && (
																		<a
																			href={`mailto:${item.email}`}
																			rel="noopener noreferrer"
																			className={styles.MainLink}
																		>
																			<p className={`${styles.EmailId} text_xs opacity_80`}>
																				{item.email}
																			</p>
																			<img src={arrow_btn.src} alt="" />
																		</a>
																	)}
																</div>
																<div className={`${styles.Link} pt_20`}>
																	{item.linkedinLink && (
																		<a
																			href={`${item.linkedinLink}`}
																			target="_blank"
																			rel="noopener noreferrer"
																			className={styles.MainLink}
																		>
																			<p className={`${styles.EmailId} text_xs opacity_80`}>
																				Connect on LinkedIn
																			</p>
																			<img src={arrow_btn.src} alt="Arrow" />
																		</a>
																	)}
																</div>
															</div>
														</div>
														<div className={`${styles.DetailsBx} b_r_10`}>
															<p className={`${styles.Name} font_primary text_lg pb_10`}>
																{item.name}
															</p>
															<p className={`${styles.Designation} text_sm opacity_80 pb_40`}>
																{item.designation}
															</p>
															<p className="text_sm opacity_80">{parse(item.desc)}</p>
														</div>
													</div>
												)}
											</>
										);
									})}
								</div>
							)}
						</div>
					</Popup>
				)}
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer2 />
		</div>
	);
}
