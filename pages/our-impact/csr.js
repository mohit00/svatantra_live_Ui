/* eslint-disable react/no-unescaped-entities */
// MODULES //
import { useState } from "react";

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AccordianCommon from "@/components/AccordianCommon";
import Button from "@/components/Buttons/Button";

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
import img_one from "../../public/img/our-impact/csr/img_one.jpg";
import img_two from "../../public/img/our-impact/csr/img_two.jpg";
import img_three from "../../public/img/our-impact/csr/img_three.jpg";
import img_four from "../../public/img/our-impact/csr/img_four.jpg";
import img_five from "../../public/img/our-impact/csr/img_five.jpg";
import arrow_btn from "../../public/img/arrow_btn.svg";

/** csr Page */
export default function csr() {
	const svatantraPath = [
		{
			title: "Projects UNLEARN and Jazba",
			desc:
				"Equipping individuals with vocational skills while challenging barriers to gender equality.",
		},
		{
			title: "Education for Tribal Children",
			desc:
				"Bringing classrooms closer to tribal communities, creating pathways to brighter tomorrows.",
		},
		{
			title: "Education for Sex Worker’s Children",
			desc:
				"Enabling the marginalised to integrate into society and open doors of opportunities through education.",
		},
		{
			title: "Projects UNLEARN and Jazba",
			desc:
				"Equipping individuals with vocational skills while challenging barriers to gender equality.",
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
				<section className={`${styles.csr_main} ptb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap} pb_60`}>
							<h1 className="text_xxxl color_primary pb_20">
								The Svatantra path to a <br className="hidden_xs" />
								harmonious future for all
							</h1>
							<p className="text_sm color_light_black opacity_8">
								As a responsible corporate citizen and trusted partner to our clients,
								Svatantra launched several CSR initiatives aimed at enhancing quality of
								life and overall wellbeing. These programs not only reflect our
								commitment to sustainable growth but also pave the way for a healthier,
								greener and a more harmonious environment for all.
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
											<h4 className="text_md color_light_black pb_20">{item.title}</h4>
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
						<div className={`${styles.BtnBx} pt_60`}>
							<Button
								buttonType="secondary"
								condition={"white"}
								link={"#"}
								title={"Download our CSR policy"}
							/>
						</div>
					</div>
				</section>
				<section className={`${styles.driving_wrap} pb_100`}>
					<div className="container">
						<div className={`${styles.title_wrap} pb_60`}>
							<h2 className="text_xxxl color_primary pb_20">
								Driving positive change in communities through outreach activities
							</h2>
							<p className="text_sm color_light_black opacity_8">
								Svatantra has always been at the forefront of building communities and
								creating a lasting impact through various initiatives that support the
								financial and overall wellbeing of the people. Our commitment was
								evident during the global pandemic which affected several lives and
								livelihoods. During those unprecedented times, Svatantra undertook
								several measures to ensure our employees and customers received all the
								support needed for themselves and their families. From financial and
								medical support to maintaining timely connections, we ensured our
								employees and customers, especially rural women, remained in their best
								of health.
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
