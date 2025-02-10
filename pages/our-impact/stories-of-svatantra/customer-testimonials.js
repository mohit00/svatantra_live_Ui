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

// STYLES //
import styles from "@/styles/pages/CustomerTestimonials.module.scss";

// SERVICES //

// DATA //

/** Data Fetching  */

// IMAGES //
import banner_desktop from "../../../public/img/faq/banner_desktop.jpg";
import story_one from "../../../public/img/our-impact/stories/story_one.jpg";
import arrow_btn from "../../../public/img/arrow_btn.svg";
import arrow_btn_popup from "../../../public/img/arrow_btn_popup.svg";
import frame from "../../../public/img/frame.png";

/** CustomerTestimonials Page */
export default function CustomerTestimonials() {
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
			link: "https://www.google.com/",
		},
		{
			title: "Literacy is the key to change2!",
			desc:
				"This is Sangeeta Dhone, our client from Maharashtra, India. A small loan from Svatantra helped her procure goods for her store and in turn, generate a decent profit. The income generated from the store helped Sangeeta in sending her daughter to school and give her the education she deserves!",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
		},
		{
			title: "Literacy is the key to chang3!",
			desc:
				"This is Sangeeta Dhone, our client from Maharashtra, India. A small loan from Svatantra helped her procure goods for her store and in turn, generate a decent profit. The income generated from the store helped Sangeeta in sending her daughter to school and give her the education she deserves!",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
		},
		{
			title: "Literacy is the key to chang3!",
			desc:
				"This is Sangeeta Dhone, our client from Maharashtra, India. A small loan from Svatantra helped her procure goods for her store and in turn, generate a decent profit. The income generated from the store helped Sangeeta in sending her daughter to school and give her the education she deserves!",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
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
					link2="Our Impact"
					link3="Stories Of Svatantra"
					link4="Customer Testimonials"
				/>
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={banner_desktop.src}
					bannerTitle="From hopeful dreams to thriving realities"
					bannerDesc="Enabling aspiring entrepreneurs to build lasting success stories across the nation"
				/>
				<section className={`${styles.StoriesOfSvatantra_main} ptb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap}`}>
							<h2 className="text_xxxl color_primary">Customer Testimonial</h2>
						</div>

						<div className={`${styles.content_main_wrap} pt_40`}>
							<div className={`${styles.box_wrap}`}>
								{customerTestimonialsData.map((item, ind) => {
									return (
										<div className={`${styles.box_item}`} key={ind}>
											<img src={item.thumbnail} className="b_r_10" alt="story img" />
											<div className={`${styles.content} pt_20 f_r_aj_between`}>
												<p className="text_md color_light_black font_secondary opacity_8">
													{item.title}
												</p>
												<div onClick={(e) => handleSlideClick1(e, ind)} data-slide={ind}>
													{item.link && (
														<a href={item.link}>
															<img src={arrow_btn.src} alt="arrow icon" />
														</a>
													)}
												</div>
											</div>
										</div>
									);
								})}
							</div>
							{/*  */}
						</div>
						<div className={`${styles.BtnBx} f_r_aj_center pt_60`}>
							<Button
								buttonType="secondary"
								condition={"white"}
								link={"#"}
								title={"More Stories"}
							/>
						</div>
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
										{customerTestimonialsData.map((item, ind) => (
											<SwiperSlide className={`${styles.item}`} key={ind}>
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
																{parse(item.desc)}
															</p>
														</div>
													</div>
												</div>
											</SwiperSlide>
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
