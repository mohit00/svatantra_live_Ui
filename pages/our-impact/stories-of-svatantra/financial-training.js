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
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

// STYLES //
import styles from "@/styles/pages/FinancialTraining.module.scss";

// SERVICES //

// DATA //
import { getFinancialTraining } from "@/services/impactService";

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// IMAGES //
import banner_desktop from "../../../public/img/faq/banner_desktop.jpg";
import story_one from "../../../public/img/our-impact/stories/story_one.jpg";
import arrow_btn from "../../../public/img/arrow_btn.svg";
import youtube from "../../../public/img/youtube.svg";

/** getOurLeaderships */
export const getStaticProps = async (context) => {
	const financialTrainingData = await getFinancialTraining();
	return { props: { financialTrainingData }, revalidate: 60 };
};

/** FinancialTraining Page */
export default function FinancialTraining({ financialTrainingData }) {
	const [showItems, setShowItems] = useState(4); // State to manage the number of items to show

	/** handleShowMore function */
	const handleLoadMore = () => {
		setShowItems(showItems + 2); // Increase the number of items to show by 6
	};
	// const financialTrainingData = [
	// 	{
	// 		title: "Literacy is the key to45",
	// 		thumbnail: story_one.src,
	// 		youTubeLink: "https://youtu.be/jS03Gupwdjw?si=uhVbQ1pV7I8lTI8j",
	// 	},
	// 	{
	// 		title: "Literacy is the ",
	// 		thumbnail: story_one.src,
	// 		youTubeLink: "https://youtu.be/jS03Gupwdjw?si=uhVbQ1pV7I8lTI8j",
	// 	},
	// 	{
	// 		title: "Literacy is the key to 1 !",
	// 		thumbnail: story_one.src,
	// 		youTubeLink: "https://youtu.be/jS03Gupwdjw?si=uhVbQ1pV7I8lTI8j",
	// 	},
	// 	{
	// 		title: "Literacy is the key to !",
	// 		thumbnail: story_one.src,
	// 		youTubeLink: "https://youtu.be/jS03Gupwdjw?si=uhVbQ1pV7I8lTI8j",
	// 	},
	// ];
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Financial Training"}
				Desc={""}
				Keywords={""}
				OgImg={""}
				Url={"/financial-training"}
			/>
			{/* Header */}
			<Header />

			{/* Page Content Starts */}
			<main className={`${styles.StoriesOfSvatantra_page}`}>
				<Breadcrum
					link2="Our Impact"
					link3="Stories Of Svatantra"
					link4="Financial Training"
				/>
				<InnerBanner
					desktopImage={banner_desktop.src}
					mobileImage={banner_desktop.src}
					bannerTitle="From hopeful dreams to thriving realities"
					bannerDesc="Enabling aspiring entrepreneurs to build lasting success stories across the nation"
				/>
				<section className={`${styles.StoriesOfSvatantra_main} ptb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap}`}>
							<h2 className="text_xxxl color_primary">Financial Training</h2>
						</div>

						<div className={`${styles.content_main_wrap} pt_40`}>
							<div className={`${styles.box_wrap}`}>
								{financialTrainingData.data.slice(0, showItems).map((item, ind) => {
									return (
										<div className={`${styles.box_item}`} key={ind}>
											<LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
												<div data-src={item.video}>
													<img
														src={StrapiImage(item.thumbnail).url}
														className="b_r_10"
														alt="story img"
													/>
													<div className={`${styles.content} pt_20 f_r_aj_between`}>
														<p className="text_md color_light_black font_secondary opacity_8">
															{item.title}
														</p>
														<div>
															<a>
																<img src={youtube.src} alt="arrow icon" />
															</a>
														</div>
													</div>
												</div>
											</LightGallery>
										</div>
									);
								})}
							</div>

							{/*  */}
						</div>
						{financialTrainingData.data.length > showItems ? (
							<div
								className={`${styles.BtnBx} f_r_aj_center pt_60`}
								onClick={handleLoadMore}
							>
								<Button
									buttonType="secondary"
									condition={"white"}
									link={"#"}
									title={"More Stories"}
									isHref={false}
								/>
							</div>
						) : (
							""
						)}
					</div>
				</section>
			</main>
			{/* Page Content Ends */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
