// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import Button from "@/components/Buttons/Button";
import Footer2 from "@/components/Footer2";
// SECTIONS //

// PLUGINS //

// SERVICES //
import { getInvestors } from "@/services/Investors";

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/pages/InvestorIndex.module.scss";

// IMAGES //
import story_one from "../../public/img/our-impact/stories/story_one.jpg";
import arrow_btn from "../../public/img/arrow_btn.svg";
import ipo from "../../public/img/ipo.png";

// DATA //
/** Data Fetching getInvestors  */
export async function getServerSideProps() {
	const investorData = await getInvestors();

	return {
		props: { data: investorData.data },
	};
}

/** Investor Index Page */
export default function InvestorIndexPage({ data }) {
	console.log(data, "data");


	// const sortedData = [...data].sort((a, b) => a.id - b.id);
	// const sortedData = [...data].sort(
	// 	(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
	// );
	// console.log(
	// sortedData	
	// );
	const originalData = [...data].sort(
		(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
	);

	const ipoCard = {
		id: "ipo",
		title: "Initial Public Offerings",
		slug: "initial-public-offerings",
		isIPO: true,
	};

	const sortedData = [
		originalData[0], // first existing card
		ipoCard,         // IPO as second card
		...originalData.slice(1),
	];
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Investors"} Desc={""} OgImg={""} Url={"/investors"} />

			{/* Header */}
			<Header />
			<Breadcrum
				// link2="For Investors"
				link5="/investors"
				linkTitle={"Investors"}
			/>
			{/* Page Content starts here */}
			<main className={styles.InvestorIndexPage}>
				<section className="container">
					<h1 className="text_xxxl color_primary pb_10">Investors</h1>

					<p className="text_md ">
						Invest in innovation, growth, and lasting impact.
					</p>

					<div className={`${styles.StoriesOfSvatantra_main} pb_80`}>
						<div className="container">
							<div className={`${styles.content_main_wrap} pt_40`}>
								<div className={`${styles.box_wrap}`}>
									{sortedData?.map((item, ind) => {
										return (
											<div className={`${styles.box_item}`} key={ind}>
												<a href={`/investor-relations/${item.slug}`}>
													<img
														src={item.isIPO ? ipo.src : StrapiImage(item.thumbnail).url}
														className="b_r_10"
														alt="story img"
													/>
													<div className={`${styles.content} pt_20 f_r_aj_between`}>
														<p className="text_md color_light_black font_secondary opacity_8">
															{item.title}
														</p>
														<div>
															<div>
																<img src={arrow_btn.src} alt="arrow icon" />
															</div>
														</div>
													</div>
												</a>
											</div>
										);
									})}
								</div>
								{/*  */}
							</div>
							{/* <div className={`${styles.BtnBx} f_r_aj_center pt_60`}>
								<Button
									buttonType="secondary"
									condition={"white"}
									link={"#"}
									title={"More Stories"}
								/>
							</div> */}
						</div>
					</div>
				</section>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer2 />
		</div>
	);
}
