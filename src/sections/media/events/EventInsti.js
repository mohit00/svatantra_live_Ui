// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/event_insti.module.scss";

// IMAGES //
// import dots from "../../public/img/dot.svg";
// import download from "../../public/img/download.svg";
import dots from "../../../../public/img/dot.svg";
import download from "../../../../public/img/download.svg";
// DATA //

/** event_insti Section */
export default function Eventinsti() {
	return (
		<section className={styles.event_insti}>
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
				<div className={`${styles.statements}  pb_100`}>
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
		</section>
	);
}
