/* eslint-disable indent */
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
	const sidebarRef = useRef(null);

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

	// useEffect(() => {
	// 	const handleClickOutside = (event) => {
	// 		if (openSidebar && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
	// 			setOpenSidebar(false); // Close sidebar
	// 			setIsAboutOpen(false);
	// 			setIsProductsOpen(false);
	// 			setIsImpact(false);
	// 			setIsResource(false);
	// 			setIsDigital(false);
	// 			setIsMedia(false);
	// 			setActiveMenu(null);
	// 		}
	// 	};

	// 	// Add event listener when component mounts
	// 	document.addEventListener("click", handleClickOutside);

	// 	return () => {
	// 		// Clean up event listener when component unmounts
	// 		document.removeEventListener("click", handleClickOutside);
	// 	};
	// }, [openSidebar]);

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
	// useEffect(() => {
	// 	headerData();
	// }, []);

	/** Fetching data of Header */
	// const headerData = () => {
	// 	fetch(
	// 		`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/headers?populate[0]=pageName&populate[1]=pageName.subPages`,
	// 		{
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
	// 			},
	// 		}
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setData(data.data);
	// 		});
	// };

	const [newHeaderData, setNewHeaderData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/headers?populate[0]=pageName&populate[1]=pageName.subPages`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
					},
				}
			);

			const response = await res.json();
			setNewHeaderData(response);
		};

		fetchData();
	}, []);

	console.log(newHeaderData, "ddddddddd");

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

	// console.log(data || [], "headers data");

	useEffect(() => {
		const handleClickOutside = (event) => {
			// Check if click is outside sidebar
			if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
				setOpenSidebar(false);
			}
		};

		// Add event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Cleanup event listener
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const [openMenus, setOpenMenus] = useState(
		Array(newHeaderData?.data?.length).fill(false)
	);

	const toggleMenu = (index) => {
		setOpenMenus((prev) => {
			const updatedMenus = [...prev];
			updatedMenus[index] = !updatedMenus[index]; // Toggle only the clicked index
			return updatedMenus;
		});
	};

	return (
		<div
			className={`${styles.main_header} main_header ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
			ref={sidebarRef}
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
								{newHeaderData?.data?.map((item, index) => (
									<div
										key={index}
										className={`${styles.links} commonCls`}
										onMouseEnter={() =>
											!isMobile && setOpenMenus((prev) => prev.map((_, i) => i === index))
										}
										onMouseLeave={() =>
											!isMobile &&
											setOpenMenus(Array(newHeaderData.data.length).fill(false))
										}
									>
										<p
											className={`${styles.link_title} text_xs`}
											onClick={(e) => {
												if (isMobile) {
													e.stopPropagation();
													toggleMenu(index);
												}
											}}
										>
											{item.title} {/*main name*/}
										</p>

										{openMenus[index] && (
											<div
												className={styles.subItem}
												onMouseEnter={() =>
													!isMobile &&
													setOpenMenus((prev) => prev.map((_, i) => i === index))
												}
												onMouseLeave={() =>
													!isMobile &&
													setOpenMenus(Array(newHeaderData.data.length).fill(false))
												}
												onClick={(e) => e.stopPropagation()}
											>
												<ul className={styles.newBox}>
													{item.pageName.map((page, pageIndex) => (
														<li
															key={page.id}
															className={styles.menuItem}
															onClick={(e) => {
																if (isMobile) {
																	e.stopPropagation();
																	setActiveMenu((prev) =>
																		prev === `${index}-${pageIndex}`
																			? null
																			: `${index}-${pageIndex}`
																	);
																}
															}}
															onMouseEnter={() =>
																!isMobile && setActiveMenu(`${index}-${pageIndex}`)
															}
															onMouseLeave={() => !isMobile && setActiveMenu(null)}
														>
															<div className={`${styles.menuTitle} text_xs`}>
																<span
																	className={
																		activeMenu === `${index}-${pageIndex}` ? styles.active : ""
																	}
																>
																	<Link href={`/${page?.pageUrl?.replace(/^\/+/, "")}`}>
																		{page.pageName}
																	</Link>
																</span>
																{page.subPages.length > 0 && <img src={arrow.src} />}
															</div>

															{activeMenu === `${index}-${pageIndex}` &&
																page.subPages.length > 0 && (
																	<ul
																		className={styles.subMenu}
																		onMouseEnter={() =>
																			!isMobile && setActiveMenu(`${index}-${pageIndex}`)
																		}
																		onMouseLeave={() => !isMobile && setActiveMenu(null)}
																		onClick={(e) => e.stopPropagation()}
																	>
																		{page.subPages.map((subPage) => (
																			<li
																				key={subPage.id}
																				className={`${styles.subMenuItem} text_xs`}
																			>
																				<a href={subPage.pageUrl}>
																					{/* {subPage.pageName} */}
																					<Link href={`/${subPage?.pageUrl?.replace(/^\/+/, "")}`}>
																						{subPage.pageName}
																					</Link>{" "}
																					{/*secondLevelLinking*/}
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
								))}

								<div className={styles.links}>
									<Button
										buttonType="secondary"
										condition={"white"}
										link={"#"}
										title={"Contact Us"}
									/>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
