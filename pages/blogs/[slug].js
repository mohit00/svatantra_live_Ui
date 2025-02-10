// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrumb from "@/components/Breadcrumb";
import ContentFromCms from "@/components/ContentFromCms";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/BlogsInside.module.scss";

// IMAGES //
import twitter from "../../public/img/footer/twitter.svg";
import facebook from "../../public/img/footer/facebook.svg";
import insta from "../../public/img/footer/insta.svg";
import yt from "../../public/img/footer/yt.svg";
import linkdin from "../../public/img/footer/linkdin.svg";
import BlogBanner from "../../public/img/blogs/BlogBanner.jpg";
import ShareIcon from "../../public/img/blogs/ShareIcon.svg";

// DATA //

/** Blogs Inside Page */
export default function BlogsInsidePage() {
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
					link7={"blogs"}
					linkTitle={"Blogs"}
					link8={"blogs-inside"}
					linkTitle2={"Blogs Inside"}
				/>
				<div className="container">
					<div className={`${styles.HeadBx}`}>
						<div className={`${styles.TitleBx}`}>
							<h2 className="section_title pb_20">
								Malati&rsquo;s Tea Stall - A Blend for Business Excellence
							</h2>
							<div className={`${styles.DetailsStrip}`}>
								<div className={`${styles.Left}`}>
									<p
										className={`${styles.DateLink} text_sm color_light_black opacity_80`}
									>
										<span>Jul 01, 2024 |</span>{" "}
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
									<a
										href="https://x.com/WeAreSvatantra"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={twitter.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a>
									<a
										href="https://www.linkedin.com/company/7951922?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A7951922%2Cidx%3A2-1-9%2CtarId%3A1480583980673%2Ctas%3Asvatantra"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={linkdin.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a>
									<a
										href="https://www.facebook.com/svatantramicrofinance"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={facebook.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a>
									<a
										href="https://www.youtube.com/channel/UCDN7Vupq3kJt5PRjjkffytA"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={yt.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a>
									<a
										href="https://www.instagram.com/wearesvatantra?igsh=Zmh0b2hnOHZoaTh5"
										target="_blank"
										rel="noreferrer"
									>
										<div className={`${styles.box1}`}>
											<img src={insta.src} alt="twitter" className={`${styles.icon}`} />
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className={`${styles.ImgBx}`}>
							<img src={BlogBanner.src} className="b_r_10" alt="" />
						</div>
					</div>
					<ContentFromCms>
						{`
							<h5>Lorem ipsum dolor sit amet consectetur.</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur. Ut cursus mattis dui eget duis
								pretium at fames non. Malesuada risus blandit a id. Volutpat iaculis
								orci porta tristique. Malesuada tincidunt at morbi interdum. Aliquam
								consequat mi dignissim leo eleifend dignissim interdum. Lobortis
								placerat fringilla felis non id eu adipiscing mauris.
							</p>
							<p>
								Egestas ultricies dolor turpis auctor potenti laoreet euismod. Placerat
								mi morbi lorem ullamcorper vitae porttitor eleifend amet. Egestas
								dignissim ac turpis dolor. Purus ac in porttitor a turpis scelerisque.
								Lectus amet pellentesque volutpat diam mattis facilisis sed enim. Leo
								vitae sed pellentesque vehicula diam a faucibus morbi. Nisl pretium
								velit lectus sed eget. Ut pretium platea habitasse dolor ultricies
								integer ipsum.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur. Ut cursus mattis dui eget duis
								pretium at fames non. Malesuada risus blandit a id. Volutpat iaculis
								orci porta tristique. Malesuada tincidunt at morbi interdum. Aliquam
								consequat mi dignissim leo eleifend dignissim interdum. Lobortis
								placerat fringilla felis non id eu adipiscing mauris.
							</p>
							<h5>Lorem ipsum dolor sit amet consectetur.</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur. Ut cursus mattis dui eget duis
								pretium at fames non. Malesuada risus blandit a id. Volutpat iaculis
								orci porta tristique. Malesuada tincidunt at morbi interdum. Aliquam
								consequat mi dignissim leo eleifend dignissim interdum. Lobortis
								placerat fringilla felis non id eu adipiscing mauris.
							</p>
							<h5>Lorem ipsum dolor sit amet consectetur.</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur. Ut cursus mattis dui eget duis
								pretium at fames non. Malesuada risus blandit a id. Volutpat iaculis
								orci porta tristique. Malesuada tincidunt at morbi interdum. Aliquam
								consequat mi dignissim leo eleifend dignissim interdum. Lobortis
								placerat fringilla felis non id eu adipiscing mauris.
							</p>
							<p>
								Egestas ultricies dolor turpis auctor potenti laoreet euismod. Placerat
								mi morbi lorem ullamcorper vitae porttitor eleifend amet. Egestas
								dignissim ac turpis dolor. Purus ac in porttitor a turpis scelerisque.
							</p>
							<h5>Lorem ipsum dolor sit amet consectetur.</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur. Ut cursus mattis dui eget duis
								pretium at fames non. Malesuada risus blandit a id. Volutpat iaculis
								orci porta tristique. Malesuada tincidunt at morbi interdum. Aliquam
								consequat mi dignissim leo eleifend dignissim interdum. Lobortis
								placerat fringilla felis non id eu adipiscing mauris.
							</p>
							<p>
								Egestas ultricies dolor turpis auctor potenti laoreet euismod. Placerat
								mi morbi lorem ullamcorper vitae porttitor eleifend amet. Egestas
								dignissim ac turpis dolor. Purus ac in porttitor a turpis scelerisque.
							</p>
						`}
					</ContentFromCms>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
