// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/EventsUdaan.module.scss";

// IMAGES //
import udaan from "../public/img/udaan.jpg";
import GalleryComponent from "@/sections/Gallery";
import Udaangallery from "@/components/Udaangallery";
import dots from "../public/img/dot.svg";
import download from "../public/img/download.svg";
// DATA //

/** Events Udaan Page */
export default function EventsUdaanPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Events Udaan"}
				Desc={""}
				OgImg={""}
				Url={"/events-udaan"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.EventsUdaanPage}>
				<div className="container">
					<div className={styles.contentBox}>
						<div className={styles.titleBox}>
							<h1 className="text_xxxl color_primary">
								Udaan Scholarship <br />
								programme
							</h1>
							<img src={udaan.src} />
						</div>
					</div>
					{/*  */}
					<div className={`${styles.para} pb_50`}>
						<p className="text_xs  pb_20">
							In July 2019, Svatantra launched Udaan Scholarship programme with the
							intention of providing scholarships and career guidance to rural Indian
							girl students. We selected 96 girl students from across 7 states, and
							with the aid of a career counselling specialist, we organised a tailored
							career exploration programme for them and their parents. An extensive
							online examination was used to conduct the counselling, and this was
							followed by an in-person interview. For a year, these female students
							were awarded a monthly scholarship.
						</p>
						<p className="text_xs">
							The company intended to make a longterm difference in students&apos;
							lives through Udaan Scholarship. In addition to providing students with
							financial support, scholarships will also help them in the long run by
							providing career counselling. The goal of career counselling is to make
							sure that students adopt the road that will lead them to their ideal
							career.
						</p>
					</div>
					{/*  */}
					<Udaangallery />
					{/*  */}
					<div className={styles.contentBox}>
						<div className={styles.titleBox}>
							<h1 className="text_xxxl color_primary">Avant-Garde</h1>
							{/* <img src={udaan.src} /> */}
						</div>
					</div>
					{/*  */}
					<div className={`${styles.para} pb_50`}>
						<p className="text_xs  pb_20 opacity_8">
							Avant-garde encourages India&apos;s brightest minds to collaborate and
							develop innovative solutions to revolutionize the microfinance industry.
							The event provides students an opportunity to present game-changing ideas
							to a distinguished panel of judges, aiming to redefine the microfinance
							and affordable housing sectors.
						</p>
						<p className="text_xs opacity_8 pb_50">
							This year, Avant-garde celebrated its 8th successful edition, receiving
							over 690 registrations from top B-Schools across India, with 9 teams
							reaching the national finals. Unlike previous years, there were two case
							studies—one for Svatantra Microfin Pvt. Ltd. (SMPL) focusing on
							partnerships with startups to address Health, Education, Employment, and
							Finclusion, and another for Svatantra Micro Housing Finance Corporation
							Ltd. (SMHFC) exploring technology to address reverse migration.
						</p>
						<p className="text_xs opacity_8">
							The winning team from S.P. Jain Institute of Management and Research—Sai
							Sankalp Vemavarapu, Rishabh Mishra, and Ishant Bansal—earned INR 2 lakh
							and a PPI with the Aditya Birla Group Leadership Program. The runner-up
							team, Nidhi Dave, Khushi Bahl, and Dhruvin Zaveri, received INR 1 lakh
							and a PPI with the same program.
						</p>
					</div>
					{/*  */}
				</div>
				<div className={styles.results}>
					<div className="container">
						<h1 className="text_xxxl color_white pb_60">Avant-Garde 2022 Results</h1>

						<div className={styles.box}>
							<div className={styles.box1}>
								<div className={styles.row1}>
									<h1 className="text_lg color_white text_center">First Place</h1>
								</div>
								<div className={styles.row2}>
									<p className="text_lg text_center color_light_black pb_10">
										Goodfellas
									</p>
									<p className="text_xs text_center color_light_black pb_10">
										(Rishabh Mishra, Ishant Bansal, Sai Sankalp Vemavarapu)
									</p>
									<p className="text_xs text_center color_primary">S. P. Jain</p>
								</div>
							</div>

							<div className={styles.box1}>
								<div className={styles.row1}>
									<h1 className="text_lg color_white text_center">Runner-up</h1>
								</div>
								<div className={styles.row2}>
									<p className="text_lg text_center color_light_black pb_10">
										Finpreneurs
									</p>
									<p className="text_xs text_center color_light_black pb_10">
										(Nidhi Dave, Khushi Bahl, & Dhruvin Zaveri)
									</p>
									<p className="text_xs text_center color_primary">S. P. Jain</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className={styles.Institutes}>
						<div className={styles.titleBox}>
							<h1 className="text_xxxl color_primary pb_60">
								Participating Institutes
							</h1>
						</div>
						<table>
							<td>
								<tr className="text_sm">FMS</tr>
								<tr className="text_sm">XIMB Bbn</tr>
								<tr className="text_sm">IIM A</tr>
								<tr className="text_sm">IIM B</tr>
							</td>
							<td>
								<tr className="text_sm">IIM C</tr>
								<tr className="text_sm">IIM I</tr>
								<tr className="text_sm">IIM K</tr>
								<tr className="text_sm">IIM L</tr>
							</td>
							<td>
								<tr className="text_sm">IIM Shillong</tr>
								<tr className="text_sm">TISS</tr>
								<tr className="text_sm">JBIMS</tr>
								<tr className="text_sm">MDI</tr>
							</td>
							<td>
								<tr className="text_sm">NMIMS</tr>
								<tr className="text_sm">SCMHRD</tr>
								<tr className="text_sm">SIBM</tr>
								<tr className="text_sm">SP Jain</tr>
							</td>
							<td>
								<tr className="text_sm">XLRI</tr>
								<tr className="text_sm">IIFT Delhi & Kolkata</tr>
								<tr className="text_sm"></tr>
								<tr className="text_sm"></tr>
							</td>
						</table>
						<p className="text_sm opacity_8">
							End-to-end competition was hosted virtually, where students had to form
							teams of 3 and register online. The case study based on an existing
							challenge faced by Svatantra Microfin was shared with all the registered
							teams. The deliverable for different rounds :
						</p>
						<ul className="pt_20">
							<div className={`${styles.points} pb_10`}>
								<img src={dots.src} />
								<p className="text_sm opacity_8">
									Round 1: Teams submit a case analysis/solution in a 6-pager document.
								</p>
							</div>
							<div className={`${styles.points} pb_10`}>
								<img src={dots.src} />
								<p className="text_sm opacity_8">
									Round 2: Teams elaborate the game-changing idea in a 3-minute in-person
									video.
								</p>
							</div>
							<div className={`${styles.points} pb_10`}>
								<img src={dots.src} />
								<p className="text_sm opacity_8">
									Finals: Finalists make a 7-minute presentation before the panellists in
									Mumbai. This is followed by a 5-minute question & answer round by the
									panellists.
								</p>
							</div>
						</ul>
					</div>
					<div className={`${styles.statements}  ptb_100`}>
						<div className={`${styles.titleBox}`}>
							<h1 className="text_xxxl color_primary pb_60">Problem Statements</h1>
						</div>
						<div>
							<table>
								<td className={styles.title}>
									<tr></tr>
									<tr className="text_sm color_white">Details</tr>
									<tr className="text_sm color_white">Enclosures</tr>
								</td>
								<td>
									<tr className={`${styles.number} pt_20 pb_20 opacity_8`}>1</tr>
									<tr className="text_sm pt_20 pb_20 opacity_8">
										Avant- Garde 2.0, 2016
									</tr>
									<tr className={`${styles.download} pt_20 pb_20`}>
										<img src={download.src} />
										<p className="text_xs color_secondary_tint opacity_8">Download</p>
									</tr>
								</td>
								<td>
									<tr className={`${styles.number} pt_20 pb_20 opacity_8`}>2</tr>
									<tr className="text_sm pt_20 pb_20 opacity_8">
										Avant- Garde 3.0, 2017
									</tr>
									<tr className={`${styles.download} pt_20 pb_20`}>
										<img src={download.src} />
										<p className="text_xs color_secondary_tint opacity_8">Download</p>
									</tr>
								</td>
								<td>
									<tr className={`${styles.number} pt_20 pb_20 opacity_8`}>3</tr>
									<tr className="text_sm pt_20 pb_20 opacity_8">
										Avant- Garde 4.0, 2018
									</tr>
									<tr className={`${styles.download} pt_20 pb_20`}>
										<img src={download.src} />
										<p className="text_xs color_secondary_tint opacity_8">Download</p>
									</tr>
								</td>
								<td>
									<tr className={`${styles.number} pt_20 pb_20 opacity_8`}>4</tr>
									<tr className="text_sm pt_20 pb_20 opacity_8">
										Avant- Garde 5.0, 2019
									</tr>
									<tr className={`${styles.download} pt_20 pb_20`}>
										<img src={download.src} />
										<p className="text_xs color_secondary_tint opacity_8">Download</p>
									</tr>
								</td>
								<td>
									<tr className={`${styles.number} pt_20 pb_20 opacity_8`}>5</tr>
									<tr className="text_sm pt_20 pb_20 opacity_8">
										Avant- Garde 6.0, 2020
									</tr>
									<tr className={`${styles.download} pt_20 pb_20`}>
										<img src={download.src} />
										<p className="text_xs color_secondary_tint opacity_8">Download</p>
									</tr>
								</td>
								<td>
									<tr className={`${styles.number} pt_20 pb_20 opacity_8`}>6</tr>
									<tr className="text_sm pt_20 pb_20 opacity_8">
										Avant- Garde 7.0, 2021
									</tr>
									<tr className={`${styles.download} pt_20 pb_20`}>
										<img src={download.src} />
										<p className="text_xs color_secondary_tint opacity_8">Download</p>
									</tr>
								</td>
								<td>
									<tr className={`${styles.number} pt_20 pb_20 opacity_8`}>7</tr>
									<tr className="text_sm pt_20 pb_20 opacity_8">
										Avant- Garde 8.0, 2022
									</tr>
									<tr className={`${styles.download} pt_20 pb_20`}>
										<img src={download.src} />
										<p className="text_xs color_secondary_tint opacity_8">Download</p>
									</tr>
								</td>
							</table>
						</div>
					</div>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
