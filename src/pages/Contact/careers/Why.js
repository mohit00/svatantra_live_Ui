// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// UTILS //

// STYLES //
import styles from "@/styles/sections/pages/careers/Why.module.scss";

// IMAGES //
import arrow_btn from "../../../../public/img/arrow_btn.svg";

// DATA //

/** DummyComponent Component */
export default function WhyComponent() {
	const svatantraPath = [
		{
			title: "People-driven:",
			desc:
				"We are a people-driven organisation where every individual is valued, supported and well-equipped to advance their careers and achieve their goals. ",
		},
		{
			title: "Growth opportunities:",
			desc:
				"We have created an environment that nurtures talents, builds strong leadership and celebrates a culture where every individual has the equal opportunity to grow and reach their full potential.",
		},
		{
			title: "Work-life balance:",
			desc:
				"The Company 'undertakes initiatives relating to workplace inclusion, employee safety and employee well-being, including periodic engagement initiatives for female employees focused on workplace culture, safety and well-being'",
		},
		{
			title: "Supportive team:",
			desc:
				"The Company 'provides one-on-one employee support programmes and counselling assistance through an Employee Assistance Program to enable employees to seek guidance on personal and workplace-related concerns'",
		},
		// {
		// 	title: "Parental support:",
		// 	desc:
		// 		"We offer both maternity and paternity leaves with flexible working arrangements for working mothers, ensuring they have the support needed to excel professionally and personally.",
		// },
		{
			title: "Employee wellbeing:",
			desc:
				"The company offers 24/7 access to the employee assistance programme and consultants for emotional support, mental health awareness workshops, and stress management training.",
		},
		{
			title: "Amazing perks:",
			desc:
				"We always recognise and reward the hard work of our employees through attractive incentives, value awards, appreciation cards and much more. The company offers comprehensive healthcare coverage, menstrual leave for women, fitness programmes, and nutrition education.",
		},
	];
	return (
		<div className={`${styles.SliderMain} pt_40 pb_80`}>
			<div className="container">
				<h2 className="section_title pb_40">
					Why you will love <br className="hidden_sm" /> working with us!
				</h2>
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
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
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
					{svatantraPath.map((item) => (
						<SwiperSlide className={`${styles.item}`} key={item.title}>
							<div className={styles.itemContent}>
								<div className={`${styles.title} text_center`}>
									<h4 className="text_md color_white f_w_m font_primary">
										{item.title}
									</h4>
								</div>
								<div className={`${styles.info} text_center`}>
									<p className="text_xs color_light_black opacity_8">{item.desc}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
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
	);
}
