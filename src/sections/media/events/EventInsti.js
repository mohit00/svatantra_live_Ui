// MODULES //

// COMPONENTS //
import ContentFromCms from "@/components/ContentFromCms";
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
export default function Eventinsti({
	tableData,
	descData,
	problemStatementData,
}) {
	console.log(descData, " problemStatementData");

	return (
		<section className={styles.event_insti}>
			<div className="container">
				{tableData && descData && (
					<div className={styles.Institutes}>
						<div className={styles.titleBox}>
							<h1 className="text_xxxl color_primary pb_60">
								Participating Institutes
							</h1>
						</div>
						<table>
							{tableData?.map((item, ind) => {
								return (
									<td key={ind}>
										<tr className="text_sm">{item?.col1}</tr>
										<tr className="text_sm">{item?.col2}</tr>
										<tr className="text_sm">{item?.col3}</tr>
										<tr className="text_sm">{item?.col4}</tr>
									</td>
								);
							})}
						</table>
						{descData && (
							<div>
								<ContentFromCms>{descData}</ContentFromCms>
							</div>
						)}

						{/* <p className="text_sm opacity_8">
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
					</ul> */}
					</div>
				)}

				{problemStatementData.length > 0 && (
					<div className={`${styles.statements}  pb_100`}>
						<div className={`${styles.titleBox}`}>
							<h1 className="text_xxxl color_primary pb_60">Problem Statements</h1>
						</div>
						<div className={styles.pdfData}>
							<table>
								<td className={styles.title}>
									<tr></tr>
									<tr className="text_sm color_white">Details</tr>
									<tr className="text_sm color_white">Enclosures</tr>
								</td>
								{problemStatementData?.map((item, ind) => {
									return (
										<td key={ind}>
											<tr className={`${styles.number} pt_20 pb_20 opacity_8`}>
												{ind + 1}
											</tr>
											<tr className="text_sm pt_20 pb_20 opacity_8">{item.title}</tr>
											<tr className={`${styles.downloads} pt_20 pb_20`}>
												<a
													href={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.media.url}`}
													className={`${styles.download}`}
													target="_blank"
													rel="noreferrer"
												>
													<img src={download.src} />
													<p className="text_xs color_secondary_tint opacity_8">Download</p>
												</a>
											</tr>
										</td>
									);
								})}
							</table>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
