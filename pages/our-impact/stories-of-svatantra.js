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

// STYLES //
import styles from "@/styles/pages/StoriesOfSvatantra.module.scss";

// SERVICES //

// DATA //

/** Data Fetching  */

// IMAGES //
import story_one from "../../public/img/our-impact/stories/story_one.jpg";
import arrow_btn from "../../public/img/arrow_btn.svg";
import youtube from "../../public/img/youtube.svg";

/** StoriesOfSvatantra Page */
export default function StoriesOfSvatantra() {
	const [activeTab, setActiveTab] = useState("CustomerTestimonials");

	/** */
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};
	const customerTestimonialsData = [
		{
			title: "Literacy is the key to change23!",
			thumbnail: story_one.src,
			link: "",
			youTubeLink: "text",
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
	const financialTrainingData = [
		{
			title: "Literacy is the key to45",
			thumbnail: story_one.src,
			link: "",
			youTubeLink: "https://www.google.com/",
		},
		{
			title: "Literacy is the ",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
			youTubeLink: "",
		},
		{
			title: "Literacy is the key to 1 !",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
			youTubeLink: "",
		},
		{
			title: "Literacy is the key to !",
			thumbnail: story_one.src,
			link: "https://www.google.com/",
			youTubeLink: "",
		},
	];
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
			<main className={`${styles.StoriesOfSvatantra_page}`}>
				<section className={`${styles.StoriesOfSvatantra_main} ptb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap} pb_60`}>
							<h1 className="text_xxxl color_primary">
								The Svatantra impact on people <br className="hidden_xs" /> and
								communities
							</h1>
						</div>

						<div className={`${styles.switchBox}`}>
							<div
								className={`${styles.tabNav} ${
									activeTab === "CustomerTestimonials" ? styles.active : ""
								}`}
								onClick={() => handleTabClick("CustomerTestimonials")}
							>
								<p className="text_reg f_w_m">Customer Testimonials</p>
							</div>
							<div
								className={`${styles.tabNav} ${
									activeTab === "FinancialTraining" ? styles.active : ""
								}`}
								onClick={() => handleTabClick("FinancialTraining")}
							>
								<p className="text_reg f_w_m">Financial Training</p>
							</div>
						</div>

						<div className={`${styles.content_main_wrap} pt_40`}>
							{activeTab == "CustomerTestimonials" ? (
								<>
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
															{item.youTubeLink && (
																<div>
																	<a href={item.youTubeLink}>
																		<img src={youtube.src} alt="arrow icon" />
																	</a>
																</div>
															)}
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</>
							) : (
								<>
									<div className={`${styles.box_wrap}`}>
										{financialTrainingData.map((item1, ind) => {
											return (
												<div className={`${styles.box_item}`} key={ind}>
													<img src={item1.thumbnail} className="b_r_10" alt="story img" />
													<div className={`${styles.content} pt_20 f_r_aj_between`}>
														<p>{item1.title}</p>
														<div>
															{item1.link && (
																<a href={item1.link}>
																	<img src={arrow_btn.src} alt="arrow icon" />
																</a>
															)}
															{item1.youTubeLink && (
																<div>
																	<a href={item1.youTubeLink}>
																		<img src={youtube.src} alt="arrow icon" />
																	</a>
																</div>
															)}
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</>
							)}

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
