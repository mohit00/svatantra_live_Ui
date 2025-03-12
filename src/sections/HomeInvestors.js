// MODULES //

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// UTILS //
import StrapiImage from "@/utils/StrapiImage";
// STYLES //
import styles from "@/styles/sections/HomeInvestors.module.scss";

// IMAGES //
import event_one from "../../public/img/media/events/event_one.jpg";
import event_two from "../../public/img/media/events/event_two.jpg";
import arrow_btn from "../../public/img/arrow_btn.svg";
import rightArrow from "../../public/img/news/rightarrow.svg";
import prevImg from "../../public/img/news/prevImg.svg";
// DATA //

/** HomeInvestors Section */
export default function HomeInvestors({ investorData }) {
	// console.log(investorData, " investorData");

	const eventsData = [
		{
			title: "Udaan Scholarship programme",
			thumbnail: event_one.src,
			link: "https://www.google.com/",
		},
		{
			title: "Avant-garde",
			thumbnail: event_two.src,
			link: "https://www.google.com/",
		},
		{
			title: "Avant-garde",
			thumbnail: event_two.src,
			link: "https://www.google.com/",
		},
		{
			title: "Avant-garde",
			thumbnail: event_two.src,
			link: "https://www.google.com/",
		},
	];
	return (
		<section className={`${styles.HomeInvestors} ptb_80`}>
			<div className="container">
				<div className={`${styles.title_wrap}`}>
					<h2 className="text_xxxl color_primary">Investors</h2>
					<div className={`${styles.BtnBx} pt_10`}>
						<Button
							isHref
							buttonType="secondary"
							link="/investors"
							condition={"white"}
							title={"View More"}
						/>
					</div>
				</div>

				<div className={`${styles.content_main_wrap} pt_40`}>
					<div className={`${styles.box_wrap}`}>
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
							spaceBetween={30}
							slidesPerView={1}
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
								el: ".swiper-pagination1", // Attach to a pagination container
								type: "progressbar", // Choose 'progressbar' type
								clickable: true, // Makes it interactive
							}}
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
							}}
						>
							{investorData.data?.map((item, ind) => {
								return (
									<SwiperSlide key={ind}>
										<div className={`${styles.box_item}`}>
											<img
												src={StrapiImage(item.thumbnail).url}
												className="b_r_10"
												alt="story img"
											/>
											<div className={`${styles.content} pt_20 f_r_aj_between`}>
												<p className="text_md color_light_black font_secondary opacity_8">
													{item.title}
												</p>
												<div>
													<a href={`/investors/${item.slug}`}>
														<img src={arrow_btn.src} alt="arrow icon" />
													</a>
												</div>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
					<div className={`${styles.progressBar} swiper-pagination1`}></div>
					<div className={`${styles.arrowSection} f_w_a_j_center`}>
						<button className={`${styles.customPrev}`} id="customPrev">
							<img src={prevImg.src} alt="icon" />
						</button>
						<button className={styles.customNext} id="customNext">
							<img src={rightArrow.src} alt="icon" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
