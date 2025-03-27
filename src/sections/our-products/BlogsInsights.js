// MODULES //

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// UTILS //

// STYLES //
import styles from "@/styles/sections/our-products/BlogsInsights.module.scss";

// IMAGES //
import arrow_btn from "../../../public/img/arrow_btn.svg";
import blogOne from "../../../public/img/our-products/microfinance/blogOne.jpg";

// DATA //

/** BlogsInsights Component */
export default function BlogsInsights({ data }) {
	const BlogList = [
		{
			thumbnail: blogOne.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Malatis Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			thumbnail: blogOne.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Malatis Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			thumbnail: blogOne.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Malatis Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			thumbnail: blogOne.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Malatis Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
	];

	console.log(data, "blogInsightsDatablogInsightsDatablogInsightsData");

	return (
		<section className={`${styles.BlogsInsights} pb_80`}>
			<div className="container">
				<div className={`${styles.title_wrap} pb_30`}>
					<h2 className="text_xxxl color_primary">Blogs & insights</h2>
				</div>
				<div className={`${styles.SliderMain}`}>
					<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						slidesPerView={1}
						spaceBetween={15}
						grabCursor={true}
						speed={500}
						loop={true}
						navigation={{
							prevEl: "#customPrev",
							nextEl: "#customNext",
						}}
						// autoplay={{
						// 	delay: 3000,
						// 	disableOnInteraction: false,
						// }}
						pagination={{
							el: ".swiper-pagination", // Attach to a pagination container
							type: "progressbar", // Choose 'progressbar' type
							clickable: true, // Makes it interactive
						}}
						breakpoints={{
							767: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							992: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							1200: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
						}}
						className={styles.slider}
					>
						{data.data.map((item, ind) => {
							return (
								<SwiperSlide key={ind}>
									<div className={`${styles.box1}`}>
										<div className={`${styles.imgBox}`}>
											<img
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.thumbnail.url}`}
												alt="img"
												className={`${styles.mainImg}`}
											/>
										</div>

										<div className={`${styles.categoryBox}`}>
											<div className={`${styles.news}`}>
												<p className="text_xxs color_white text_uppercase">
													<p>{item.author.name}</p>
												</p>
											</div>
											<div className={`${styles.date}`}>
												<p>{item.date}</p>
											</div>
										</div>

										<p className="text_reg_20 font_secondary f_w_m pt_20">{item.title}</p>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<div className={`${styles.progressBar} m_t_30 swiper-pagination`}></div>
					<div className={`${styles.arrowSection} f_w_a_j_center`}>
						<button className={`${styles.customPrev}`} id="customPrev">
							<img src={arrow_btn.src} alt="icon" />
						</button>
						<button className={styles.customNext} id="customNext">
							<img src={arrow_btn.src} alt="icon" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
