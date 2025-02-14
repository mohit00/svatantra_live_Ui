// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrumb from "@/components/Breadcrumb";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/MediaMention.module.scss";

// IMAGES //
import advent from "../../public/img/advent.png";

// DATA //

/** Media Mention Page */
export default function MediaMentionPage() {
	const BlogList = [
		{
			image: advent.src,
			cardtype: "News",
			date: "14 June 2024",
			title: "Malati's Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "News",
			date: "14 June 2024",
			title:
				"Small Grocery Stores and Shops:The Heart of Rural India's Economic and Social Fabric",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "News",
			date: "14 June 2024",
			title: "Role of rural women in Indian agricultural businesses",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "News",
			date: "14 June 2024",
			title: "Malati's Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "News",
			date: "14 June 2024",
			title:
				"Small Grocery Stores and Shops:The Heart of Rural India's Economic and Social Fabric",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "News",
			date: "14 June 2024",
			title: "Role of rural women in Indian agricultural businesses",
			link: "/blogs-inside",
		},
	];
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Media Mention"}
				Desc={""}
				OgImg={""}
				Url={"/media-mention"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.MediaMentionPage}>
				<Breadcrumb link5={"media-mention"} linkTitle={"Media Mention"} />
				<div className="container">
					<section className={`${styles.MediaListingMain} pb_80`}>
						<div className={`${styles.Head} pb_50`}>
							<h2 className="section_title pb_10">
								A reflection of our growing impact
							</h2>
							<p className="text_md color_light_black opacity_80">
								Turning the spotlight on real stories of change, captured by the media.
							</p>
						</div>
						<div className={`${styles.GridBox}`}>
							{BlogList.map((item, ind) => {
								return (
									<div className={`${styles.slider}`} key={ind}>
										<div className={`${styles.box1}`}>
											<div className={`${styles.imgBox}`}>
												<img
													src={item.image}
													alt="box1"
													className={`${styles.mainImg} width_100`}
												/>
											</div>

											<div className={`${styles.categoryBox}`}>
												<div className={`${styles.news}`}>
													<p>{item.cardtype}</p>
												</div>
												<div className={`${styles.date}`}>
													<p>{item.date}</p>
												</div>
											</div>

											<p className="text_reg_20 f_w_m">{item.title}</p>
										</div>
									</div>
								);
							})}
						</div>
					</section>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
