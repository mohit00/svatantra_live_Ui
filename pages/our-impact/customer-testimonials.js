/* eslint-disable react/no-unescaped-entities */
// MODULES //
import { useState } from "react";

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/Buttons/Button";
import InnerBanner from "@/components/InnerBanner";
import Breadcrum from "@/components/Breadcrumb";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/CustomerTestimonials.module.scss";

// SERVICES //

// DATA //

/** Data Fetching  */

// IMAGES //
import banner_desktop from "../../public/img/faq/banner_desktop.jpg";
import story_one from "../../public/img/our-impact/stories/story_one.jpg";
import arrow_btn from "../../public/img/arrow_btn.svg";

/** CustomerTestimonials Page */
export default function CustomerTestimonials() {
	const customerTestimonialsData = [
		{
			title: "Literacy is the key to change23!",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
		},
		{
			title: "Literacy is the key to change2!",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
		},
		{
			title: "Literacy is the key to chang3!",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
		},
		{
			title: "Literacy is the key to chang3!",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
		},
	];

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Customer Testimonials"}
				Desc={""}
				Keywords={""}
				OgImg={""}
				Url={"/customer-testimonials"}
			/>
			{/* Header */}
			<Header />

			{/* Page Content Starts */}
			<main className={`${styles.StoriesOfSvatantra_page}`}>
				<Breadcrum link2="Our Impact" link3="Customer Testimonials" />
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={banner_desktop.src}
					bannerTitle="From hopeful dreams to thriving realities"
					bannerDesc="Enabling aspiring entrepreneurs to build lasting success stories across the nation"
				/>
				<section className={`${styles.StoriesOfSvatantra_main} ptb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap}`}>
							<h2 className="text_xxxl color_primary">Customer Testimonial</h2>
						</div>

						<div className={`${styles.content_main_wrap} pt_40`}>
							<div className={`${styles.box_wrap}`}>
								{customerTestimonialsData.map((item, ind) => {
									return (
										<div className={`${styles.box_item}`} key={ind}>
											<img src={item.thumbnail} className="b_r_10" alt="story img" />
											<div className={`${styles.content} pt_20 f_r_aj_between`}>
												<p>{item.title}</p>
												<div>
													{item.link && (
														<a href={item.link}>
															<img src={arrow_btn.src} alt="arrow icon" />
														</a>
													)}
												</div>
											</div>
										</div>
									);
								})}
							</div>
							{/*  */}
						</div>
						<div className={`${styles.BtnBx} f_r_aj_center pt_60`}>
							<Button
								buttonType="secondary"
								condition={"white"}
								link={"#"}
								title={"More Stories"}
							/>
						</div>
					</div>
				</section>
			</main>
			{/* Page Content Ends */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
