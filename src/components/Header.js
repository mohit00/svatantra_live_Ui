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
import newArrow from "../../public/whiteArrow.svg";
// dynamically import react-scroll without SSR
const ScrollSection = dynamic(
	() => import("react-scroll").then((mod) => mod.Link),
	{
		ssr: false,
	}
);

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const dropdownRef = useRef(null);
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [isProductsOpen, setIsProductsOpen] = useState(false);
	const [isImpact, setIsImpact] = useState(false);
	// const [activeMenu, setActiveMenu] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	const [isResource, setIsResource] = useState(false);
	const [isDigital, setIsDigital] = useState(false);
	const [isMedia, setIsMedia] = useState(false);
	const devRefs = useRef([]);
	const sidebarRef = useRef(null);
	const [openMenuIndex, setOpenMenuIndex] = useState(null);
	const [activeMenu, setActiveMenu] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsMobile(window.innerWidth < 768);
			const handleResize = () => setIsMobile(window.innerWidth < 768);
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

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

	// const [data, setData] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

	const [newHeaderData, setNewHeaderData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/headers?populate[0]=pageName&populate[1]=pageName.subPages&sort[0]=order`,
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

		setOpenMenuIndex((prev) => (prev === index ? null : index));
	};

	return (
		<>
			<div
				className={`${styles.main_header} main_header ${
					openSidebar ? styles.sidebar_opened : ""
				}`}
				ref={sidebarRef}
			>
				<div className={`${styles.header_section} header_container`}>
					<div className={styles.blue}>
						<div className="container">
							<div className={styles.blueNumber}>
								<div className={`${styles.number} f_r_a_center`}>
									<svg
										width="13"
										height="13"
										viewBox="0 0 13 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.9996 9.733V11.69C13.0003 11.8717 12.963 12.0515 12.8901 12.218C12.8172 12.3845 12.7102 12.5339 12.5761 12.6567C12.442 12.7795 12.2836 12.873 12.1111 12.9312C11.9387 12.9894 11.756 13.0111 11.5747 12.9947C9.56332 12.7766 7.63128 12.0907 5.93379 10.992C4.35449 9.99045 3.01552 8.65414 2.01197 7.07797C0.907309 5.37614 0.219857 3.43855 0.00530538 1.42217C-0.0110287 1.24177 0.0104527 1.05996 0.0683815 0.888307C0.12631 0.716653 0.219418 0.558917 0.341775 0.425143C0.464133 0.291368 0.61306 0.184486 0.779074 0.111302C0.945089 0.0381173 1.12455 0.00023382 1.30604 6.3246e-05H3.26695C3.58417 -0.00305263 3.89169 0.109056 4.13221 0.315492C4.37273 0.521928 4.52983 0.808606 4.57422 1.12209C4.65699 1.74838 4.81048 2.36332 5.03177 2.95517C5.11971 3.18866 5.13874 3.44241 5.08661 3.68637C5.03448 3.93032 4.91337 4.15425 4.73763 4.33161L3.90751 5.16008C4.838 6.79325 6.19292 8.14549 7.82933 9.07413L8.65945 8.24566C8.83717 8.07027 9.06154 7.9494 9.30598 7.89737C9.55041 7.84534 9.80467 7.86434 10.0386 7.95211C10.6316 8.17296 11.2478 8.32614 11.8753 8.40874C12.1929 8.45345 12.4828 8.61306 12.6901 8.85723C12.8974 9.10139 13.0076 9.41307 12.9996 9.733Z"
											fill="white"
										/>
									</svg>

									<a href="tel:1800 666 2999" target="_blank" rel="noreferrer">
										<p className="text_xs color_white">Toll-free Number 1800 666 2999 </p>
									</a>
								</div>
								<a href="https://smartodr.in/login" target="_blank" rel="noreferrer">
									<p className="text_xs color_white">SMART ODR</p>
								</a>
							</div>
						</div>
					</div>
					<div className={`${styles.header_inside}`}>
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
											onMouseEnter={() => !isMobile && setOpenMenuIndex(index)}
											onMouseLeave={() => !isMobile && setOpenMenuIndex(null)}
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
												{/* <a href={`/${page?.pageUrl?.replace(/^\/+/, "")}`}>{item.title}</a> */}
												{item.pageName.length == 1 ? (
													<a href={`${item?.url}`}>{item.title}</a>
												) : (
													item.title
												)}
											</p>

											{openMenuIndex === index && (
												<div
													className={styles.subItem}
													onMouseEnter={() => !isMobile && setOpenMenuIndex(index)}
													onMouseLeave={() => !isMobile && setOpenMenuIndex(null)}
													onClick={(e) => e.stopPropagation()}
												>
													<ul className={styles.newBox}>
														{item.pageName.length > 1 &&
															item.pageName.map((page, pageIndex) => (
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
																			{page?.pageUrl != null ? (
																				<a href={`/${page?.pageUrl?.replace(/^\/+/, "")}`}>
																					{page.pageName}
																				</a>
																			) : (
																				page.pageName
																			)}
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
																						<a href={`/${subPage?.pageUrl?.replace(/^\/+/, "")}`}>
																							{subPage.pageName}
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

									<div className={styles.linkContact}>
										<Button
											buttonType="four"
											condition={"white"}
											title={"Contact us	"}
											isHref={true}
											link={"/contact"}
										/>
									</div>
								</>
							)}
						</div>
					</div>
					{/* Logo Section */}
				</div>
			</div>
		</>
	);
}
