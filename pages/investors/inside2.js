/* eslint-disable react/no-unescaped-entities */
// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AccordianCommon from "@/components/AccordianCommon";
import Breadcrum from "@/components/Breadcrumb";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// SERVICES //

// DATA //

/** Data Fetching  */

// IMAGES //
import download_icon from "../../public/img/download_icon.svg";

/** Investors Page */
export default function Investors() {
	const tableList = [
		{
			id: 1,
			subTitle: "Regulation 7(3) - Compliance Certificate",
			pdfName: "Second EGM Notice FY 2024-25",
			fileUrl: "#", // Replace with actual file URL
		},
		{
			id: 2,
			subTitle: "Regulation 7(3) - Compliance Certificate",
			pdfName: "Second EGM Notice FY 2024-252",
			fileUrl: "#", // Replace with actual file URL
		},
		{
			id: 3,
			subTitle: "Regulation 7(3) - Compliance Certificate",
			pdfName: "Second EGM Notice ",
			fileUrl: "#", // Replace with actual file URL
		},
	];
	console.log(tableList);
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Investors"}
				Desc={""}
				Keywords={""}
				OgImg={""}
				Url={"/investors"}
			/>
			{/* Header */}
			<Header />

			{/* Page Content Starts */}
			<main className={`${styles.investors_page}`}>
				<Breadcrum link2="For Investors" link3="Financial TrainingAnnual Return" />
				<section className={`${styles.investors_main} pb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap} pb_60`}>
							<h1 className="text_xxxl color_primary">Annual Return</h1>
						</div>
						<div className={`${styles.table_wrap}`}>
							<table>
								<thead>
									<tr>
										<th></th>
										<th>Details</th>
										<th>Enclosures</th>
									</tr>
								</thead>
								{tableList.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.pdfName}</td>
										<td>
											<a href={item.fileUrl} download>
												<img
													src={download_icon.src}
													className={styles.download_icon}
													alt="Download icon"
												/>
												<span>Download</span>
											</a>
										</td>
									</tr>
								))}
							</table>
						</div>

						<div className={`${styles.accordian_main} pt_60`}>
							<AccordianCommon
								fontStyle={"text_lg"}
								fontWeight={"f_w_m"}
								fontFamily={"font_primary"}
								fontColor={"color_light_black"}
								items={[
									{
										title: "Regulation 7(3) - Compliance Certificate",
										children: (
											<div className={`${styles.table_wrap}`}>
												<table>
													<thead>
														<tr>
															<th></th>
															<th>Details</th>
															<th>Enclosures</th>
														</tr>
													</thead>
													{tableList.map((item) => (
														<tr key={item.id}>
															<td>{item.id}</td>
															<td>{item.pdfName}</td>
															<td>
																<a href={item.fileUrl} download>
																	<img
																		src={download_icon.src}
																		className={styles.download_icon}
																		alt="Download icon"
																	/>
																	<span>Download</span>
																</a>
															</td>
														</tr>
													))}
												</table>
											</div>
										),
									},
									{
										title: "Regulation 7(3) - Compliance Certificate 2",
										children: (
											<div className={`${styles.table_wrap}`}>
												<table>
													<thead>
														<tr>
															<th></th>
															<th>Details</th>
															<th>Enclosures</th>
														</tr>
													</thead>
													{tableList.map((item) => (
														<tr key={item.id}>
															<td>{item.id}</td>
															<td>{item.pdfName}</td>
															<td>
																<a href={item.fileUrl} download>
																	<img
																		src={download_icon.src}
																		className={styles.download_icon}
																		alt="Download icon"
																	/>
																	<span>Download</span>
																</a>
															</td>
														</tr>
													))}
												</table>
											</div>
										),
									},
									{
										title: "Regulation 7(3) - Compliance Certificate 3",
										children: (
											<div className={`${styles.table_wrap}`}>
												<table>
													<thead>
														<tr>
															<th></th>
															<th>Details</th>
															<th>Enclosures</th>
														</tr>
													</thead>
													{tableList.map((item) => (
														<tr key={item.id}>
															<td>{item.id}</td>
															<td>{item.pdfName}</td>
															<td>
																<a href={item.fileUrl} download>
																	<img
																		src={download_icon.src}
																		className={styles.download_icon}
																		alt="Download icon"
																	/>
																	<span>Download</span>
																</a>
															</td>
														</tr>
													))}
												</table>
											</div>
										),
									},
								]}
							/>
						</div>
					</div>
				</section>
			</main>
			{/* Page Content Ends */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
