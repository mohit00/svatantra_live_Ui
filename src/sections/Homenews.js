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

// IMAGES //
import box1 from "../../public/img/news/box1.jpg";
import box11 from "../../public/img/news/box11.jpg";
import box2 from "../../public/img/news/box2.jpg";
import box22 from "../../public/img/news/box22.jpg";
// DATA //

/** Homenews Section */
export default function Homenews() {
	const [activeTab, setActiveTab] = useState("media");

	/** */
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<section className={styles.Homenews}>
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
					</div>

					<div className={`${styles.slider}`}>
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
							spaceBetween={60}
							slidesPerView={1.6}
							loop={true}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
								type: "progressbar",
							}}
							observer={true}
							observeParents={true}
							navigation={true}
							breakpoints={{
								640: {
									slidesPerView: 1.5,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 1.5, // Adjusted to show more content for tablets
									spaceBetween: 10,
								},
								1024: {
									slidesPerView: 1, // Adjusted for larger screens to show full slides
									spaceBetween: 40,
								},
							}}
						>
							<SwiperSlide>
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
										Advent, Multiples to invest ₹1,930 crore in Ananya Birla’s Svatantra
										Microfin
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={`${styles.box1}`}>
									<div className={`${styles.imgBox}`}>
										<img src={box2.src} alt="box1" className={`${styles.mainImg}`} />
										<img src={box22.src} alt="logo" className={`${styles.logo}`} />
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
										PE cos Advent, Multiples to invest Rs 1,930 crore in Ananya Birla’s
									</p>
								</div>
							</SwiperSlide>
						</Swiper>

						{/*  */}
					</div>
				</div>
			</div>
		</section>
	);
}
