// MODULES //
import { useEffect, useState, useRef } from "react";
// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import Popup from "@/components/Popup";
import Button from "@/components/Buttons/Button";
// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import parse from "html-react-parser";
// UTILS //

// STYLES //
import styles from "@/styles/pages/InvestorIndex.module.scss";

// IMAGES //
import story_one from "../../public/img/our-impact/stories/story_one.jpg";
import arrow_btn from "../../public/img/arrow_btn.svg";
import arrow_btn_popup from "../../public/img/arrow_btn_popup.svg";
import frame from "../../public/img/frame.png";

// DATA //
import { getInvestors } from "@/services/Investors";

/** getInvestors */
export const getStaticProps = async (context) => {
	const data = await getInvestors();
	return { props: { data }, revalidate: 60 };
};

/** Investor Index Page */
export default function InvestorIndexPage({ data }) {
	console.log(data, "data");

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
				Title={"Investor Index"}
				Desc={""}
				OgImg={""}
				Url={"/investor-index"}
			/>

			{/* Header */}
			<Header />
			<Breadcrum
				// link2="For Investors"
				link2="Our Impact"
				link3="Stories Of Svatantra"
				link4="Customer Testimonials"
			/>
			{/* Page Content starts here */}
			<main className={styles.InvestorIndexPage}>
				<div className="container">
					<h1 className="text_xxxl color_primary pb_10">Investors</h1>

					<p className="text_md ">
						Invest in innovation,growth, and lasting impact.Join us in shaping the
						future
					</p>

					<section className={`${styles.StoriesOfSvatantra_main} pb_80`}>
						<div className="container">
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
														<a href="">
															<img src={arrow_btn.src} alt="arrow icon" />
														</a>
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
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
