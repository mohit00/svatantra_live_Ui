// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import Button from "@/components/Buttons/Button";
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

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Investor Index"}
				Desc={""}
				OgImg={""}
				Url={"/investor-index"}
			/>

			{/* Header */}
			<Header />
			<Breadcrum
				// link2="For Investors"
				link2="Our Impact"
				link3="Stories Of Svatantra"
				link4="Customer Testimonials"
			/>
			{/* Page Content starts here */}
			<main className={styles.InvestorIndexPage}>
				<section className="container">
					<h1 className="text_xxxl color_primary pb_10">Investors</h1>

					<p className="text_md ">
						Invest in innovation,growth, and lasting impact.Join us in shaping the
						future
					</p>

					<div className={`${styles.StoriesOfSvatantra_main} pb_80`}>
						<div className="container">
							<div className={`${styles.content_main_wrap} pt_40`}>
								<div className={`${styles.box_wrap}`}>
									{data?.map((item, ind) => {
										return (
											<div className={`${styles.box_item}`} key={ind}>
												<a href={`/investors/${item.slug}`}>
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
			<Footer />
		</div>
	);
}
