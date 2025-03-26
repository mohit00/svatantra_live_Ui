// MODULES //
import { useState } from "react";

// COMPONENTS //
import Button from "@/components/Buttons/Button";
import MediaPopupContent from "@/components/MediaPopupContent";
import ContentFromCms from "@/components/ContentFromCms";

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/sections/pages/careers/Talent.module.scss";

// IMAGES //
import arrow_btn from "../../../../public/img/arrow_btn.svg";
import Talent1 from "../../../../public/img/careers/talent1.jpg";
import playIcn from "../../../../public/img/icons/play_btn.png";
import plus from "../../../../public/img/careers/plus.svg";
// DATA //

/** DummyComponent Component */
export default function TalentComponent({ data, pdfTalent }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedBlog, setSelectedBlog] = useState(null);
	// console.log(data, "talents");
	console.log(data?.data, "All talents data");

	// console.log(pdfTalent, "data hai bhai");
	const [activeType, setActiveType] = useState("Paintings");

	// Get unique types
	const uniqueTypes = [
		...new Set(data?.data?.map((item) => item.types).filter(Boolean)),
	];

	// Filtered data based on activeType
	const filteredData = data?.data?.filter((item) => item.types === activeType);
	// console.log(filteredData, " filteredData filteredData");
	/** */
	const openPopup = (blog) => {
		console.log(blog, " blog");

		setSelectedBlog(blog);
		setIsOpen(true);
	};

	/** */
	const closePopup = () => {
		setIsOpen(false);
		setSelectedBlog(null);
	};

	return (
		<div className={`${styles.talent} pt_40 pb_80`}>
			<div className="container">
				<h2 className="section_title pb_20">Svatantra’s got talent!</h2>
				<div className={`${styles.talent_section}`}>
					<div className={`${styles.switchBox_wrapper}`}>
						<div className={`${styles.switchBox}`}>
							{uniqueTypes.map((type) => (
								<div
									key={type}
									className={`${styles.tabNav} ${
										activeType === type ? styles.active : ""
									}`}
									onClick={() => setActiveType(type)}
								>
									<p className="text_reg f_w_m">{type}</p>
								</div>
							))}
						</div>
					</div>
					<div className="pt_40">
						<Swiper
							modules={[Navigation, Pagination, Autoplay]}
							// slidesPerView={1}
							// spaceBetween={15}
							grabCursor={true}
							speed={500}
							loop={true}
							navigation={{
								prevEl: "#customPrev",
								nextEl: "#customNext",
							}}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							pagination={{
								el: ".swiper-pagination2", // Attach to a pagination container
								type: "progressbar", // Choose 'progressbar' type
								clickable: true, // Makes it interactive
							}}
							breakpoints={{
								0: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
								767: {
									slidesPerView: 2.3,
									spaceBetween: 20,
								},
								992: {
									slidesPerView: 3,
									spaceBetween: 20,
								},
								1200: {
									slidesPerView: 3,
									spaceBetween: 20,
								},
							}}
							className={styles.slider}
						>
							{filteredData?.map((item) => (
								<SwiperSlide key={item.id} className={styles.item}>
									{/* {console.log(filteredData, " filteredDatafilteredData")} */}
									{item.types === "Videos" ? (
										<LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
											<a data-src={item?.youTubeLink}>
												<div className={styles.itemContent}>
													<div className={`${styles.item_img} `}>
														<img
															src={StrapiImage(item?.thumb)?.url}
															className={`${styles.thumbImg} img-responsive`}
															alt="Talent1"
														/>
														<img src={playIcn.src} className={styles.playIcn} alt="" />
													</div>
													<div className="f_r_aj_between pt_30">
														<div>
															<h4 className="text_md font_primary">{item.name}</h4>
															<h6 className="text_xs opacity_80">{item.location}</h6>
														</div>
														{/* <img src={playIcn.src} /> */}
													</div>
												</div>
											</a>
										</LightGallery>
									) : (
										<>
											{item.types === "Poems" ? (
												<div className={styles.itemContent} onClick={() => openPopup(item)}>
													<div className={`${styles.item_img}`}>
														<img
															src={StrapiImage(item?.thumb)?.url}
															className={`${styles.thumbImg} img-responsive`}
															alt="Talent1"
														/>
														<img src={plus.src} className={styles.plusIcn} alt="" />
													</div>
													<div className="f_r_aj_between pt_30">
														<div>
															<h4 className="text_md font_primary f_w_m">{item.name}</h4>
															<h6 className="text_xs opacity_80">{item.location}</h6>
														</div>
													</div>
												</div>
											) : (
												<LightGallery
													speed={100}
													plugins={[lgThumbnail, lgZoom]}
													thumbnail={true}
												>
													<a
														href={StrapiImage(item?.image)?.url}
														// data-lg-size="1400-1400"
														data-src={StrapiImage(item?.image)?.url}
														data-thumb={StrapiImage(item?.image)?.url}
													>
														<div className={styles.itemContent}>
															<div className={`${styles.item_img} `}>
																<img
																	src={StrapiImage(item?.thumb)?.url}
																	className={`${styles.thumbImg} img-responsive`}
																	alt="Talent1"
																/>
																<img src={plus.src} className={styles.plusIcn} alt="" />
															</div>
															<div className="f_r_aj_between pt_30">
																<div>
																	<h4 className="text_md font_primary f_w_m">{item.name}</h4>
																	<h6 className="text_xs opacity_80">{item.location}</h6>
																</div>
															</div>
														</div>
													</a>
												</LightGallery>
											)}
										</>
									)}
									{/* <LightGallery
										speed={100}
										plugins={[lgThumbnail, lgZoom]}
										thumbnail={true}
									>
										<a
											href={StrapiImage(item?.image)?.url}
											data-src={StrapiImage(item?.image)?.url}
											data-thumb={StrapiImage(item?.image)?.url}
										>
											<div className={styles.itemContent}>
												<div className={`${styles.item_img} pb_30`}>
													<img
														src={StrapiImage(item?.thumb)?.url}
														className={`${styles.thumbImg} img-responsive`}
														alt="Talent1"
													/>
													{console.log(item, " item")}
													{item.youTubeLink && (
														<img src={playIcn.src} className={styles.playIcn} alt="" />
													)}
												</div>
												<h4 className="text_md">{item.name}</h4>
												<h6 className="text_xs opacity_80">{item.location}</h6>
											</div>
										</a>
									</LightGallery> */}
									{/* <div className={styles.itemContent}>
										<div className={`${styles.item_img} pb_30`}>
											<img src={Talent1.src} className="img-responsive" alt="Talent1" />
										</div>
										<h4 className="text_md">{item.name}</h4>
										<h6 className="text_xs opacity_80">{item.location}</h6>
									</div> */}
								</SwiperSlide>
							))}
						</Swiper>
						<div className={`${styles.progressBar} m_t_30 swiper-pagination2`}></div>
						<div className={`${styles.arrowSection} f_w_a_j_center`}>
							<button className={`${styles.customPrev}`} id="customPrev">
								<img src={arrow_btn.src} alt="icon" />
							</button>
							<button className={styles.customNext} id="customNext">
								<img src={arrow_btn.src} alt="icon" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.btn_section}  f_w_a_j_center`}>
				<div className={`${styles.BtnBx}`}>
					{pdfTalent.data.cautionNotice.url && (
						<a
							href={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${pdfTalent.data.cautionNotice.url}`}
							target="_blank"
							rel="noreferrer"
						>
							<Button
								buttonType="four"
								condition={"white"}
								title={"Job Disclaimer and Caution Notice"}
							/>
						</a>
					)}
				</div>
				<div className={`${styles.BtnBx}`}>
					{pdfTalent.data.codeOfConduct.url && (
						<a
							href={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${pdfTalent.data.codeOfConduct.url}`}
							target="_blank"
							rel="noreferrer"
						>
							<Button
								buttonType="four"
								condition={"white"}
								title={"Employee Code of Conduct"}
							/>
						</a>
					)}
				</div>
			</div>

			<MediaPopupContent isOpen={isOpen} isClose={closePopup}>
				{console.log(selectedBlog, "  selectedBlog")}

				{selectedBlog && (
					<div className={styles.popupContent}>
						<ContentFromCms>{selectedBlog?.poemsContent}</ContentFromCms>
					</div>
				)}
			</MediaPopupContent>
		</div>
	);
}
