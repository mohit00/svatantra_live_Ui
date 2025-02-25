// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import InnerBanner from "@/components/InnerBanner";

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// STYLES //
import styles from "@/styles/pages/About.module.scss";
import Breadcrum from "@/components/Breadcrumb";

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// IMAGES //
import Girl1 from "../../public/img/about/girl.jpg";
import Girl2 from "../../public/img/about/girl2.jpg";
import Icon1 from "../../public/img/about/icon_1.png";
import Icon2 from "../../public/img/about/icon_2.png";
import Icon3 from "../../public/img/about/icon_3.png";
import Icon4 from "../../public/img/about/icon_4.png";
import Icon5 from "../../public/img/about/icon_5.png";
import arrow_btn from "../../public/img/arrow_btn.svg";
import RecognisedImg1 from "../../public/img/about/recognisedImg1.jpg";
import DesktopBanner from "../../public/img/about/desktop_banner.jpg";

// DATA //
import { getAwards } from "@/services/awardsService";

/** getOurLeaderships */
export const getStaticProps = async (context) => {
	const awardsData = await getAwards();
	return { props: { awardsData }, revalidate: 60 };
};

/** Contact Page */
export default function AboutPage({ awardsData }) {
	console.log(awardsData.data, " awardsData");

	const svatantraPath = [
		{
			title: "Growth and expansion",
			desc: "To become a publicly listed company in the next two years.",
		},
		{
			title: "Transformative solutions",
			desc: "Offer more tailormade accessible credit solutions.",
		},
		{
			title: "Harnessing technology",
			desc: "We will continue leveraging the power of digital technology.",
		},
		{
			title: "Transformative solutions",
			desc: "Offer more tailormade accessible credit solutions.",
		},
	];
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"About-Us"} Desc={""} OgImg={""} Url={"/about-us"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.AboutPage}>
				<Breadcrum link2="About Us" />
				<InnerBanner
					desktopImage={DesktopBanner.src}
					mobileImage={DesktopBanner.src}
					bannerTitle="Helping you leave your mark on tomorrow"
					bannerDesc="Fueling grassroots ambition with innovation, to power India's journey to global economic leadership."
				/>
				<section className={`${styles.Committed} ptb_80`}>
					<div className="container">
						<h2 className="section_title">
							Committed to fueling your journey <br className="hidden_sm" /> towards
							self-powered growth
						</h2>
						<h4 className="text_lg pt_20 pb_40 opacity_80">
							At Svatantra, we are driven by a singular vision: to create a
							self-powered system of growth. We believe in the transformative power of
							grassroots entrepreneurship and are committed to championing the
							individuals who fuel India’s economic rise.
						</h4>
						<div className={`${styles.committed_section_wrapper}`}>
							<div className={`${styles.committed_section} f_r_aj_between f_w`}>
								<div className={`${styles.committed_img}`}>
									<img src={Girl1.src} className="img-responsive" alt="Girl1" />
								</div>
								<div className={`${styles.committed_info}`}>
									<p className="text_sm opacity_8">
										Our purpose is to cultivate a new generation of entrepreneurs who will
										shape India’s journey into a global economic superpower. Taking every
										step forward, we strive to turn aspirations into accomplishments,
										creating ripples of progress far beyond our own world.
									</p>
								</div>
							</div>
							<div className={`${styles.committed_section} f_r_aj_between f_w`}>
								<div className={`${styles.committed_img}`}>
									<img src={Girl2.src} className="img-responsive" alt="Girl1" />
								</div>
								<div className={`${styles.committed_info}`}>
									<p className="text_sm opacity_8">
										Our purpose is to cultivate a new generation of entrepreneurs who will
										shape India’s journey into a global economic superpower. Taking every
										step forward, we strive to turn aspirations into accomplishments,
										creating ripples of progress far beyond our own world.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.turning} pb_80`}>
					<div className="container">
						<h2 className="section_title">
							Turning aspirations into a <br className="hidden_sm" /> self-reliant
							tomorrow
						</h2>
						<h4 className="text_sm opacity_8 pt_20 pb_40">
							We believe in a future driven by self-reliance and opportunity. Through
							transparency, innovation, and entrepreneurial spirit, we aim to foster an
							ecosystem for financial independence in rural and semi-urban India.{" "}
							<br className="hidden_sm" /> The principles that drive Svatantra&#39;s
							progress:
						</h4>
						<div className={`${styles.turning_section} f_w_j`}>
							<div className={`${styles.turning_box}`}>
								<div className={`${styles.img_box}`}>
									<img src={Icon1.src} className="img-responsive" alt="Icon1" />
								</div>
								<h5 className="text_md">Transparency</h5>
								<p className="text_xs opacity_80">
									Building trust through openness and clear communication at every step
									of the journey.
								</p>
							</div>
							<div className={`${styles.turning_box}`}>
								<div className={`${styles.img_box}`}>
									<img src={Icon2.src} className="img-responsive" alt="Icon1" />
								</div>
								<h5 className="text_md">Integrity</h5>
								<p className="text_xs opacity_80">
									Upholding honesty and strong ethical values in all our practices.
								</p>
							</div>
							<div className={`${styles.turning_box}`}>
								<div className={`${styles.img_box}`}>
									<img src={Icon3.src} className="img-responsive" alt="Icon1" />
								</div>
								<h5 className="text_md">Passion</h5>
								<p className="text_xs opacity_80">
									Driven by a deep commitment to making a lasting impact on the lives we
									touch.
								</p>
							</div>
							<div className={`${styles.turning_box}`}>
								<div className={`${styles.img_box}`}>
									<img src={Icon4.src} className="img-responsive" alt="Icon1" />
								</div>
								<h5 className="text_md">Teamwork</h5>
								<p className="text_xs opacity_80">
									Collaborating effectively with a shared goal of transforming lives and
									communities.
								</p>
							</div>
							<div className={`${styles.turning_box}`}>
								<div className={`${styles.img_box}`}>
									<img src={Icon5.src} className="img-responsive" alt="Icon1" />
								</div>
								<h5 className="text_md">Innovation</h5>
								<p className="text_xs opacity_80">
									Pioneering solutions that drive progress and reshape the financial
									landscape.
								</p>
							</div>
							<div className={`${styles.turning_box}`}>
								<div className={`${styles.img_box}`}>
									<img src={Icon1.src} className="img-responsive" alt="Icon1" />
								</div>
								<h5 className="text_md">Customer Centricity</h5>
								<p className="text_xs opacity_80">
									Placing the needs of our customers at the heart of everything we do.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.accelerating}`}>
					<div className={`${styles.SliderMain} ptb_80`}>
						<div className="container">
							<h2 className="section_title color_white pb_40">
								Accelerating the path to <br className="hidden_sm" /> prosperity and
								growth
							</h2>
							<Swiper
								modules={[Navigation, Pagination, Autoplay]}
								slidesPerView={1.2}
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
												<h4 className="text_md color_white f_w_m">{item.title}</h4>
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
				</section>
				<section className={`${styles.recognised} ptb_80`}>
					<div className="container">
						<h2 className="section_title pb_20">
							Recognised for enabling <br className="hidden_sm" /> positive change
						</h2>
						<p className="text_sm opacity_80">
							Many industry accolades have recognized our commitment to innovation and
							empowerment, <br className="hidden_sm" /> reinforcing our mission to
							empower grassroots entrepreneurs.
						</p>
						<div className={`${styles.talent_section}`}>
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
									{awardsData.data &&
										awardsData.data.map((item, ind) => {
											return (
												<SwiperSlide className={`${styles.item}`} key={ind}>
													<div className={styles.itemContent}>
														<div className={`${styles.item_img} pb_30`}>
															<img
																src={StrapiImage(item.logo).url}
																className="img-responsive"
																alt="Talent1"
															/>
														</div>
														<p>{item.title}</p>
													</div>
												</SwiperSlide>
											);
										})}
									{/* <SwiperSlide className={`${styles.item}`}>
										<div className={styles.itemContent}>
											<div className={`${styles.item_img} pb_30`}>
												<img
													src={RecognisedImg1.src}
													className="img-responsive"
													alt="Talent1"
												/>
											</div>
											<p>
												National Awards for Excellence in BFSI - Microfinance Company of the
												Year 2024
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide className={`${styles.item}`}>
										<div className={styles.itemContent}>
											<div className={`${styles.item_img} pb_30`}>
												<img
													src={RecognisedImg1.src}
													className="img-responsive"
													alt="Talent1"
												/>
											</div>
											<p>GPTW Certified 2020 and 2022</p>
										</div>
									</SwiperSlide>
									<SwiperSlide className={`${styles.item}`}>
										<div className={styles.itemContent}>
											<div className={`${styles.item_img} pb_30`}>
												<img
													src={RecognisedImg1.src}
													className="img-responsive"
													alt="Talent1"
												/>
											</div>
											<p>
												INCLUSIVE FINANCE INDIA AWARDS 2021 - Svatantra Microfin,
												Microfinance Organisation of the year 2021.
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide className={`${styles.item}`}>
										<div className={styles.itemContent}>
											<div className={`${styles.item_img} pb_30`}>
												<img
													src={RecognisedImg1.src}
													className="img-responsive"
													alt="Talent1"
												/>
											</div>
											<p>
												National Awards for Excellence in BFSI - Microfinance Company of the
												Year 2024
											</p>
										</div>
									</SwiperSlide> */}
								</Swiper>
								<div
									className={`${styles.progressBar} m_t_30 swiper-pagination2`}
								></div>
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
				</section>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
