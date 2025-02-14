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
import styles from "@/styles/sections/pages/careers/Talent.module.scss";

// IMAGES //
import arrow_btn from "../../../../public/img/arrow_btn.svg";
import Talent1 from "../../../../public/img/careers/talent1.jpg";

// DATA //

/** DummyComponent Component */
export default function TalentComponent() {
	return (
		<div className={`${styles.talent} pt_40 pb_80`}>
			<div className="container">
				<h2 className="section_title pb_20">Svatantra’s got talent!</h2>
				<div className={`${styles.talent_section}`}>
					<div className={`${styles.switchBox_wrapper}`}>
						<div className={`${styles.switchBox}`}>
							<div className={`${styles.tabNav} `}>
								<p className="text_reg f_w_m">Paintings</p>
							</div>
							<div className={`${styles.tabNav} ${styles.active}`}>
								<p className="text_reg f_w_m">Handicraft</p>
							</div>
							<div className={`${styles.tabNav} `}>
								<p className="text_reg f_w_m">Poems</p>
							</div>
							<div className={`${styles.tabNav} `}>
								<p className="text_reg f_w_m">Videos</p>
							</div>
						</div>
					</div>
					<div className="pt_40">
						<Swiper
							modules={[Navigation, Pagination, Autoplay]}
							// slidesPerView={1}
							// spaceBetween={15}
							grabCursor={true}
							speed={500}
							loop={true}
							navigation={{
								prevEl: "#customPrev",
								nextEl: "#customNext",
							}}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							pagination={{
								el: ".swiper-pagination2", // Attach to a pagination container
								type: "progressbar", // Choose 'progressbar' type
								clickable: true, // Makes it interactive
							}}
							breakpoints={{
								0: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
								767: {
									slidesPerView: 2.3,
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
							<SwiperSlide className={`${styles.item}`}>
								<div className={styles.itemContent}>
									<div className={`${styles.item_img} pb_30`}>
										<img src={Talent1.src} className="img-responsive" alt="Talent1" />
									</div>
									<h4 className="text_md">Shital Kalambe</h4>
									<h6 className="text_xs opacity_80">Mumbai</h6>
								</div>
							</SwiperSlide>
							<SwiperSlide className={`${styles.item}`}>
								<div className={styles.itemContent}>
									<div className={`${styles.item_img} pb_30`}>
										<img src={Talent1.src} className="img-responsive" alt="Talent1" />
									</div>
									<h4 className="text_md">Shital Kalambe</h4>
									<h6 className="text_xs opacity_80">Mumbai</h6>
								</div>
							</SwiperSlide>
							<SwiperSlide className={`${styles.item}`}>
								<div className={styles.itemContent}>
									<div className={`${styles.item_img} pb_30`}>
										<img src={Talent1.src} className="img-responsive" alt="Talent1" />
									</div>
									<h4 className="text_md">Shital Kalambe</h4>
									<h6 className="text_xs opacity_80">Mumbai</h6>
								</div>
							</SwiperSlide>
							<SwiperSlide className={`${styles.item}`}>
								<div className={styles.itemContent}>
									<div className={`${styles.item_img} pb_30`}>
										<img src={Talent1.src} className="img-responsive" alt="Talent1" />
									</div>
									<h4 className="text_md">Shital Kalambe</h4>
									<h6 className="text_xs opacity_80">Mumbai</h6>
								</div>
							</SwiperSlide>
						</Swiper>
						<div className={`${styles.progressBar} m_t_30 swiper-pagination2`}></div>
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
			</div>
			<div className={`${styles.btn_section}  f_w_a_j_center`}>
				<div className={`${styles.BtnBx}`}>
					<Button
						buttonType="four"
						condition={"white"}
						title={"Job Disclaimer and Caution Notice"}
					/>
				</div>
				<div className={`${styles.BtnBx}`}>
					<Button
						buttonType="four"
						condition={"white"}
						title={"Employee Code of Conduct"}
					/>
				</div>
			</div>
		</div>
	);
}
