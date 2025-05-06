// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";
// SECTIONS //

// PLUGINS //

// SERVICES //
import { getCustomerProtections } from "@/services/customer-protections";

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/pages/InvestorIndex.module.scss";

// IMAGES //
import arrow_btn from "../../public/img/arrow_btn.svg";

// DATA //
/** Data Fetching getInvestors  */
export async function getServerSideProps() {
	const customerProtectionsData = await getCustomerProtections();

	return {
		props: { data: customerProtectionsData.data },
	};
}

/** Investor Index Page */
export default function CustomerProtectionPage({ data }) {
	console.log(data, "data");

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Customer Protection"}
				Desc={""}
				OgImg={""}
				Url={"/customer-protection"}
			/>

			{/* Header */}
			<Header />
			<Breadcrum link2="Customer Protection" />
			{/* Page Content starts here */}
			<main className={styles.InvestorIndexPage}>
				<section className="container">
					<h1 className="text_xxxl color_primary pb_10">Customer Protection</h1>

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
												<a href={`/customer-protection/${item.slug}`}>
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
			<Footer2 />
		</div>
	);
}
