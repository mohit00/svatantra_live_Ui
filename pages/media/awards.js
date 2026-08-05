/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
// MODULES //
import { useState } from "react";

// COMPONENTS //
import Breadcrum from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/pages/Awards.module.scss";

// IMAGES //
import fintech from "../../public/img/media/awards/fintech.png";
import national from "../../public/img/media/awards/national.png";
import best_workplace from "../../public/img/media/awards/best_workplace.png";
import inclusive from "../../public/img/media/awards/inclusive.png";
import innovation from "../../public/img/media/awards/innovation.png";
import btnArrow from "../../public/img/home/BtnArrow.svg";
import testLogo from "../../public/testLogo.svg";
// DATA //

// SERVICES //
import { getAwards } from "@/services/awardsService";

export const getStaticProps = async () => {
	const AwardsList = await getAwards();
	return { props: { AwardsList }, revalidate: 60 };
};

/** Awards Page */
export default function AwardsPage({ AwardsList }) {
	// const awardsData = [
	// 	{
	// 		title:
	// 			"Bharat NBFC & Fintech Summit and Awards 2024 - Most Influential Microfinance Company of the Year 2024",
	// 		thumbnail: fintech.src,
	// 	},
	// 	{
	// 		title:
	// 			"National Awards for Excellence in BFSI - Microfinance Company of the Year 2024",
	// 		thumbnail: national.src,
	// 	},
	// 	{ title: "IGPTW Certified 2020 and 2022", thumbnail: best_workplace.src },
	// 	{
	// 		title:
	// 			"INCLUSIVE FINANCE INDIA AWARDS 2021 - Svatantra Microfin, Microfinance Organisation of the year 2021.",
	// 		thumbnail: inclusive.src,
	// 	},
	// 	{
	// 		title:
	// 			"Awarded for innovative indigenous App “SAATHI” by The Economic Times BFSI Innovation Tribe Summit & Awards 2020",
	// 		thumbnail: innovation.src,
	// 	},
	// 	{
	// 		title:
	// 			"Bharat NBFC & Fintech Summit and Awards 2024 - Most Influential Microfinance Company of the Year 2024",
	// 		thumbnail: fintech.src,
	// 	},
	// 	{
	// 		title:
	// 			"National Awards for Excellence in BFSI - Microfinance Company of the Year 2024",
	// 		thumbnail: national.src,
	// 	},
	// 	{ title: "IGPTW Certified 2020 and 2022", thumbnail: best_workplace.src },
	// 	{
	// 		title:
	// 			"INCLUSIVE FINANCE INDIA AWARDS 2021 - Svatantra Microfin, Microfinance Organisation of the year 2021.",
	// 		thumbnail: inclusive.src,
	// 	},
	// 	{
	// 		title:
	// 			"Awarded for innovative indigenous App “SAATHI” by The Economic Times BFSI Innovation Tribe Summit & Awards 2020",
	// 		thumbnail: innovation.src,
	// 	},
	// 	{
	// 		title:
	// 			"INCLUSIVE FINANCE INDIA AWARDS 2021 - Svatantra Microfin, Microfinance Organisation of the year 2021.",
	// 		thumbnail: inclusive.src,
	// 	},
	// 	{
	// 		title:
	// 			"Awarded for innovative indigenous App “SAATHI” by The Economic Times BFSI Innovation Tribe Summit & Awards 2020",
	// 		thumbnail: innovation.src,
	// 	},
	// 	{
	// 		title:
	// 			"INCLUSIVE FINANCE INDIA AWARDS 2021 - Svatantra Microfin, Microfinance Organisation of the year 2021.",
	// 		thumbnail: inclusive.src,
	// 	},
	// 	{
	// 		title:
	// 			"Awarded for innovative indigenous App “SAATHI” by The Economic Times BFSI Innovation Tribe Summit & Awards 2020",
	// 		thumbnail: innovation.src,
	// 	},
	// ];

	// Sort awards by year (latest first) on the frontend only
	const sortedAwards = [...(AwardsList?.data || [])].sort(
		(a, b) =>
			(parseInt(b?.year, 10) || 0) - (parseInt(a?.year, 10) || 0)
	);

	const initialLimit = 6;
	const [visibleAwards, setVisibleAwards] = useState(initialLimit);
	const [isAllDisplayed, setIsAllDisplayed] = useState(
		visibleAwards >= AwardsList.data.length
	);

	/** handleLoadMore */
	const handleLoadMore = () => {
		const newVisibleCount = visibleAwards + 6;

		setVisibleAwards(newVisibleCount);

		if (newVisibleCount >= AwardsList.data.length) {
			setIsAllDisplayed(true);
		}
	};
	console.log(AwardsList, "AwardsList");

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Awards"} Desc={""} OgImg={""} Url={"/awards"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.AwardsPage}>
				{/* <Breadcrum link2="Media" link3="Awards" /> */}
				<Breadcrum
					linknest1={"/media/awards"}
					linknestTitle1={"Media"}
					linknest2={"/media/awards"}
					linknestTitle2={"Awards"}
				/>
				<section className={`${styles.events_main} pb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap}`}>
							<h2 className="text_xxxl color_primary">Awards</h2>
						</div>

						<div className={`${styles.content_main_wrap} pt_50`}>
							<div className={`${styles.box_wrap}`}>
								{sortedAwards.slice(0, visibleAwards).map((item, ind) => (
									<div className={`${styles.box_item}`} key={ind}>
										<div className={`${styles.imgBox}`}>
											{/* <img
												// src={item.thumbnail}
												src={StrapiImage(item?.logo)?.url}
												className="b_r_10"
												alt="story img"
											/> */}
											<img
												// src={item.thumbnail}
												src={StrapiImage(item?.logo)?.url}
												// src={testLogo.src}
												className="b_r_10"
												alt="story img"
											/>
										</div>
										<div className={`${styles.content} pt_20 f_r_aj_between`}>
											<p className="text_reg_20 color_light_black font_secondary">
												{item.title}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className={`${styles.BtnBx} f_r_aj_center pt_30`}>
							{!isAllDisplayed && (
								<div onClick={handleLoadMore}>
									<a className={styles.btn_secondary}>
										<span className={styles.btn_outer_span}>
											<span
												className={`${styles.btn_inner_circle} ${styles.btn_inner_right}`}
											>
												<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
											</span>
											<span
												className={`${styles.btn_inner_text} text_xs color_white f_w_m`}
											>
												{/* {isAllDisplayed ? "Load Less" : "Load More"} */}
												Load More
											</span>
											<span
												className={`${styles.btn_inner_circle} ${styles.btn_inner_left}`}
											>
												<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
											</span>
										</span>
									</a>
								</div>
							)}
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
