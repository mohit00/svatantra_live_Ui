// MODULES //
import { useState, useEffect } from "react";
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
import MediaPopupContent from "@/components/MediaPopupContent";
// SECTIONS //

// PLUGINS //
import Moment from "moment";

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

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
export default function Homenews({ mediaMentionData, getAwardsData }) {
	console.log(mediaMentionData, "ddddddddd");
	const [isOpen, setIsOpen] = useState(false);
	const [selectedBlog, setSelectedBlog] = useState(null);
	const [activeTab, setActiveTab] = useState("media");
	const [lenghtCount, setLenghtCount] = useState(4);
	const [windowWidth, setWindowWidth] = useState();

	/** */
	const openPopup = (blog) => {
		console.log(blog, " blog");
		setSelectedBlog(blog);
		setIsOpen(true);
	};

	/** */
	const closePopup = () => {
		setIsOpen(false);
		setSelectedBlog(null);
	};
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
			prevEl: ".arrowSection #customPrev",
			nextEl: ".arrowSection #customNext",
		},
		breakpoints: {
			767: {
				slidesPerView: 2, // Mobile screens: 1 slide visible
				spaceBetween: 10, // Reduced spacing for smaller screens
			},
			1024: {
				slidesPerView: 1, // Large screens: 3 slides visible
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
			prevEl: ".arrowSection #customPrev",
			nextEl: ".arrowSection #customNext",
		},
		breakpoints: {
			767: {
				slidesPerView: 2, // Mobile screens
				spaceBetween: 10, // Adjust spacing for mobile if needed
			},
			1024: {
				slidesPerView: 3, // Tablet and desktop view
				spaceBetween: 20, // Increase spacing if needed for larger screens
			},
		},
	};
	useEffect(() => {
		if (window.innerWidth < 767) {
			setLenghtCount(3);
		}
		setWindowWidth(window.innerWidth);
	}, []);
	const filteredData = mediaMentionData?.data?.filter(
		(item) => item?.showHomePage
	);
	return (
		<section className={`${styles.Homenews} ptb_80`}>
			<div className="container">
				<div className={`${styles.mainBox}`}>
					<h1 className="text_xxxl color_primary pb_20">Media Reports</h1>
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
								link={activeTab === "media" ? "/media/media-reports" : "/media/awards"}
								title={"View More"}
							/>
						</div>
					</div>

					<div>
						{activeTab == "media" ? (
							<>
								{windowWidth < 992 ? (
									<Swiper {...mediaSettings}>
										{filteredData?.map((item, ind) => {
											const date = Moment(item.date).format("MMM DD, YYYY");
											return (
												<SwiperSlide key={ind}>
													<div
														className={`${styles.slider}`}
														onClick={() => openPopup(item)}
													>
														<div className={`${styles.box1}`}>
															<div className={`${styles.imgBox}`}>
																<img
																	src={StrapiImage(item.thumbnail).url}
																	alt="box1"
																	className={`${styles.mainImg}`}
																/>

																<div className={styles.logoBox}>
																	<img src={StrapiImage(item.logo).url} />
																</div>
															</div>

															<div className={`${styles.categoryBox}`}>
																<div className={`${styles.date}`}>
																	<p>{date}</p>
																</div>
															</div>

															<p className="text_reg f_w_m pt_10">{item.title}</p>
														</div>
													</div>
												</SwiperSlide>
											);
										})}
									</Swiper>
								) : (
									<div className={styles.gridBx}>
										{filteredData?.map((item, ind) => {
											const date = Moment(item.date).format("MMM DD, YYYY");
											return (
												<div
													className={`${styles.slider}`}
													key={ind}
													onClick={() => openPopup(item)}
												>
													<div className={`${styles.box1}`}>
														<div className={`${styles.imgBox}`}>
															<img
																src={StrapiImage(item.thumbnail).url}
																alt="box1"
																className={`${styles.mainImg}`}
															/>
														</div>

														<div className={`${styles.categoryBox}`}>
															{/* <div className={`${styles.news}`}>
																<p>News</p>
															</div> */}
															<div className={`${styles.date}`}>
																<p>{date}</p>
															</div>
														</div>

														<p className="text_reg f_w_m pt_10">{item.title}</p>
													</div>
												</div>
											);
										})}
									</div>
								)}
							</>
						) : (
							<>
								{getAwardsData?.data.length >= lenghtCount ? (
									<Swiper {...awardSettings}>
										{getAwardsData.data?.map((item, ind) => {
											const date = Moment(item.date).format("MMM DD, YYYY");
											return (
												<SwiperSlide key={ind}>
													<div className={`${styles.awardBox}`}>
														<div className={`${styles.box1}`}>
															<div className={`${styles.logoBox}`}>
																<img
																	src={StrapiImage(item.logo).url}
																	alt="awardLogo"
																	className={`${styles.awardLogo}`}
																/>
															</div>
															<div className={`${styles.dateBox}`}>
																<p className="">{date}</p>
															</div>
															<p className={`${styles.headTitle} text_reg`}>{item.title}</p>
														</div>
													</div>
												</SwiperSlide>
											);
										})}
									</Swiper>
								) : (
									<div className={styles.gridBx}>
										{getAwardsData.data?.map((item, ind) => {
											const date = Moment(item.date).format("MMM DD, YYYY");
											return (
												<div className={`${styles.awardBox}`} key={ind}>
													<div className={`${styles.box1}`}>
														<div className={`${styles.logoBox}`}>
															<img
																src={StrapiImage(item.logo).url}
																alt="awardLogo"
																className={`${styles.awardLogo}`}
															/>
														</div>
														<div className={`${styles.dateBox}`}>
															<p className="">{date}</p>
														</div>
														<p className={`${styles.headTitle} text_reg`}>{item.title}</p>
													</div>
												</div>
											);
										})}
									</div>
								)}
							</>
						)}

						<div
							className={`${styles.items} ${
								activeTab == "media" ? styles.progressbx : ""
							}`}
						>
							<div
								className={`${styles.progressBar} m_t_30 swiper-pagination-news`}
							></div>
							<div className={`${styles.arrowSection} arrowSection f_w_a_j_center`}>
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
			<div className={`${styles.BtnBx} ${styles.Mobileshow}`}>
				<Button
					isHref
					buttonType="secondary"
					condition={"white"}
					link={activeTab === "media" ? "/media/media-mention" : "/media/awards"}
					title={"View More"}
				/>
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
			<MediaPopupContent isOpen={isOpen} isClose={closePopup}>
				{selectedBlog && (
					<div className={styles.popupContent}>
						<img
							src={StrapiImage(selectedBlog.image).url}
							alt="blog-image"
							className="width_100"
						/>
					</div>
				)}
			</MediaPopupContent>
		</section>
	);
}
