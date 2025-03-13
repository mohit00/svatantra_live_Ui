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
import arrow_btn from "../../../public/img/arrow_btn.svg";

// DATA //
import { pressRelease } from "@/services/PressReleaseService";

/** getOurLeaderships */
export const getStaticProps = async (context) => {
	const pressReleaseData = await pressRelease();
	return { props: { pressReleaseData }, revalidate: 60 };
};

/** PressRelease Page */
export default function PressReleasePage({ pressReleaseData }) {
	console.log(pressReleaseData, " pressReleaseData");

	const BlogList = [
		{
			date: "Mumbai, 4 March, 2024",
			title:
				"Advent International and Multiples to invest INR 1,930 Crore or $230M in Ananya Birla’s Svatantra Microfin, which marks the largest private equity investment in India in the sector",
			link: "/blogs-inside",
		},
		{
			date: "Mumbai, 4 March, 2024",
			title:
				"Ananya Birla’s Svatantra set to acquire Sachin Bansal’s Chaitanya for INR 1,479 cr",
			link: "/blogs-inside",
		},
		{
			date: "Mumbai, 4 March, 2024",
			title:
				"Ananya Birla founded Svatantra Microfin partners with Propaco for women empowerment in India",
			link: "/blogs-inside",
		},
		{
			date: "Mumbai, 4 March, 2024",
			title:
				"Advent International and Multiples to invest INR 1,930 Crore or $230M in Ananya Birla’s Svatantra Microfin, which marks the largest private equity investment in India in the sector",
			link: "/blogs-inside",
		},
		{
			date: "Mumbai, 4 March, 2024",
			title:
				"Ananya Birla’s Svatantra set to acquire Sachin Bansal’s Chaitanya for INR 1,479 cr",
			link: "/blogs-inside",
		},
		{
			date: "Mumbai, 4 March, 2024",
			title:
				"Ananya Birla founded Svatantra Microfin partners with Propaco for women empowerment in India",
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
					{/* <Breadcrumb link5={"press-release"} linkTitle={"Press Release"} /> */}
					<Breadcrumb
						linknest1={"/media/press-release"}
						linknestTitle1={"Media"}
						linknest2={"/media/press-release"}
						linknestTitle2={"Press Release"}
					/>
					<section className={`${styles.PressReleaseListingMain}`}>
						<div className={`${styles.Head}`}>
							<h2 className="section_title pb_10">Documenting the path to change</h2>
							<p className="text_md color_light_black opacity_80">
								Read the latest updates on how we are creating ripples across
								industries.
							</p>
						</div>
						<div className={`${styles.GridBox}`}>
							{pressReleaseData.data.map((item, ind) => {
								return (
									<div className={`${styles.MainBox}`} key={ind}>
										<div className={`${styles.box1}`}>
											<div className={`${styles.Title}`}>
												<p className="text_xs">{item.title}</p>
											</div>
											<div className={`${styles.categoryBox}`}>
												<div className={`${styles.news}`}>
													<p>{item.date}</p>
												</div>
												<div className={`${styles.arrow}`}>
													<a href={`press-release/${item.slug}`} rel="noopener noreferrer">
														<img src={arrow_btn.src} alt="Arrow" />
													</a>
												</div>
											</div>
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
