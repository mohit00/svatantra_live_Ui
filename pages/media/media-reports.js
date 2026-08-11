// MODULES //
import { useState } from "react";
// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrumb from "@/components/Breadcrumb";

// SECTIONS //

// PLUGINS //
import Moment from "moment";
// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/pages/MediaMention.module.scss";

// IMAGES //
import advent from "../../public/img/advent.png";
import ladki from "../../public/img/media/ladki.jpg";
import logo from "../../public/img/media/logo.svg";
import MediaPopupContent from "@/components/MediaPopupContent";

// DATA //
import { mediaMention } from "@/services/mediaMentionService";

/** getOurLeaderships */
export const getStaticProps = async (context) => {
	const mediaMentionsData = await mediaMention();
	return { props: { mediaMentionsData }, revalidate: 60 };
};

/** Media Mention Page */
export default function MediaMentionPage({ mediaMentionsData }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedBlog, setSelectedBlog] = useState(null);

	/** */
	const openPopup = (blog) => {
		setSelectedBlog(blog);
		setIsOpen(true);
	};

	/** */
	const closePopup = () => {
		setIsOpen(false);
		setSelectedBlog(null);
	};

	const BlogList = [
		{
			image: ladki.src,
			logo: logo.src,
			cardtype: "News",
			date: "14 June 2024",
			title: "Malati's Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			image: ladki.src,
			logo: logo.src,
			cardtype: "News",
			date: "14 June 2024",
			title:
				"Small Grocery Stores and Shops:The Heart of Rural India's Economic and Social Fabric",
			link: "/blogs-inside",
		},
		{
			image: ladki.src,
			logo: logo.src,
			cardtype: "News",
			date: "14 June 2024",
			title: "Role of rural women in Indian agricultural businesses",
			link: "/blogs-inside",
		},
		{
			image: ladki.src,
			logo: logo.src,
			cardtype: "News",
			date: "14 June 2024",
			title: "Malati's Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			image: ladki.src,
			logo: logo.src,
			cardtype: "News",
			date: "14 June 2024",
			title:
				"Small Grocery Stores and Shops:The Heart of Rural India's Economic and Social Fabric",
			link: "/blogs-inside",
		},
		{
			image: ladki.src,
			logo: logo.src,
			cardtype: "News",
			date: "14 June 2024",
			title: "Role of rural women in Indian agricultural businesses",
			link: "/blogs-inside",
		},
	];
	const sortedData = [...mediaMentionsData.data].sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

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
				{/* <Breadcrumb link5={"media-mention"} linkTitle={"Media Mention"} /> */}
				<Breadcrumb
					linknest1={"/media/media-mention"}
					linknestTitle1={"Media"}
					linknest2={"/media/media-mention"}
					linknestTitle2={"Media Mention"}
				/>
				<div className="container">
					<section className={`${styles.MediaListingMain} pb_80`}>
						<div className={`${styles.Head} pb_50`}>
							<h2 className="section_title pb_10">
								Media Spotlight
							</h2>
							<p className="text_md color_light_black opacity_80">
								Turning the spotlight on real stories of change, captured by the media.
							</p>
						</div>
						<div className={`${styles.GridBox}`}>
							{sortedData.map((item, ind) => {
								// const formattedDate = new Date(item.date).toISOString().split("T")[0];
								const date = Moment(item.date).format("MMM DD, YYYY");
								return (
									<div
										className={`${styles.slider}`}
										key={ind}
										onClick={() => openPopup(item)}
									>
										<div className={`${styles.box1}`}>
											<div className={`${styles.imgBox}`}>
												<img
													src={StrapiImage(item.thumbnail).url}
													alt="box1"
													className={`${styles.mainImg} width_100`}
												/>
												<div className={styles.logoBox}>
													<img src={StrapiImage(item.logo).url} />
												</div>
											</div>

											<div className={`${styles.categoryBox}`}>
												{item.tag && (
													<div className={`${styles.news}`}>
														<p>{item.tag}</p>
													</div>
												)}

												{item.date && (
													<div className={`${styles.date}`}>
														<p>{date}</p>
													</div>
												)}
											</div>

											<p className="text_reg_20 f_w_m">{item.title}</p>
										</div>
									</div>
								);
							})}
							<MediaPopupContent isOpen={isOpen} isClose={closePopup}>
								{selectedBlog && (
									<div className={styles.popupContent}>
										<img
											src={StrapiImage(selectedBlog.image).url}
											alt="blog-image"
											className="width_100"
										/>
									</div>
								)}
							</MediaPopupContent>
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
