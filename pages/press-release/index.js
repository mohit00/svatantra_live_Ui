/* eslint-disable require-jsdoc */
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
import styles from "@/styles/pages/PressRelease.module.scss";

// IMAGES //
import advent from "../../public/img/advent.png";

// DATA //

/** PressRelease Page */
export default function PressReleasePage() {
	const BlogList = [
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Malati's Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title:
				"Small Grocery Stores and Shops:The Heart of Rural India's Economic and Social Fabric",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Role of rural women in Indian agricultural businesses",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Malati's Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title:
				"Small Grocery Stores and Shops:The Heart of Rural India's Economic and Social Fabric",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Role of rural women in Indian agricultural businesses",
			link: "/blogs-inside",
		},
	];
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Press Release"}
				Desc={""}
				OgImg={""}
				Url={"/press-releaase"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.PressReleasePage} pb_80`}>
				<div className="container">
					<Breadcrumb link5={"press-release"} linkTitle={"Press Release"} />
					<section className={`${styles.PressReleaseListingMain}`}>
						<div className={`${styles.Head}`}>
							<h2 className="section_title pb_10">Documenting the path to change</h2>
							<p className="text_md color_light_black opacity_80">
								Read the latest updates on how we are creating ripples across
								industries.
							</p>
						</div>
						<div className={`${styles.GridBox}`}>
							{BlogList.map((item, ind) => {
								return (
									<div className={`${styles.slider}`} key={ind}>
										<div className={`${styles.box1}`}>
											<div className={`${styles.imgBox}`}>
												<img src={item.image} alt="box1" className={`${styles.mainImg}`} />
												{/* <img src={box11.src} alt="logo" className={`${styles.logo}`} /> */}
											</div>

											<div className={`${styles.categoryBox}`}>
												<div className={`${styles.news}`}>
													<p>{item.cardtype}</p>
												</div>
												<div className={`${styles.date}`}>
													<p>{item.date}</p>
												</div>
											</div>

											<p className="text_reg_20 f_w_m pt_20">{item.title}</p>
										</div>
									</div>
								);
							})}
						</div>
						<div className={`${styles.ViewBtn}`}>
							{/* <Button color="secondary" variant="filled">
								View All
							</Button> */}
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
