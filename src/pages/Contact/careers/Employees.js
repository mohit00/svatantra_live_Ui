// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Grid, Navigation, Autoplay } from "swiper/modules";

// UTILS //

// STYLES //
import styles from "@/styles/sections/pages/careers/Employees.module.scss";

// IMAGES //
import arrow_btn from "../../../../public/img/arrow_btn.svg";
import Employees from "../../../../public/img/careers/employees1.jpg";

// DATA //

/** DummyComponent Component */
export default function EmployeesComponent() {
	return (
		<div className={`${styles.Employees} pt_40 pb_80`}>
			<div className="container">
				<h2 className="section_title pb_40">
					Hear it from our employees… <br className="hidden_sm" /> in their own
					words!
				</h2>
			</div>
			<div className={`${styles.slider_section}`}>
				<Swiper
					modules={[Pagination, Navigation, Grid, Autoplay]}
					// pagination={{ clickable: true }}
					spaceBetween={27}
					loop={true}
					// modules={[Navigation, Pagination, Autoplay]}
					// slidesPerView={1}
					// spaceBetween={15}
					grabCursor={true}
					speed={500}
					// loop={true}
					navigation={{
						prevEl: "#customPrev",
						nextEl: "#customNext",
					}}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{
						el: ".swiper-pagination1", // Attach to a pagination container
						type: "progressbar", // Choose 'progressbar' type
						clickable: true, // Makes it interactive
					}}
					breakpoints={{
						1367: {
							slidesPerView: 1.5,
						},
						1201: {
							slidesPerView: 1.5,
						},
						993: {
							slidesPerView: 2.9,
						},
						768: {
							slidesPerView: 1.9,
						},
						0: {
							spaceBetween: 12,
							slidesPerView: 1.2,
						},
					}}
					className={styles.slider}
				>
					<SwiperSlide className={`${styles.item}`}>
						<div className={`${styles.itemContent} f_r_aj_between f_w`}>
							<div className={`${styles.item_img}`}>
								<img src={Employees.src} className="img-responsive" alt="Employees" />
							</div>
							<div className={`${styles.item_info}`}>
								<h4 className="text_md">Vineet Chattree</h4>
								<h6 className="text_xs opacity_80 pb_20">
									Managing Director, Svatantra Microfin Pvt. Ltd
								</h6>
								<p className="text_sm opacity_80">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className={`${styles.item}`}>
						<div className={`${styles.itemContent} f_r_aj_between f_w`}>
							<div className={`${styles.item_img}`}>
								<img src={Employees.src} className="img-responsive" alt="Employees" />
							</div>
							<div className={`${styles.item_info}`}>
								<h4 className="text_md">Vineet Chattree</h4>
								<h6 className="text_xs opacity_80 pb_20">
									Managing Director, Svatantra Microfin Pvt. Ltd
								</h6>
								<p className="text_sm opacity_80">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className={`${styles.item}`}>
						<div className={`${styles.itemContent} f_r_aj_between f_w`}>
							<div className={`${styles.item_img}`}>
								<img src={Employees.src} className="img-responsive" alt="Employees" />
							</div>
							<div className={`${styles.item_info}`}>
								<h4 className="text_md">Vineet Chattree</h4>
								<h6 className="text_xs opacity_80 pb_20">
									Managing Director, Svatantra Microfin Pvt. Ltd
								</h6>
								<p className="text_sm opacity_80">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className={`${styles.item}`}>
						<div className={`${styles.itemContent} f_r_aj_between f_w`}>
							<div className={`${styles.item_img}`}>
								<img src={Employees.src} className="img-responsive" alt="Employees" />
							</div>
							<div className={`${styles.item_info}`}>
								<h4 className="text_md">Vineet Chattree</h4>
								<h6 className="text_xs opacity_80 pb_20">
									Managing Director, Svatantra Microfin Pvt. Ltd
								</h6>
								<p className="text_sm opacity_80">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="container">
				<div className={`${styles.progressBar} m_t_30 swiper-pagination1`}></div>
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
	);
}
