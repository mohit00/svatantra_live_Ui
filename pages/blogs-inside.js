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
			<main className={styles.BlogsInsidePage}>
				<Breadcrumb
					link7={"blogs"}
					linkTitle={"Blogs"}
					link8={"blogs-inside"}
					linkTitle2={"Blogs Inside"}
				/>
				<div className="container">
					<div className={`${styles.HeadBx}`}>
						<div className={`${styles.TitleBx}`}>
							<h1 className="text_50 color_primary">
								Discover the Health Benefits of Jaggery!
							</h1>
							{/* <div className={`${styles.DetailsStrip}`}>
								<div className={`${styles.Left}`}>
									<p className="text_18 color_primary">
										<span>Blog</span>
										<span>12th Sep, 2024</span>
										<span>5 mins read</span>
									</p>
								</div>
								<div className={`${styles.SocialsBx}`}>
									<div className={`${styles.IconBx}`}>
										<a href="" rel="noreferrer">
											<img src={linkedIn.src} alt="Social Icons" />
										</a>
									</div>
									<div className={`${styles.IconBx}`}>
										<a
											href="https://x.com/the_trupath?s=21"
											rel="noreferrer"
											target="_blank"
										>
											<img src={Twitter.src} alt="Social Icons" />
										</a>
									</div>
									<div className={`${styles.IconBx}`}>
										<a
											href="https://www.facebook.com/profile.php?id=61566508024318&mibextid=LQQJ4d"
											rel="noreferrer"
											target="_blank"
										>
											<img src={FB.src} alt="Social Icons" />
										</a>
									</div>
									<div className={`${styles.IconBx}`}>
										<a
											href="https://www.instagram.com/the.trupath"
											rel="noreferrer"
											target="_blank"
										>
											<img src={Insta.src} alt="Social Icons" />
										</a>
									</div>
								</div>
							</div> */}
						</div>
						<div className={`${styles.ImgBx}`}>
							{/* <img src={BlogBanner.src} className="b_r_10" alt="" /> */}
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
							<img src="/img/blogs-inside/image.png" className="b_r_10" alt=""/>
							<h5>Lorem ipsum dolor</h5>
							<ol>
								<li>Lorem ipsum dolor sit amet consectetur.</li>
								<li>
									Lorem ipsum dolor sit amet consectetur Egestas ultricies dolor turpis
									auctor potenti laoreet euismod. Placerat mi morbi lorem
								</li>
								<li>
									Egestas ultricies dolor turpis auctor potenti laoreet euismod. Placerat
									mi morbi lorem
								</li>
							</ol>
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
