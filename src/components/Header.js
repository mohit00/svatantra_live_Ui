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

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const dropdownRef = useRef(null);
	const [isAboutOpen, setIsAboutOpen] = useState(false);
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

	const menuData = [
		{
			title: "Reports & statement",
			subItems: [
				"Annual report",
				"Annual return",
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Disclosures", subItems: ["Annual report", "Annual return"] },
		{
			title: "Circulars and announcements",
			subItems: [
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Agency partners", subItems: [] },
		{ title: "Connect with us", subItems: [] },
		{ title: "Credit and grading", subItems: [] },
	];

	const aboutData = [
		{
			title: "Reports & statement",
			subItems: [
				"Annual report",
				"Annual return",
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Disclosures", subItems: ["Annual report", "Annual return"] },
		{
			title: "Circulars and announcements",
			subItems: [
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Agency partners", subItems: [] },
		{ title: "Connect with us", subItems: [] },
		{ title: "Credit and grading", subItems: [] },
	];

	const resourcesData = [
		{
			title: "Reports & statement",
			subItems: [
				"Annual report",
				"Annual return",
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Disclosures", subItems: ["Annual report", "Annual return"] },
		{
			title: "Circulars and announcements",
			subItems: [
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Agency partners", subItems: [] },
		{ title: "Connect with us", subItems: [] },
		{ title: "Credit and grading", subItems: [] },
	];

	const digitalData = [
		{
			title: "Reports & statement",
			subItems: [
				"Annual report",
				"Annual return",
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Disclosures", subItems: ["Annual report", "Annual return"] },
		{
			title: "Circulars and announcements",
			subItems: [
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Agency partners", subItems: [] },
		{ title: "Connect with us", subItems: [] },
		{ title: "Credit and grading", subItems: [] },
	];

	const mediaData = [
		{
			title: "Reports & statement",
			subItems: [
				"Annual report",
				"Annual return",
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Disclosures", subItems: ["Annual report", "Annual return"] },
		{
			title: "Circulars and announcements",
			subItems: [
				"Board of Directors and KMP",
				"List of committees",
				"ISIN reconciliation statement",
			],
		},
		{ title: "Agency partners", subItems: [] },
		{ title: "Connect with us", subItems: [] },
		{ title: "Credit and grading", subItems: [] },
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
											About
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
												{menuData.map((menu, index) => (
													<li key={index} className={styles.menuItem}>
														<div
															className={`${styles.menuTitle} text_xs`}
															onClick={(e) => {
																if (isMobile) {
																	e.stopPropagation();
																	setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
																}
															}}
															onMouseEnter={() => !isMobile && setActiveMenu(index)}
															onMouseLeave={() => !isMobile && setActiveMenu(null)}
														>
															<span className={activeMenu === index ? styles.active : ""}>
																{menu.title}
															</span>
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
																		{subItem}
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
											Our Impact
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
												{aboutData.map((menu, index) => (
													<li key={index} className={styles.menuItem}>
														<div
															className={`${styles.menuTitle} text_xs`}
															onClick={(e) => {
																if (isMobile) {
																	e.stopPropagation();
																	setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
																}
															}}
															onMouseEnter={() => !isMobile && setActiveMenu(index)}
															onMouseLeave={() => !isMobile && setActiveMenu(null)}
														>
															<span className={activeMenu === index ? styles.active : ""}>
																{menu.title}
															</span>
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
																		{subItem}
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
												Resources
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
														<li key={index} className={styles.menuItem}>
															<div
																className={`${styles.menuTitle} text_xs`}
																onClick={(e) => {
																	if (isMobile) {
																		e.stopPropagation();
																		setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
																	}
																}}
																onMouseEnter={() => !isMobile && setActiveMenu(index)}
																onMouseLeave={() => !isMobile && setActiveMenu(null)}
															>
																<span className={activeMenu === index ? styles.active : ""}>
																	{menu.title}
																</span>
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
																			{subItem}
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
											Digitally Svatantra
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
												{digitalData.map((menu, index) => (
													<li key={index} className={styles.menuItem}>
														<div
															className={`${styles.menuTitle} text_xs`}
															onClick={(e) => {
																if (isMobile) {
																	e.stopPropagation();
																	setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
																}
															}}
															onMouseEnter={() => !isMobile && setActiveMenu(index)}
															onMouseLeave={() => !isMobile && setActiveMenu(null)}
														>
															<span className={activeMenu === index ? styles.active : ""}>
																{menu.title}
															</span>
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
																		{subItem}
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
											Media
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
												{mediaData.map((menu, index) => (
													<li key={index} className={styles.menuItem}>
														<div
															className={`${styles.menuTitle} text_xs`}
															onClick={(e) => {
																if (isMobile) {
																	e.stopPropagation();
																	setActiveMenu((prev) => (prev === index ? null : index)); // Toggle submenu
																}
															}}
															onMouseEnter={() => !isMobile && setActiveMenu(index)}
															onMouseLeave={() => !isMobile && setActiveMenu(null)}
														>
															<span className={activeMenu === index ? styles.active : ""}>
																{menu.title}
															</span>
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
																		{subItem}
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
