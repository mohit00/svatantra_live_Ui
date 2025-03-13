// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrumb from "@/components/Breadcrumb";
import ContentFromCms from "@/components/ContentFromCms";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from "react-share";
// SECTIONS //

// PLUGINS //

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/pages/BlogsInside.module.scss";

// IMAGES //
import twitter from "../../../public/x_thread.svg";
import facebook from "../../../public/img/footer/facebook.svg";
import insta from "../../../public/img/footer/insta.svg";
import yt from "../../../public/img/footer/yt.svg";
import linkdin from "../../../public/img/footer/linkdin.svg";
import BlogBanner from "../../../public/img/blogs/BlogBanner.jpg";
import ShareIcon from "../../../public/img/blogs/ShareIcon.svg";

// DATA //
import { getAllBlogs, getBlogBySlug } from "@/services/BlogService";

/** getStaticPaths */
export async function getStaticPaths() {
	const { data: insights } = await getAllBlogs();

	const paths = insights.map((post) => ({
		params: { slug: post.slug || "test" },
	}));

	// We'll prerender only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: true };
}

/** getStaticProps */
export async function getStaticProps({ params }) {
	const { data: insights } = await getBlogBySlug(params.slug);
	// const { data: related } = await getAllBlogs(insights[0]?.type, params.slug);

	return {
		props: { data: insights[0] || { error: true } },
		// Next.js will invalidate the cache when a
		// request comes in, at most once every 60 seconds.
		revalidate: 60,
	};
}

/** Blogs Inside Page */
export default function BlogsInsidePage({ data }) {
	console.log(data);
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Blogs Inside"}
				Desc={""}
				OgImg={""}
				Url={"/blogs-inside"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.BlogsInsidePage} pb_80`}>
				<Breadcrumb
					linknest1={"/media/blogs"}
					linknestTitle1={"Blogs"}
					linknest2={`/media/blogs/${data?.slug}`}
					linknestTitle2={`${data?.slug}`}
				/>
				<div className="container">
					<div className={`${styles.HeadBx}`}>
						<div className={`${styles.TitleBx}`}>
							<h2 className="section_title pb_20">
								{/* Malati&rsquo;s Tea Stall - A Blend for Business Excellence */}
								{data?.title}
							</h2>
							<div className={`${styles.DetailsStrip}`}>
								<div className={`${styles.Left}`}>
									<p
										className={`${styles.DateLink} text_sm color_light_black opacity_80`}
									>
										<span> {data?.date} |</span>{" "}
										<span className={styles.ShareBtn}>
											<a rel="noreferrer" href="">
												Share
												<img
													src={ShareIcon.src}
													alt="Share Icon"
													className={`${styles.icon}`}
												/>
											</a>
										</span>
									</p>
								</div>
								<div className={`${styles.socialIcons}`}>
									{/* <a
										href="https://x.com/WeAreSvatantra"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={twitter.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a> */}
									<TwitterShareButton url={"https://x.com/WeAreSvatantra"}>
										<div className={`${styles.box1}`}>
											<img src={twitter.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</TwitterShareButton>
									{/* <a
										href="https://www.linkedin.com/company/7951922?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A7951922%2Cidx%3A2-1-9%2CtarId%3A1480583980673%2Ctas%3Asvatantra"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={linkdin.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a> */}
									<LinkedinShareButton
										url={
											"https://www.linkedin.com/company/7951922?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A7951922%2Cidx%3A2-1-9%2CtarId%3A1480583980673%2Ctas%3Asvatantra"
										}
									>
										<div className={`${styles.box1}`}>
											<img src={linkdin.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</LinkedinShareButton>
									{/* <a
										href="https://www.facebook.com/svatantramicrofinance"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={facebook.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a> */}
									<FacebookShareButton
										url={"https://www.facebook.com/svatantramicrofinance"}
									>
										<div className={`${styles.box1}`}>
											<img src={facebook.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</FacebookShareButton>
									{/* <a
										href="https://www.youtube.com/channel/UCDN7Vupq3kJt5PRjjkffytA"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={yt.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a> */}
									{/* <a
										href="https://www.instagram.com/wearesvatantra?igsh=Zmh0b2hnOHZoaTh5"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={insta.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a> */}
								</div>
							</div>
						</div>
						<div className={`${styles.ImgBx}`}>
							<picture>
								<source
									srcSet={StrapiImage(data?.banner.mobile)?.url}
									media="(max-width:767px)"
								/>
								<img
									src={StrapiImage(data?.banner.desktop)?.url}
									className="b_r_10"
									alt=""
								/>
							</picture>
						</div>
					</div>
					<ContentFromCms>{data?.desc}</ContentFromCms>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
