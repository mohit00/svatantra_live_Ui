// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import AccordianCommon from "@/components/AccordianCommon";
import Footer2 from "@/components/Footer2";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Inside1.module.scss";

// IMAGES //
import download_icon from "../../public/img/download_icon.svg";
// DATA //

/** Inside1 Page */
export default function Inside1Page() {
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
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Inside1"} Desc={""} OgImg={""} Url={"/inside1"} />

			{/* Header */}
			<Header />
			<Breadcrum link2="For Investors" link3="Financial TrainingAnnual Return" />
			{/* Page Content starts here */}
			<main className={styles.Inside1Page}>
				<div className="container">
					<h1 className="text_xxxl color_primary pb_40">Reports and Statements</h1>

					<div className={`${styles.accordian_main}  pb_80`}>
						<AccordianCommon
							fontStyle={"text_lg"}
							fontWeight={"f_w_m"}
							fontFamily={"font_primary"}
							fontColor={"color_light_black"}
							items={[
								{
									title: "Annual Report",
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
									title: "Annual Return",
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
									title: "ISIN Reconciliation Statement",
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
									title: "Broard of Directors and KMP",
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
									title: "List of Committees",
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
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer2 />
		</div>
	);
}
