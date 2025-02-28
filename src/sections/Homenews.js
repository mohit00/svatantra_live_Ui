// MODULES //
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";
// COMPONENTS //
import Button from "@/components/Buttons/Button";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Homenews.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMAGES //
import box1 from "../../public/img/news/box1.jpg";
import box11 from "../../public/img/news/box11.jpg";
import box2 from "../../public/img/news/box2.jpg";
import box22 from "../../public/img/news/box22.jpg";
import box222 from "../../public/img/news/box222.jpg";
import rightArrow from "../../public/img/news/rightarrow.svg";
import prevImg from "../../public/img/news/prevImg.svg";
import award1 from "../../public/img/news/award1.svg";
import award2 from "../../public/img/news/award2.svg";
import award3 from "../../public/img/news/award3.svg";
import workplace from "../../public/img/work.jpg";
import awardds from "../../public/img/awards.jpg";
import nbfc from "../../public/img/nbfc.png";
import advent from "../../public/img/advent.png";
import PEOS from "../../public/img/PEOS.png";
import business from "../../public/img/Business.png";
import newBharat from "../../public/img/newbharat.jpg";
import bestwork from "../../public/img/bestworkplace.jpg";
import finance from "../../public/img/finance.png";
// DATA //

/** Homenews Section */
export default function Homenews() {
	const [activeTab, setActiveTab] = useState("media");

	/** */
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const mediaSettings = {
		modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
		spaceBetween: 20, // Default spacing between slides
		slidesPerView: 1, // Default: Show 3 slides fully
		autoWidth: false,
		loop: true,
		pagination: {
			clickable: true,
			type: "progressbar",
			el: ".swiper-pagination-news",
		},
		observer: true,
		observeParents: true,
		navigation: {
			prevEl: "#customPrev",
			nextEl: "#customNext",
		},
		breakpoints: {
			767: {
				slidesPerView: 2, // Mobile screens: 1 slide visible
				spaceBetween: 10, // Reduced spacing for smaller screens
			},
			991: {
				slidesPerView: 2, // Medium screens: 2 slides visible
				spaceBetween: 20, // Adjust spacing for tablets
			},
			1024: {
				slidesPerView: 3, // Large screens: 3 slides visible
				spaceBetween: 20, // Increased spacing for larger screens
			},
		},
	};

	const awardSettings = {
		modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
		spaceBetween: 20, // Adjust spacing between slides
		slidesPerView: 1, // Show 3 slides fully
		autoWidth: false,
		loop: true,
		pagination: {
			clickable: true,
			type: "progressbar",
			el: ".swiper-pagination-news",
		},
		observer: true,
		observeParents: true,
		navigation: {
			prevEl: "#customPrev",
			nextEl: "#customNext",
		},
		breakpoints: {
			767: {
				slidesPerView: 1, // Mobile screens
				spaceBetween: 10, // Adjust spacing for mobile if needed
			},
			991: {
				slidesPerView: 3, // iPad Air portrait mode (820px width)
			},
			1024: {
				slidesPerView: 3, // Tablet and desktop view
				spaceBetween: 20, // Increase spacing if needed for larger screens
			},
		},
	};

	return (
		<section className={`${styles.Homenews} ptb_80`}>
			<div className="container">
				<div className={`${styles.mainBox}`}>
					<h1 className="text_xxxl color_primary pb_10">In the news</h1>
					<div className={`${styles.category} pb_30`}>
						<div className={`${styles.switchBox}`}>
							<div
								className={`${styles.media} ${
									activeTab === "media" ? styles.active : ""
								}`}
								onClick={() => handleTabClick("media")}
							>
								<p className="text_reg f_w_m">Media</p>
							</div>
							<div
								className={`${styles.award} ${
									activeTab === "award" ? styles.active : ""
								}`}
								onClick={() => handleTabClick("award")}
							>
								<p className="text_reg f_w_m">Awards</p>
							</div>
						</div>
						<div className={`${styles.BtnBx} ${styles.hiddenButton}`}>
							<Button
								isHref
								buttonType="secondary"
								condition={"white"}
								link={"#"}
								title={"View More"}
							/>
						</div>
					</div>

					<div>
						{activeTab == "media" ? (
							<>
								<Swiper {...mediaSettings}>
									<SwiperSlide>
										<div className={`${styles.slider}`}>
											<div className={`${styles.box1}`}>
												<div className={`${styles.imgBox}`}>
													<img src={advent.src} alt="box1" className={`${styles.mainImg}`} />
													{/* <img src={box11.src} alt="logo" className={`${styles.logo}`} /> */}
												</div>

												<div className={`${styles.categoryBox}`}>
													<div className={`${styles.news}`}>
														<p>News</p>
													</div>
													<div className={`${styles.date}`}>
														<p>4 March 2024</p>
													</div>
												</div>

												<p className="text_reg f_w_m pt_10">
													Advent, Multiples to invest ₹1,930 crore in Ananya Birla’s
													Svatantra Microfin
												</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className={`${styles.slider}`}>
											<div className={`${styles.box2}`}>
												<div className={`${styles.imgBox}`}>
													<img src={PEOS.src} alt="box1" className={`${styles.mainImg}`} />
													{/* <img src={box22.src} alt="logo" className={`${styles.logo}`} /> */}
												</div>
												<div className={`${styles.categoryBox}`}>
													<div className={`${styles.news}`}>
														<p>News</p>
													</div>
													<div className={`${styles.date}`}>
														<p>4 March 2024</p>
													</div>
												</div>
												<p className="text_reg f_w_m pt_10">
													PE cos Advent, Multiples to invest Rs 1,930 crore in Ananya Birla’s
												</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className={`${styles.slider}`}>
											<div className={`${styles.box1}`}>
												<div className={`${styles.imgBox}`}>
													<img
														src={business.src}
														alt="box1"
														className={`${styles.mainImg}`}
													/>
													{/* <img src={box11.src} alt="logo" className={`${styles.logo}`} /> */}
												</div>

												<div className={`${styles.categoryBox}`}>
													<div className={`${styles.news}`}>
														<p>News</p>
													</div>
													<div className={`${styles.date}`}>
														<p>24 December 2023</p>
													</div>
												</div>

												<p className="text_reg f_w_m pt_10">
													Ms. Birla Featured Among The Most Powerful Women in Business.
												</p>
											</div>
										</div>
									</SwiperSlide>
									{/* <SwiperSlide>
										<div className={`${styles.slider}`}>
											<div className={`${styles.box1}`}>
												<div className={`${styles.imgBox}`}>
													<img src={box1.src} alt="box1" className={`${styles.mainImg}`} />
													<img src={box11.src} alt="logo" className={`${styles.logo}`} />
												</div>

												<div className={`${styles.categoryBox}`}>
													<div className={`${styles.news}`}>
														<p>News</p>
													</div>
													<div className={`${styles.date}`}>
														<p>5 November 2024</p>
													</div>
												</div>

												<p className="text_reg f_w_m pt_10">
													Advent, Multiples to invest ₹1,930 crore in Ananya Birla’s
													Svatantra Microfin
												</p>
											</div>
										</div>
									</SwiperSlide> */}
								</Swiper>
							</>
						) : (
							<>
								<Swiper {...awardSettings}>
									<SwiperSlide>
										<div className={`${styles.awardBox}`}>
											<div className={`${styles.box1}`}>
												<div className={`${styles.logoBox}`}>
													<img
														src={newBharat.src}
														alt="awardLogo"
														className={`${styles.awardLogo}`}
													/>
												</div>
												<div className={`${styles.dateBox}`}>
													<p className="">5 November 2024</p>
												</div>
												<p className="text_reg">
													Bharat NBFC & Fintech Summit and Awards 2024 - Most Influential
													Microfinance Company of the Year 2024
												</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className={`${styles.awardBox}`}>
											<div className={`${styles.box1}`}>
												<div className={`${styles.logoBox}`}>
													<img
														src={bestwork.src}
														alt="awardLogo"
														className={`${styles.awardLogo}`}
													/>
												</div>
												<div className={`${styles.dateBox}`}>
													<p className="">5 November 2024</p>
												</div>
												<p className="text_reg">IGPTW Certified 2020 and 2022</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className={`${styles.awardBox}`}>
											<div className={`${styles.box1}`}>
												<div className={`${styles.logoBox}`}>
													<img
														src={finance.src}
														alt="awardLogo"
														className={`${styles.awardLogo}`}
													/>
												</div>
												<div className={`${styles.dateBox}`}>
													<p className="">5 November 2024</p>
												</div>
												<p className="text_reg">
													INCLUSIVE FINANCE INDIA AWARDS 2021 - Svatantra Microfin,
													Microfinance Organisation of the year 2021.
												</p>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</>
						)}

						<div className={`${styles.items}`}>
							<div
								className={`${styles.progressBar} m_t_30 swiper-pagination-news`}
							></div>
							<div className={`${styles.arrowSection} f_w_a_j_center`}>
								<button className={`${styles.customPrev}`} id="customPrev">
									<img src={prevImg.src} alt="" />
								</button>
								<button className={styles.customNext} id="customNext">
									<img src={rightArrow.src} alt="" />
								</button>
							</div>
						</div>

						{/*  */}
					</div>
				</div>
			</div>
			{/* <div className="container">
				<div className={`${styles.BtnBx} pt_20`}>
					<Button
						buttonType="secondary"
						condition={"white"}
						link={"#"}
						title={"Grow More"}
					/>
				</div>
			</div> */}
		</section>
	);
}
