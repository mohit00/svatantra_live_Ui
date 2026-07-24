/* eslint-disable react/no-unescaped-entities */
// MODULES //
import { useState } from "react";

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/Buttons/Button";
import Breadcrum from "@/components/Breadcrumb";
import InnerBanner from "@/components/InnerBanner";

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";



// STYLES //
import styles from "@/styles/pages/csr.module.scss";

// SERVICES //

// DATA //

/** Data Fetching  */

// IMAGES //
import banner_desktop from "../../public/img/newImg/csrNew.jpg";
import mobile_banner from "../../public/img/newImg/csrMobile.jpg";
import img_one from "../../public/img/newImg/csrImg1.jpg";
import img_two from "../../public/img/newImg/csrImg2.jpg";
import img_three from "../../public/img/newImg/csrImg3.jpg";
import img_four from "../../public/img/newImg/csrImg4.jpg";
import img_five from "../../public/img/newImg/csrImg5.jpg";
import arrow_btn from "../../public/img/arrow_btn.svg";
import pdf_icon from "../../public/img/pdf_icon.svg";
/** csr Page */
export default function csr() {
	const svatantraPath = [
		{
			title: "Projects unlearn and jazba:",
			desc:
				"Equipping individuals with vocational skills while challenging barriers to gender equality.",
		},
		{
			title: "Quality education for all:",
			desc:
				"Joined hands with Smile Foundation to ensure all children have access to quality education, impacting lives of over 4,400 students.",
		},
		{
			title: "Tech for mental health:",
			desc:
				"Offering vital tools and technologies to improve access to mental health and ensure overall well-being.",
		},
		{
			title: "School initiative for mental health advocacy:",
			desc:
				" An initiative with SIMHA that promotes mental wellbeing among the young in the education system across India.",
		},
		{
			title: "Counselling with empathy:",
			desc:
				"Collaborated with Mpower for quality mental health services, transforming lives of 200+ individuals on a monthly basis.",
		},
		{
			title: "Fulfil a wish:",
			desc:
				"An initiative that takes necessary measures for reducing inequalities faced by socially and economically backward groups.",
		},
		{
			title: "Educating tribal children:",
			desc:
				"Bringing classrooms closer to tribal communities, creating pathways to brighter tomorrows.",
		},
		{
			title: "Tree plantation drives:",
			desc:
				"Planting seeds of sustainability today for a greener, healthier planet tomorrow.",
		},
		{
			title: "Opportunities for sex worker’s children:",
			desc:
				"Enabling the marginalised to integrate into society and open doors of opportunities through education.",
		},
		{
			title: "Animal welfare:",
			desc:
				"Partnered with ‘World For All’ NGO to ensure holistic care for stray animals, providing 9600+ meals and medical care for 480 animals.",
		},
		{
			title: "Project blank slate:",
			desc:
				"An initiative of the Ananya Birla Foundation that explores the root causes of mental health, with research identifying and addressing these concerns.",
		},
	];

	const drivingOne = [
		[
			{ thumbnail: img_one.src },
			{ thumbnail: img_two.src },
			{ thumbnail: img_three.src },
			{ thumbnail: img_four.src },
			{ thumbnail: img_five.src },
		],
	];
	console.log(drivingOne);

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Stories Of Svatantra"}
				Desc={""}
				Keywords={""}
				OgImg={""}
				Url={"/stories-of-svatantra"}
			/>
			{/* Header */}
			<Header />

			{/* Page Content Starts */}
			<main className={`${styles.csr_page}`}>
				<Breadcrum
					link5="/our-impact/csr"
					linkTitle={"Our Impact"}
					linknest2={"our-impact/csr"}
					linknestTitle2={"CSR"}
				/>
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={mobile_banner.src}
					bannerTitle="We pledge to power sustainable entrepreneurs"
					bannerDesc="Accessible financial solutions that push individuals to break barriers and drive innovation"
				/>
				<section className={`${styles.csr_main} ptb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap} pb_60`}>
							{/* <h1 className="text_xxxl color_primary pb_20">
								The Svatantra path to a <br className="hidden_xs" />
								harmonious future for all
							</h1> */}
							<p className="text_sm color_light_black opacity_8">
								As a responsible corporate citizen and trusted partner to our clients,
								Svatantra launched several CSR initiatives aimed at enhancing quality of
								life and overall wellbeing. These programs not only reflect our
								commitment to sustainable growth but also pave the way for an inclusive,
								equitable and a more harmonious environment for all.
							</p>
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
								{svatantraPath.map((item, ind) => (
									<SwiperSlide className={`${styles.item}`} key={ind}>
										<div className={styles.itemContent}>
											<h4 className="text_md color_light_black pb_20 font_primary">
												{item.title}
											</h4>
											<p className="text_xs color_light_black opacity_8">{item.desc}</p>
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
						<div className={`${styles.btnBox} pt_60`}>
							{/* <Button
								buttonType="secondary"
								condition={"white"}
								link={
									"/img/Corporate-Social-Responsibility-Policy.pdf"
								}
								target={"_blank"}
								title={"Download our CSR policy"}
								isHref={true}
							/> */}

							<a
								href="/img/corporate-social-responsibility-policy-new.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.csr_download}
							>
								<span>
									<img src={pdf_icon.src} alt="icon" />
								</span>
								Download our CSR policy
							</a>


						</div>
					</div>
				</section>
				<section className={`${styles.driving_wrap} pb_100`}>
					<div className="container">
						<div className={`${styles.title_wrap} pb_60`}>
							<h2 className="text_xxxl color_primary pb_20">
								Driving positive change in communities through outreach activities:{" "}
							</h2>
							<p className="text_sm color_light_black opacity_8">
								Svatantra has always been at the forefront of building communities and
								creating a lasting impact through various initiatives that support the
								financial and overall wellbeing of the people.
							</p>
						</div>
						{drivingOne.map((row, rowIndex) => (
							<div className={`${styles.driving_img_box} f_w_j`} key={rowIndex}>
								{row.map((item1, colIndex) => (
									<div className={`${styles.item_img}`} key={colIndex}>
										<img src={item1.thumbnail} className="b_r_10" alt="img" />
									</div>
								))}
							</div>
						))}
					</div>
				</section>
			</main>
			{/* Page Content Ends */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
