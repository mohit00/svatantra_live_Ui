/* eslint-disable react/no-unescaped-entities */
// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/Buttons/Button";
import InnerBanner from "@/components/InnerBanner";
import Breadcrum from "@/components/Breadcrumb";
import Popup from "@/components/Popup";

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import parse from "html-react-parser";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

// STYLES //
import styles from "@/styles/pages/CustomerTestimonials.module.scss";

// SERVICES //

// DATA //
import { getCustomerTestimonials } from "@/services/impactService";

/** Data Fetching  */

// IMAGES //
import banner_desktop from "../../../public/img/faq/banner_desktop.jpg";
import story_one from "../../../public/img/our-impact/stories/story_one.jpg";
import arrow_btn from "../../../public/img/arrow_btn.svg";
import arrow_btn_popup from "../../../public/img/arrow_btn_popup.svg";
import frame from "../../../public/img/frame.png";
import playBtn from "../../../public/img/icons/play_btn.png";
// UTILS //
import StrapiImage from "@/utils/StrapiImage";

/** getOurLeaderships */
export const getStaticProps = async (context) => {
	const customertTestimonialData = await getCustomerTestimonials();
	return { props: { customertTestimonialData }, revalidate: 60 };
};

/** CustomerTestimonials Page */
export default function CustomerTestimonials({ customertTestimonialData }) {
	const [showItems, setShowItems] = useState(4); // State to manage the number of items to show

	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [slideNo, setSlideNo] = useState(0);

	const [openPop1, setOpenPop1] = useState(false);
	const sliderRef = useRef(null);
	/** handleSlideClick Function */
	const handleSlideClick1 = (e, index) => {
		e.preventDefault();
		setSlideNo(index);
		setIsPopupOpen(true);
		setOpenPop1(true);
	};
	/** handleShowMore function */
	const handleLoadMore = () => {
		setShowItems(showItems + 2); // Increase the number of items to show by 6
	};

	/** handleClosePopup Function */
	const handleClosePopup = () => {
		setIsPopupOpen(false);
		setSlideNo(0);
	};
	useEffect(() => {
		if (sliderRef.current?.swiper) {
			sliderRef.current.swiper.slideTo(slideNo);
		}
	}, [slideNo]);

	const customerTestimonialsData = [
		{
			title: "Literacy is the key to change23!",
			desc:
				"This is Sangeeta Dhone, our client from Maharashtra, India. A small loan from Svatantra helped her procure goods for her store and in turn, generate a decent profit. The income generated from the store helped Sangeeta in sending her daughter to school and give her the education she deserves! <br /> The income generated from the store helped Sangeeta in sending her daughter to school and give her the education she deserves!",
			thumbnail: story_one.src,
		},
		{
			title: "Literacy is the key to change2!",
			desc:
				"This is Sangeeta Dhone, our client from Maharashtra, India. A small loan from Svatantra helped her procure goods for her store and in turn, generate a decent profit. The income generated from the store helped Sangeeta in sending her daughter to school and give her the education she deserves!",
			thumbnail: story_one.src,
		},
		{
			title: "Literacy is the key to chang3!",
			desc:
				"This is Sangeeta Dhone, our client from Maharashtra, India. A small loan from Svatantra helped her procure goods for her store and in turn, generate a decent profit. The income generated from the store helped Sangeeta in sending her daughter to school and give her the education she deserves!",
			thumbnail: story_one.src,
		},
		{
			title: "Literacy is the key to chang3!",
			desc:
				"This is Sangeeta Dhone, our client from Maharashtra, India. A small loan from Svatantra helped her procure goods for her store and in turn, generate a decent profit. The income generated from the store helped Sangeeta in sending her daughter to school and give her the education she deserves!",
			thumbnail: story_one.src,
		},
	];

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Customer Testimonials"}
				Desc={""}
				Keywords={""}
				OgImg={""}
				Url={"/customer-testimonials"}
			/>
			{/* Header */}
			<Header />

			{/* Page Content Starts */}
			<main className={`${styles.StoriesOfSvatantra_page}`}>
				<Breadcrum
					link5="/our-impact/stories-of-svatantra/customer-testimonials"
					linkTitle={"Our Impact"}
					// linknest1={"/our-impact/stories-of-svatantra"}
					// linknestTitle1={"Stories of svatantra"}
					linknest2={"/our-impact/stories-of-svatantra/customer-testimonials"}
					linknestTitle2={"Customer Testimonials"}
				/>
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={banner_desktop.src}
					bannerTitle="From hopeful dreams to thriving realities"
					bannerDesc="Enabling aspiring entrepreneurs to build lasting success stories across the nation"
				/>
				<section className={`${styles.StoriesOfSvatantra_main}`}>
					<div className="container">
						<div className={`${styles.title_wrap}`}>
							<h2 className="text_xxxl color_primary">Customer Testimonial </h2>
						</div>

						<div className={`${styles.content_main_wrap} pt_40`}>
							<div className={`${styles.box_wrap}`}>
								{customertTestimonialData?.data
									?.slice(0, showItems)
									.map((item, ind) => {
										return (
											<div className={`${styles.box_item}`} key={ind}>
												<img
													src={StrapiImage(item.thumbnail).url}
													className="b_r_10"
													alt="story img"
												/>

												<div className={`${styles.content} pt_20 f_r_aj_between`}>
													<p className="text_md color_light_black font_secondary opacity_8">
														{item.title}
													</p>
													{item.link ? (
														<LightGallery
															speed={500}
															plugins={[lgThumbnail, lgZoom, lgVideo]}
														>
															<a data-src={item.link}>
																<img src={playBtn.src} alt="arrow icon" /> {/*video img*/}
															</a>
														</LightGallery>
													) : (
														<div onClick={(e) => handleSlideClick1(e, ind)} data-slide={ind}>
															<a href="">
																<img src={arrow_btn.src} alt="arrow icon" />
															</a>
														</div>
													)}
												</div>
											</div>
										);
									})}
								{/* {customerTestimonialsData.map((item, ind) => {
									return (
										<div className={`${styles.box_item}`} key={ind}>
											<img src={item.thumbnail} className="b_r_10" alt="story img" />
											<div className={`${styles.content} pt_20 f_r_aj_between`}>
												<p className="text_md color_light_black font_secondary opacity_8">
													{item.title}
												</p>
												<div onClick={(e) => handleSlideClick1(e, ind)} data-slide={ind}>
													<a href="">
														<img src={arrow_btn.src} alt="arrow icon" />
													</a>
												</div>
											</div>
										</div>
									);
								})} */}
							</div>
							{/*  */}
						</div>
						{customertTestimonialData.data.length > showItems ? (
							<div
								className={`${styles.BtnBx} f_r_aj_center pt_60`}
								onClick={handleLoadMore}
							>
								<Button
									buttonType="secondary"
									condition={"white"}
									link={"#"}
									title={"More Stories"}
									isHref={false}
								/>
							</div>
						) : (
							""
						)}
					</div>
				</section>

				{isPopupOpen && (
					<Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
						<div>
							{openPop1 && (
								<div data-lenis-prevent>
									<Swiper
										modules={[Navigation]}
										slidesPerView={1}
										spaceBetween={15}
										grabCursor={true}
										speed={500}
										loop={true}
										navigation={{
											prevEl: "#customPrev",
											nextEl: "#customNext",
										}}
										className={styles.slider}
										ref={sliderRef}
									>
										{customertTestimonialData?.data?.map((item, ind) => (
											<>
												{item?.link ? (
													""
												) : (
													<SwiperSlide className={`${styles.item}`} key={ind}>
														{
															<div className={`${styles.PopupItem}`}>
																<div className={styles.ImgBx}>
																	<div className={`${styles.Details} pt_10`}>
																		<h3
																			className={`${styles.Name} text_xxl f_w_m font_primary color_seashell pb_30`}
																		>
																			{item.title}
																		</h3>
																		<p
																			className={`${styles.Desc} text_md f_w_m font_secondary color_seashell`}
																		>
																			{item.desc ? parse(String(item.desc)) : ""}
																		</p>
																	</div>
																</div>
															</div>
														}
													</SwiperSlide>
												)}
											</>
										))}
									</Swiper>
									<div className={`${styles.arrowSection} f_w_a_j_center`}>
										<button className={`${styles.customPrev}`} id="customPrev">
											<img src={arrow_btn_popup.src} alt="icon" />
										</button>
										<button className={styles.customNext} id="customNext">
											<img src={arrow_btn_popup.src} alt="icon" />
										</button>
									</div>
									<div className={`${styles.frame}`}>
										<img src={frame.src} alt="frame" />
									</div>
								</div>
							)}
						</div>
					</Popup>
				)}
			</main>
			{/* Page Content Ends */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
