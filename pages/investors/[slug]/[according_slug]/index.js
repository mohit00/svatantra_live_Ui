/* eslint-disable react/no-unescaped-entities */
// MODULES //
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
import { getInvestorsSlug } from "@/services/Investors";

// DATA //
/** Data Fetching */
export async function getServerSideProps({ params }) {
	const data = await getInvestorsSlug(params.slug);

	return {
		props: {
			data: data.data,
		},
	};
}

// IMAGES //
import download_icon from "../../../../public/img/download_icon.svg";

/** Investors Page */
export default function Investors({ data }) {
	// console.log(data[0].slugRow[0].title, "meta");
	console.log(data, "dddddddddddddddddd");

	const [filteredData, setFilteredData] = useState([]);

	const router = useRouter();
	const fullPath = router.asPath; // Pura URL path milega

	// "reports-and-statements" ke baad ka part extract karo
	const parts = fullPath.split("/").filter(Boolean); // Empty strings hata do
	// console.log("Parts:", parts); // Debugging ke liye
	const reportsIndex = parts.length - 2;
	// console.log("Reports Index:", reportsIndex);
	const currentSlug =
		reportsIndex >= 0 ? parts.slice(reportsIndex + 1).join("/") : "";
	// console.log("Current Slug:", currentSlug);

	useEffect(() => {
		if (!data || !data.length || !data[0]?.slugRow) {
			console.log("Data is empty or invalid");
			return;
		}

		const result = data[0].slugRow
			.map((item) => {
				// console.log("Checking item:", item);

				// Debugging: Slug check karo
				// console.log("Item Slug:", item?.slug);

				// Slug comparison (WITHOUT toLowerCase)
				const rowSlug = item.slug.trim().replace(/\s+/g, "-");

				// console.log("Comparing:", rowSlug, "==", currentSlug, "not");

				if (rowSlug === currentSlug) {
					return {
						...item,
						slugRow: [item], // Matched slugRow return karo
					};
				}
				return null;
			})
			.filter(Boolean); // Null values hata do

		console.log("Filtered Data:", result);
		setFilteredData(result); // ✅ Store result in state
	}, [data, currentSlug]);

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
	console.log(data[0].slugRow[0].title, "ddddddddddddd");
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
				<Breadcrum
					link5="investors"
					linkTitle={"Investors"}
					linknest1={`investors/${data[0]?.slug}`}
					linknestTitle1={data[0]?.title}
					linknest2={`investors/${data[0]?.slug}/${data[0].slugRow[0].title}`}
					linknestTitle2={data[0].slugRow[0].title}
				/>

				{/* <Breadcrum link2="For Investors" link3="Financial TrainingAnnual Return" /> */}
				<section className={`${styles.investors_main} pb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap}`}>
							<h1 className="text_xxxl color_primary">{data[0].slugRow[0].title}</h1>
						</div>
						{filteredData[0]?.row?.length > 0 && (
							<div className={`${styles.table_wrap} pt_40`}>
								<table>
									<thead>
										<tr>
											{/* <th></th> */}
											<th>Details</th>
											<th>Enclosures</th>
										</tr>
									</thead>
									<tbody>
										{filteredData[0].row.map((item) => (
											<tr key={item.id}>
												{/* <td>{item.id}</td> */}
												<td>{item.title}</td>
												<td>
													<a
														href={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.media.url}`}
														target="_blank"
														rel="noreferrer"
													>
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
									</tbody>
								</table>
							</div>
						)}

						<div className={`${styles.accordian_main} pt_40`}>
							<AccordianCommon
								fontStyle={"text_lg"}
								fontWeight={"f_w_m"}
								fontFamily={"font_primary"}
								fontColor={"color_light_black"}
								items={filteredData[0]?.Category.map((item) => ({
									title: item.text,
									//    { console.log(category)}

									children: (
										<div className={`${styles.table_wrap}`}>
											<table>
												<thead>
													<tr>
														{/* <th></th> */}
														<th>Details</th>
														<th>Enclosures</th>
													</tr>
												</thead>
												<tbody>
													{item.row.map((item) => (
														<tr key={item.id}>
															{/* <td>{item.id}</td> */}
															<td>{item.title}</td>
															<td>
																<a
																	href={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.media.url}`}
																	target="_blank"
																	rel="noreferrer"
																>
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
												</tbody>
											</table>
										</div>
									),
								}))}
							/>
						</div>

						{/* <div className={`${styles.accordian_main} pt_60`}>
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
						</div> */}
					</div>
				</section>
			</main>
			{/* Page Content Ends */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
