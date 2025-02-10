/* eslint-disable react/no-unescaped-entities */
// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import Breadcrum from "@/components/Breadcrumb";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/events.module.scss";

// SERVICES //

// DATA //

/** Data Fetching  */

// IMAGES //
import event_one from "../../public/img/media/events/event_one.jpg";
import event_two from "../../public/img/media/events/event_two.jpg";
import arrow_btn from "../../public/img/arrow_btn.svg";

/** events Page */
export default function events() {
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
	];

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Events"}
				Desc={""}
				Keywords={""}
				OgImg={""}
				Url={"/events"}
			/>
			{/* Header */}
			<Header />

			{/* Page Content Starts */}
			<main className={`${styles.events_page}`}>
				<Breadcrum link2="Media" link3="Events" />

				<section className={`${styles.events_main} pb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap}`}>
							<h2 className="text_xxxl color_primary pb_20">
								Towards a meaningful future
							</h2>
							<p className="text_md color_light_black font_secondary opacity_8">
								Discover how we amplify the potential of entrepreneurs and leave an
								impact.
							</p>
						</div>

						<div className={`${styles.content_main_wrap} pt_40`}>
							<div className={`${styles.box_wrap}`}>
								{eventsData.map((item, ind) => {
									return (
										<div className={`${styles.box_item}`} key={ind}>
											<img src={item.thumbnail} className="b_r_10" alt="story img" />
											<div className={`${styles.content} pt_20 f_r_aj_between`}>
												<p className="text_md color_light_black font_secondary opacity_8">
													{item.title}
												</p>
												<div>
													<a href={item.link}>
														<img src={arrow_btn.src} alt="arrow icon" />
													</a>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							{/*  */}
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
