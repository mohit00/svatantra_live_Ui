// MODULES //
import { useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import ScrollOut from "scroll-out";
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

// STYLES //
import styles from "@/styles/sections/StoriesSuccess.module.scss";

// IMAGES //
import SliderImg1 from "../../public/img/home/SliderImg.png";
import SliderLogo from "../../public/img/home/SliderLogo.png";
import Qutoes from "../../public/img/home/Qutoes.svg";
import NextArrow from "../../public/img/home/NextArrow.svg";
import PrevArrow from "../../public/img/home/PrevArrow.svg";
import she from "../../public/img/she.jpg";
import msme from "../../public/img/MSME.jpg";
import logo from "../../public/img/logo.jpg";
// DATA //

/** StoriesSuccess Section */
export default function StoriesSuccess() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	// var settings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 2000,
	// 	autoplaySpeed: 5000,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	pauseOnHover: false,
	// 	autoplay: true,
	// };
	return (
		<section className={styles.StoriesSuccess} name="Media">
			<div className="container">
				<div className={`${styles.StoriesFlex}`}>
					<div className={`${styles.StoriesBx}`}>
						<h2 className="text_xxxl color_primary pb_20" data-scroll>
							Stories of success
						</h2>
						<div className={`${styles.StoriesSlider}`} data-scroll>
							<Swiper
								modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
								spaceBetween={50}
								slidesPerView={1}
								loop={true}
								autoplay={{
									delay: 4000,
									disableOnInteraction: false,
								}}
								navigation={{
									prevEl: "#customPrev",
									nextEl: "#customNext",
								}}
							>
								<SwiperSlide>
									<div className={`${styles.SliderItem} color_white`}>
										<img src={Qutoes.src} alt="Quote Image" />
										<p className={`${styles.quote} text_sm text_500`}>
											I took a loan from Svatantra Microfin to support my readymade
											garments venture and the credit I received has helped my small
											business grow and scale sustainably.
										</p>
										<p className={`${styles.Name}`}>- Animol, Ambalapuzha, Kerala</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={`${styles.SliderItem} color_white`}>
										<img src={Qutoes.src} alt="Quote Image" />
										<p className={`${styles.quote} text_sm text_500`}>
											I have never missed a single EMI of my Svatantra loan and have been
											actively utilising the consumer facing app to pay by instalments.
										</p>
										<p className={`${styles.Name}`}>
											- Sakshee Sandeep Kale, Ambernath, Maharashtra
										</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={`${styles.SliderItem} color_white`}>
										<img src={Qutoes.src} alt="Quote Image" />
										<p className={`${styles.quote} text_sm text_500`}>
											It all started with a group loan to set up my kirana shop, and now I
											also own a saree shop.
										</p>
										<p className={`${styles.Name}`}>
											- Rekha Kailash Yamagavali, Amravati, Maharashtra
										</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={`${styles.SliderItem} color_white`}>
										<img src={Qutoes.src} alt="Quote Image" />
										<p className={`${styles.quote} text_sm text_500`}>
											I took a loan from Svatantra Microfin to restart my late husband’s
											transport business. Life was no doubt challenging but with hard work,
											we were able to repay the debts and start afresh.
										</p>
										<p className={`${styles.Name}`}>
											- Nanda Maruti Kokhale, Vadgaon, Pune, Maharashtra
										</p>
									</div>
								</SwiperSlide>
							</Swiper>
							<div className={`${styles.arrowSection} f_w_a_j_center`}>
								<button className={`${styles.customPrev}`} id="customPrev">
									<img src={PrevArrow.src} alt="" />
								</button>
								<button className={styles.customNext} id="customNext">
									<img src={NextArrow.src} alt="" />
								</button>
							</div>
						</div>
					</div>
					<div className={`${styles.FollowBx}`} data-scroll>
						<h2 className="text_xxxl color_primary pb_20">Follow us</h2>
						<div className={`${styles.FollowSlider}`}>
							<Swiper
								modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
								spaceBetween={50}
								slidesPerView={1}
								pagination={{ clickable: true }}
								autoplay={{
									delay: 1000,
									disableOnInteraction: false,
								}}
								loop={true}
								breakpoints={{
									767: {
										slidesPerView: 2, // Display 2 slides at once for widths >= 767px
										spaceBetween: 30, // Adjust spacing as needed
									},
									992: {
										slidesPerView: 1, // Return to 1 slide for widths < 992px
									},
								}}
							>
								<SwiperSlide className={styles.SwiperSlide}>
									<a href="https://www.instagram.com/wearesvatantra/p/DDhNAqPivVM/?img_index=1">
										<div className={styles.SliderItem}>
											<div className={`${styles.SliderImgBx}`}>
												<img src={she.src} alt="" />
											</div>
											<div className={`${styles.SliderContent}`}>
												<div className={`${styles.SliderTopFlex}`}>
													<img src={SliderLogo.src} alt="" />
													<p className="text_sm text_700">Svatantra</p>
												</div>
												<p className={styles.desc}>
													She breaks gender stereotypes for breakfast. We’re talking about
													Bindhu Jeevan, one of Svatantra’s customers who made sure her
													family had a support system even during the pandemic.
												</p>
											</div>
										</div>
									</a>
								</SwiperSlide>
								<SwiperSlide className={styles.SwiperSlide}>
									<a href="https://www.instagram.com/wearesvatantra/p/DDrixMpih7g/?img_index=1">
										<div className={styles.SliderItem}>
											<div className={`${styles.SliderImgBx}`}>
												<img src={msme.src} alt="" />
											</div>
											<div className={`${styles.SliderContent}`}>
												<div className={`${styles.SliderTopFlex}`}>
													<img src={SliderLogo.src} alt="" />
													<p className="text_sm text_700">Svatantra</p>
												</div>
												<p className={styles.desc}>
													She breaks gender stereotypes for breakfast. We’re talking about
													Bindhu Jeevan, one of Svatantra’s customers who made sure her
													family had a support system even during the pandemic.
												</p>
											</div>
										</div>
									</a>
								</SwiperSlide>
								<SwiperSlide className={styles.SwiperSlide}>
									<a href="https://www.instagram.com/wearesvatantra/reel/DDRKPVhzYOA/">
										<div className={styles.SliderItem}>
											<div className={`${styles.SliderImgBx}`}>
												<img src={logo.src} alt="" />
											</div>
											<div className={`${styles.SliderContent}`}>
												<div className={`${styles.SliderTopFlex}`}>
													<img src={SliderLogo.src} alt="" />
													<p className="text_sm text_700">Svatantra</p>
												</div>
												<p className={styles.desc}>
													She breaks gender stereotypes for breakfast. We’re talking about
													Bindhu Jeevan, one of Svatantra’s customers who made sure her
													family had a support system even during the pandemic.
												</p>
											</div>
										</div>
									</a>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
