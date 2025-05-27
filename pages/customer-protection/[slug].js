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
import Footer2 from "@/components/Footer2";
// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// SERVICES //
import { getCustomerProtectionsSlug } from "@/services/customer-protections";

// DATA //
/** Data Fetching */
export async function getServerSideProps({ params }) {
	const data = await getCustomerProtectionsSlug(params.slug);

	return {
		props: {
			data: data.data,
		},
	};
}

// IMAGES //
import download_icon from "../../public/img/download_icon.svg";

/** Investors Page */
export default function Investors({ data }) {
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Customer Protection"}
				Desc={""}
				Keywords={""}
				OgImg={""}
				Url={"/customer-protection"}
			/>
			{/* Header */}
			<Header />

			{/* Page Content Starts */}
			<main className={`${styles.investors_page}`}>
				<Breadcrum link2="Customer Protection" link3={data[0].title} />
				<section className={`${styles.investors_main} pb_80`}>
					<div className="container">
						<div className={`${styles.title_wrap}`}>
							<h1 className="text_xxxl color_primary">{data[0].slugRow[0].title}</h1>
						</div>
						{data[0].slugRow[0]?.row?.length > 0 && (
							<div className={`${styles.table_wrap} pt_40`}>
								<table>
									<thead>
										<tr>
											<th>Details</th>
											<th>Enclosures</th>
										</tr>
									</thead>
									<tbody>
										{data[0].slugRow[0].row.map((item) => (
											<tr key={item.id}>
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
								items={data[0].slugRow[0].Category.map((item) => ({
									title: item.text,

									children: (
										<div className={`${styles.table_wrap}`}>
											<table>
												<thead>
													<tr>
														<th>Details</th>
														<th>Enclosures</th>
													</tr>
												</thead>
												<tbody>
													{item.row.map((item) => (
														<tr key={item.id}>
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
					</div>
				</section>
			</main>
			{/* Page Content Ends */}

			{/* Footer */}
			<Footer2 />
		</div>
	);
}
