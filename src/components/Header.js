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
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Ensure client-side renderings
	useEffect(() => {
		setIsClient(true);
	}, []);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar((prev) => !prev);
	};

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
								<div className={styles.links}>
									<ScrollSection
										onClick={toggleSidebar}
										activeClass="active"
										to="About"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
										className={`${styles.link_title} text_xs`}
									>
										About
									</ScrollSection>
								</div>
								<div className={styles.links}>
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
										Our Impact
									</ScrollSection>
								</div>
								<div className={styles.links} ref={dropdownRef}>
									<div>
										<ul className={styles.menuItemNew}>
											<p
												onClick={() => setIsOpen((prev) => !prev)}
												className={`${styles.link_title} text_xs`}
											>
												Resources
											</p>
											{isOpen && (
												<span className={styles.hiddenItem}>
													<li>
														<a
															href="https://investors.svatantramicrofin.com/composition-of-the-board-and-kmp"
															target="_blank"
															rel="noreferrer"
															className={`${styles.link_title} text_xs`}
														>
															Svatantra Microfin
														</a>
													</li>
													<li>
														<a
															href="https://www.chaitanyaindia.in/"
															target="_blank"
															rel="noreferrer"
															className={`${styles.link_title} text_xs`}
														>
															Chaitanya India
														</a>
													</li>
													<li>
														<a
															href="https://www.svatantramhfc.com/"
															target="_blank"
															rel="noreferrer"
															className={`${styles.link_title} text_xs`}
														>
															Svatantra Micro Housing
														</a>
													</li>
												</span>
											)}
										</ul>
									</div>
								</div>
								<div className={styles.links}>
									<ScrollSection
										onClick={toggleSidebar}
										activeClass="active"
										to="DigitallySvatantra"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
										className={`${styles.link_title} text_xs`}
									>
										Digitally Svatantra
									</ScrollSection>
								</div>
								<div className={styles.links}>
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
										Media
									</ScrollSection>
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
