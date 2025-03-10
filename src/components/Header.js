/* eslint-disable require-jsdoc */
// MODULES //
import { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Button from "../../src/components/Buttons/Button";

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// SERVICES //
import { getHeadersData } from "../services/header";

// IMAGES //
import HeaderLogo from "../../public/img/home/header_logo.svg";
import arrow from "../../public/img/caret.svg.svg";

// Dynamically import react-scroll without SSR
const ScrollSection = dynamic(
	() => import("react-scroll").then((mod) => mod.Link),
	{
		ssr: false,
	}
);

// DATA //
/** Data Fetching getInvestors  */
// export async function getServerSideProps() {
// 	const headerData = await getHeadersData();
// 	console.log(headerData);

// 	return {
// 		props: { data: headerData },
// 	};
// }

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const dropdownRef = useRef(null);
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [isProductsOpen, setIsProductsOpen] = useState(false);
	const [isImpact, setIsImpact] = useState(false);
	const [activeMenu, setActiveMenu] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	const [isResource, setIsResource] = useState(false);
	const [isDigital, setIsDigital] = useState(false);
	const [isMedia, setIsMedia] = useState(false);
	const devRefs = useRef([]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsMobile(window.innerWidth < 768);
			const handleResize = () => setIsMobile(window.innerWidth < 768);
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	const digitalData = [
		{ title: "Life at Svatantra", link: "/careers", subItems: [] },
		{ title: "Join us", link: "/careers/job-opening", subItems: [] },
	];

	const mediaData = [
		{ title: "Blogs", link: "/media/blogs", subItems: [] },
		{ title: "Events", link: "/media/events", subItems: [] },
		{
			title: "Press Release",
			link: "/media/press-release",
			subItems: [],
		},
		{
			title: "Media Mention",
			link: "/media/media-mention",
			subItems: [],
		},
		{ title: "Gallery", link: "/media/gallery", subItems: [] },
		{
			title: "Corporate Brochure",
			link: "/media/leadership",
			subItems: [],
		},
		{ title: "Awards", link: "/media/awards", subItems: [] },
	];

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsAboutOpen(false);
				setIsImpact(false);
				setIsResource(false);
				setIsDigital(false);
				setIsMedia(false);
				setActiveMenu(null);
				// setIsOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	// Ensure client-side rendering
	useEffect(() => {
		setIsClient(true);
	}, []);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar((prev) => !prev);
	};

	/** */
	const handleMenuClick = (index, e) => {
		e.stopPropagation();

		setActiveMenu((prev) => (prev === index ? null : index));
	};

	useEffect(() => {
		if (isClient) {
			const devElements = devRefs.current;
			if (devElements.length >= 2) {
				devElements[devElements.length - 1].classList.add(styles.rightShift);
				devElements[devElements.length - 2].classList.add(styles.rightShift);
			}
		}
	}, [isClient]);

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	/** Fetch data on load  */
	useEffect(() => {
		headerData();
	}, []);

	/** Fetching data of Header */
	const headerData = () => {
		fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/headers?populate[0]=pageName&populate[1]=pageName.subPages`,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setData(data.data);
			});
	};

	const menuData =
		data?.[4]?.pageName?.map((page) => ({
			title: page.pageName, // Page title
			link: page.pageUrl ? page.pageUrl : "#", // If URL is null, provide a fallback
			subItems:
				page.subPages?.map((subPage) => ({
					title: subPage.pageName,
					link: subPage.pageUrl,
				})) || [],
		})) || [];

	const resourcesData =
		data?.[7]?.pageName?.map((page) => ({
			title: page.pageName, // Page title
			link: page.pageUrl ? page.pageUrl : "#", // If URL is null, provide a fallback
			subItems:
				page.subPages?.map((subPage) => ({
					title: subPage.pageName,
					link: subPage.pageUrl,
				})) || [],
		})) || [];

	console.log(data || [], "headers data");

	// useEffect(() => {
	// 	const handleClickOutside = (event) => {
	// 		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
	// 			setIsAboutOpen(false);
	// 			setIsProductsOpen(false);
	// 			setIsImpact(false);
	// 			setIsResource(false);
	// 			setIsDigital(false);
	// 			setIsMedia(false);
	// 			setActiveMenu(null); // Close active submenu if any
	// 		}
	// 	};

	// 	document.addEventListener("mousedown", handleClickOutside);
	// 	return () => {
	// 		document.removeEventListener("mousedown", handleClickOutside);
	// 	};
	// }, []);

	return (
		<div
			className={`${styles.main_header} main_header ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			<div className={`${styles.header_section} header_container`}>
				<div className={`${styles.header_inside}`}>
					{/* Logo Section */}
					<div className={`${styles.header_logo}`}>
						<Link href="/">
							<div className={styles.image_wrap}>
								<Image src={HeaderLogo} alt="Logo" priority />
							</div>
						</Link>
						<div className={styles.hamburger_icon} onClick={toggleSidebar}>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
						</div>
					</div>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap} ${styles.mobile}`}>
						{isClient && (
							<>
								<div
									className={`${styles.links} commonCls`}
									onMouseEnter={() => !isMobile && setIsAboutOpen(true)}
									onMouseLeave={() => !isMobile && setIsAboutOpen(false)}
									ref={(el) => (devRefs.current[0] = el)}
								>
									<ScrollSection
										activeClass="active"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
										className={`${styles.link_title} text_xs`}
									>
										<p
											className={`${styles.link_title} text_xs`}
											onClick={(e) => {
												if (isMobile) {
													e.stopPropagation();
													setIsAboutOpen((prev) => !prev);
												}
											}}
										>
											{data?.[0]?.title || ""}
										</p>
									</ScrollSection>

									{isAboutOpen && (
										<div
											className={styles.subItem}
											onMouseEnter={() => !isMobile && setIsAboutOpen(true)} // Keep open when hovering inside
											onMouseLeave={() => !isMobile && setIsAboutOpen(false)} // Close only when fully leaving
											onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
										>
											<ul className={styles.newBox}>
												{data?.[0]?.pageName?.map((menu, index) => (
													<li
														key={index}
														className={styles.menuItem}
														onClick={(e) => {
															if (isMobile) {
																e.stopPropagation();
																setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
															}
														}}
														onMouseEnter={() => !isMobile && setActiveMenu(index)}
														onMouseLeave={() => !isMobile && setActiveMenu(null)}
													>
														<div className={`${styles.menuTitle} text_xs`}>
															{/* Agar subItems ho to span me, warna anchor tag */}
															{menu.subItems?.length > 0 ? (
																<span className={activeMenu === index ? styles.active : ""}>
																	{menu.pageName}
																</span>
															) : (
																<a href={menu.pageUrl} className={styles.noSubLink}>
																	{menu.pageName}
																</a>
															)}
															{/* Agar subItems hain to arrow show karo */}
															{menu.subItems?.length > 0 && <img src={arrow.src} />}
														</div>

														{/* Submenu ko show/hide karne ka logic */}
														{activeMenu === index && menu.subItems?.length > 0 && (
															<ul
																className={styles.subMenu}
																onMouseEnter={() => !isMobile && setActiveMenu(index)} // Keep submenu open on hover
																onMouseLeave={() => !isMobile && setActiveMenu(null)} // Close only when fully leaving submenu
																onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
															>
																{menu.subItems.map((subItem, subIndex) => (
																	<li key={subIndex} className={`${styles.subMenuItem} text_xs`}>
																		<a href={subItem.link}>{subItem.title}</a>
																	</li>
																))}
															</ul>
														)}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
								<div
									className={`${styles.links} commonCls`}
									onMouseEnter={() => !isMobile && setIsProductsOpen(true)}
									onMouseLeave={() => !isMobile && setIsProductsOpen(false)}
									ref={(el) => (devRefs.current[0] = el)}
								>
									<ScrollSection
										activeClass="active"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
										className={`${styles.link_title} text_xs`}
									>
										<p
											className={`${styles.link_title} text_xs`}
											onClick={(e) => {
												if (isMobile) {
													e.stopPropagation();
													setIsProductsOpen((prev) => !prev);
												}
											}}
										>
											{data?.[5]?.title || ""}
										</p>
									</ScrollSection>

									{isProductsOpen && (
										<div
											className={styles.subItem}
											onMouseEnter={() => !isMobile && setIsProductsOpen(true)} // Keep open when hovering inside
											onMouseLeave={() => !isMobile && setIsProductsOpen(false)} // Close only when fully leaving
											onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
										>
											<ul className={styles.newBox}>
												{data?.[5]?.pageName?.map((menu, index) => (
													<li
														key={index}
														className={styles.menuItem}
														onClick={(e) => {
															if (isMobile) {
																e.stopPropagation();
																setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
															}
														}}
														onMouseEnter={() => !isMobile && setActiveMenu(index)}
														onMouseLeave={() => !isMobile && setActiveMenu(null)}
													>
														<div className={`${styles.menuTitle} text_xs`}>
															{/* Agar subItems ho to span me, warna anchor tag */}
															{menu.subItems?.length > 0 ? (
																<span className={activeMenu === index ? styles.active : ""}>
																	{menu.pageName}
																</span>
															) : (
																<a href={menu.pageUrl} className={styles.noSubLink}>
																	{menu.pageName}
																</a>
															)}
															{/* Agar subItems hain to arrow show karo */}
															{menu.subItems?.length > 0 && <img src={arrow.src} />}
														</div>

														{/* Submenu ko show/hide karne ka logic */}
														{activeMenu === index && menu.subItems?.length > 0 && (
															<ul
																className={styles.subMenu}
																onMouseEnter={() => !isMobile && setActiveMenu(index)} // Keep submenu open on hover
																onMouseLeave={() => !isMobile && setActiveMenu(null)} // Close only when fully leaving submenu
																onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
															>
																{menu.subItems.map((subItem, subIndex) => (
																	<li key={subIndex} className={`${styles.subMenuItem} text_xs`}>
																		<a href={subItem.link}>{subItem.title}</a>
																	</li>
																))}
															</ul>
														)}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>

								<div
									className={`${styles.links} commonCls`}
									onMouseEnter={() => !isMobile && setIsImpact(true)}
									onMouseLeave={() => !isMobile && setIsImpact(false)}
									ref={(el) => (devRefs.current[1] = el)}
								>
									<ScrollSection
										onClick={toggleSidebar}
										activeClass="active"
										to="OurImpact"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className={`${styles.link_title} text_xs`}
									>
										<p
											className={`${styles.link_title} text_xs`}
											onClick={(e) => {
												if (isMobile) {
													e.stopPropagation();
													setIsAboutOpen((prev) => !prev);
												}
											}}
										>
											{data?.[4]?.title || ""}
										</p>
									</ScrollSection>
									{isImpact && (
										<div
											className={styles.subItem}
											onMouseEnter={() => !isMobile && setIsImpact(true)} // Keep open when hovering inside
											onMouseLeave={() => !isMobile && setIsImpact(false)} // Close only when fully leaving
											onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
										>
											<ul className={styles.newBox}>
												{menuData.map((menu, index) => (
													<li
														key={index}
														className={styles.menuItem}
														onClick={(e) => {
															if (isMobile) {
																e.stopPropagation();
																setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
															}
														}}
														onMouseEnter={() => !isMobile && setActiveMenu(index)}
														onMouseLeave={() => !isMobile && setActiveMenu(null)}
													>
														<div className={`${styles.menuTitle} text_xs`}>
															{menu.subItems.length > 0 ? (
																<span className={activeMenu === index ? styles.active : ""}>
																	{menu.title}
																</span>
															) : (
																<a href={menu.link} className={styles.noSubLink}>
																	{menu.title}
																</a>
															)}
															{menu.subItems.length > 0 && <img src={arrow.src} />}
														</div>

														{activeMenu === index && menu.subItems.length > 0 && (
															<ul
																className={styles.subMenu}
																onMouseEnter={() => !isMobile && setActiveMenu(index)} // Keep submenu open on hover
																onMouseLeave={() => !isMobile && setActiveMenu(null)} // Close only when fully leaving submenu
																onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
															>
																{menu.subItems.map((subItem, subIndex) => (
																	<li key={subIndex} className={`${styles.subMenuItem} text_xs`}>
																		<a
																			href={
																				subItem.link !== "No URL Available" ? subItem.link : "#"
																			}
																		>
																			{subItem.title}
																		</a>
																	</li>
																))}
															</ul>
														)}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>

								<div
									className={`${styles.links} commonCls`}
									ref={dropdownRef}
									onMouseEnter={() => !isMobile && setIsResource(true)}
									onMouseLeave={() => !isMobile && setIsResource(false)}
								>
									<div>
										<ScrollSection
											onClick={toggleSidebar}
											activeClass="active"
											to="OurImpact"
											spy={true}
											smooth={true}
											offset={-100}
											duration={500}
											className={`${styles.link_title} text_xs`}
										>
											<p
												className={`${styles.link_title} text_xs`}
												onClick={(e) => {
													if (isMobile) {
														e.stopPropagation();
														setIsResource((prev) => !prev);
													}
												}}
											>
												{data?.[7]?.title || ""}
											</p>
										</ScrollSection>

										{isResource && (
											<div
												className={styles.subItem}
												onMouseEnter={() => !isMobile && setIsResource(true)} // Keep open when hovering inside
												onMouseLeave={() => !isMobile && setIsResource(false)} // Close only when fully leaving
												onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
											>
												<ul className={styles.newBox}>
													{resourcesData.map((menu, index) => (
														<li
															key={index}
															className={styles.menuItem}
															onClick={(e) => {
																if (isMobile) {
																	e.stopPropagation();
																	setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
																}
															}}
															onMouseEnter={() => !isMobile && setActiveMenu(index)}
															onMouseLeave={() => !isMobile && setActiveMenu(null)}
														>
															<div className={`${styles.menuTitle} text_xs`}>
																{menu.subItems.length > 0 ? (
																	<span className={activeMenu === index ? styles.active : ""}>
																		{menu.title}
																	</span>
																) : (
																	<a href={menu.link} className={styles.noSubLink}>
																		{menu.title}
																	</a>
																)}
																{menu.subItems.length > 0 && <img src={arrow.src} />}
															</div>

															{activeMenu === index && menu.subItems.length > 0 && (
																<ul
																	className={styles.subMenu}
																	onMouseEnter={() => !isMobile && setActiveMenu(index)} // Keep submenu open on hover
																	onMouseLeave={() => !isMobile && setActiveMenu(null)} // Close only when fully leaving submenu
																	onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
																>
																	{menu.subItems.map((subItem, subIndex) => (
																		<li
																			key={subIndex}
																			className={`${styles.subMenuItem} text_xs`}
																		>
																			<a href={subItem.link}>{subItem.title}</a>
																		</li>
																	))}
																</ul>
															)}
														</li>
													))}
												</ul>
											</div>
										)}
									</div>
								</div>
								<div
									className={`${styles.links} commonCls`}
									onMouseEnter={() => !isMobile && setIsDigital(true)}
									onMouseLeave={() => !isMobile && setIsDigital(false)}
									ref={(el) => (devRefs.current[2] = el)}
								>
									<ScrollSection
										onClick={toggleSidebar}
										activeClass="active"
										// to="DigitallySvatantra"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
										className={`${styles.link_title} text_xs`}
									>
										<p
											className={`${styles.link_title} text_xs`}
											onClick={(e) => {
												if (isMobile) {
													e.stopPropagation();
													setIsDigital((prev) => !prev);
												}
											}}
										>
											{data?.[1]?.title || ""}
										</p>
									</ScrollSection>
									{isDigital && (
										<div
											className={styles.subItem}
											onMouseEnter={() => !isMobile && setIsDigital(true)} // Keep open when hovering inside
											onMouseLeave={() => !isMobile && setIsDigital(false)} // Close only when fully leaving
											onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
										>
											<ul className={styles.newBox}>
												{data?.[1]?.pageName?.map((menu, index) => (
													<li
														key={index}
														className={styles.menuItem}
														onClick={(e) => {
															if (isMobile) {
																e.stopPropagation();
																setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
															}
														}}
														onMouseEnter={() => !isMobile && setActiveMenu(index)}
														onMouseLeave={() => !isMobile && setActiveMenu(null)}
													>
														<div className={`${styles.menuTitle} text_xs`}>
															{/* Agar subItems ho to span me, warna anchor tag */}
															{menu.subItems?.length > 0 ? (
																<span className={activeMenu === index ? styles.active : ""}>
																	{menu.pageName}
																</span>
															) : (
																<a href={menu.pageUrl} className={styles.noSubLink}>
																	{menu.pageName}
																</a>
															)}
															{/* Agar subItems hain to arrow show karo */}
															{menu.subItems?.length > 0 && <img src={arrow.src} />}
														</div>

														{/* Submenu ko show/hide karne ka logic */}
														{activeMenu === index && menu.subItems?.length > 0 && (
															<ul
																className={styles.subMenu}
																onMouseEnter={() => !isMobile && setActiveMenu(index)} // Keep submenu open on hover
																onMouseLeave={() => !isMobile && setActiveMenu(null)} // Close only when fully leaving submenu
																onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
															>
																{menu.subItems.map((subItem, subIndex) => (
																	<li key={subIndex} className={`${styles.subMenuItem} text_xs`}>
																		<a href={subItem.link}>{subItem.title}</a>
																	</li>
																))}
															</ul>
														)}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
								<div
									className={`${styles.links} commonCls`}
									onMouseEnter={() => !isMobile && setIsMedia(true)}
									onMouseLeave={() => !isMobile && setIsMedia(false)}
									ref={(el) => (devRefs.current[3] = el)}
								>
									<ScrollSection
										onClick={toggleSidebar}
										activeClass="active"
										to="Media"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className={`${styles.link_title} text_xs`}
									>
										<p
											className={`${styles.link_title} text_xs`}
											onClick={(e) => {
												if (isMobile) {
													e.stopPropagation();
													setIsDigital((prev) => !prev);
												}
											}}
										>
											{data?.[3]?.title || ""}
										</p>
									</ScrollSection>
									{isMedia && (
										<div
											className={styles.subItem}
											onMouseEnter={() => !isMobile && setIsMedia(true)} // Keep open when hovering inside
											onMouseLeave={() => !isMobile && setIsMedia(false)} // Close only when fully leaving
											onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
										>
											<ul className={styles.newBox}>
												{data?.[3]?.pageName?.map((menu, index) => (
													<li
														key={index}
														className={styles.menuItem}
														onClick={(e) => {
															if (isMobile) {
																e.stopPropagation();
																setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
															}
														}}
														onMouseEnter={() => !isMobile && setActiveMenu(index)}
														onMouseLeave={() => !isMobile && setActiveMenu(null)}
													>
														<div className={`${styles.menuTitle} text_xs`}>
															{/* Agar subItems ho to span me, warna anchor tag */}
															{menu.subItems?.length > 0 ? (
																<span className={activeMenu === index ? styles.active : ""}>
																	{menu.pageName}
																</span>
															) : (
																<a href={menu.pageUrl} className={styles.noSubLink}>
																	{menu.pageName}
																</a>
															)}
															{/* Agar subItems hain to arrow show karo */}
															{menu.subItems?.length > 0 && <img src={arrow.src} />}
														</div>

														{/* Submenu ko show/hide karne ka logic */}
														{activeMenu === index && menu.subItems?.length > 0 && (
															<ul
																className={styles.subMenu}
																onMouseEnter={() => !isMobile && setActiveMenu(index)} // Keep submenu open on hover
																onMouseLeave={() => !isMobile && setActiveMenu(null)} // Close only when fully leaving submenu
																onClick={(e) => e.stopPropagation()} // Prevents accidental closing on mobile
															>
																{menu.subItems.map((subItem, subIndex) => (
																	<li key={subIndex} className={`${styles.subMenuItem} text_xs`}>
																		<a href={subItem.link}>{subItem.title}</a>
																	</li>
																))}
															</ul>
														)}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
								<div className={styles.links}>
									<ul className={styles.menuItemNew}>
										<a
											href="https://smartodr.in/login"
											target="_blank"
											rel="noreferrer"
											className={`${styles.link_title} text_xs`}
										>
											Smart ODR
										</a>
									</ul>
								</div>
								<div className={styles.links}>
									<ScrollSection
										onClick={toggleSidebar}
										activeClass="active"
										to="ContactUs"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
										className={`${styles.link_title} text_xs`}
									>
										<Button
											buttonType="secondary"
											condition={"white"}
											link={"#"}
											title={"Contact Us"}
										/>
									</ScrollSection>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

{
	/* <div className={styles.subItem}>
										<ul>
											<li>
												<span className={styles.row1}>
													<p className="text_xs">Reports & statement</p>
													<img src={arrow.src} />
												</span>

												<ul>
													<li className="text_xs">Annual report</li>
												</ul>
											</li>
										</ul>
									</div> */
}
