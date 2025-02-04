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
			link: "text",
		},
		{
			title: "Literacy is the key to change2!",
			thumbnail: story_one.src,
			link: "text",
		},
		{
			title: "Literacy is the key to chang3!",
			thumbnail: story_one.src,
			link: "text",
		},
		{
			title: "Literacy is the key to chang3!",
			thumbnail: story_one.src,
			link: "text",
		},
	];
	const financialTrainingData = [
		{
			title: "Literacy is the key to45",
			thumbnail: story_one.src,
			link: "text",
		},
		{
			title: "Literacy is the ",
			thumbnail: story_one.src,
			link: "text",
		},
		{
			title: "Literacy is the key to !",
			thumbnail: story_one.src,
			link: "text",
		},
		{
			title: "Literacy is the key to !",
			thumbnail: story_one.src,
			link: "text",
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
				<section className={`${styles.StoriesOfSvatantra_main} ptb_100`}>
					<div className="container">
						<div className={`${styles.title_wrap} pb_60`}>
							<h1 className="text_xxxl color_primary">
								The Svatantra impact on people <br className="hidden_xs" /> and
								communities
							</h1>
						</div>

						<div className={`${styles.switchBox}`}>
							<div
								className={`${styles.media} ${
									activeTab === "CustomerTestimonials" ? styles.active : ""
								}`}
								onClick={() => handleTabClick("CustomerTestimonials")}
							>
								<p className="text_reg f_w_m">Customer Testimonials</p>
							</div>
							<div
								className={`${styles.award} ${
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
										{customerTestimonialsData.map((item) => (
											<div className={`${styles.box_item}`} key={item.title}>
												<img src={item.thumbnail} className="b_r_10" alt="story img" />
												<div className={`${styles.content} pt_20 d_f`}>
													<p>{item.title}</p>
													{/* <div className={`${styles.BtnBx}`}>
														<Button
															buttonType="secondary"
															condition={"white"}
															link={"#"}
															title={"View More"}
														/>
													</div> */}
												</div>
											</div>
										))}
									</div>
								</>
							) : (
								<>
									<div className={`${styles.box_wrap}`}>
										{financialTrainingData.map((item1) => (
											<div className={`${styles.box_item}`} key={item1.title}>
												<img src={item1.thumbnail} className="b_r_10" alt="story img" />
												<div className={`${styles.content} pt_20 d_f`}>
													<p>{item1.title}</p>
													{/* <div className={`${styles.BtnBx}`}>
													<Button
														buttonType="secondary"
														condition={"white"}
														link={"#"}
														title={"View More"}
													/>
												</div> */}
												</div>
											</div>
										))}
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
