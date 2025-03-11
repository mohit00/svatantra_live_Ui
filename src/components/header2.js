// MODULES //
import { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Button from "./Buttons/Button";

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
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const sidebarRef = useRef(null);
	// Ensure client-side rendering
	useEffect(() => {
		setIsClient(true);
	}, []);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar((prev) => !prev);
	};

	/** */
	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsMobile(window.innerWidth < 768);
			/** */
			const handleResize = () => setIsMobile(window.innerWidth < 768);
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	useEffect(() => {
		/** */
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
						{/* Logo Wrap */}
						<Link href="/">
							<div className={styles.image_wrap}>
								<Image src={HeaderLogo} alt="Logo" priority />
							</div>
						</Link>
						{/* Hamburger Icon for Mobile */}
						<div className={styles.hamburger_icon} onClick={toggleSidebar}>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
						</div>
					</div>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
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

								{/* <div className={styles.links}>
									<ScrollSection
										onClick={toggleSidebar}
										activeClass="active"
										to="OurFinance"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
										className={`${styles.link_title} text_xs`}
									>
										Our Finance
									</ScrollSection>
								</div> */}
								<div className={styles.links}>
									<ul className={styles.menuItemNew}>
										<a
											href="https://investors.svatantramicrofin.com/composition-of-the-board-and-kmp"
											target="_blank"
											rel="noreferrer"
										>
											Resources
										</a>
										{/* {isOpen && (
												<span className={styles.hiddenItem}>
													<li>Svatantra Microfin</li>
													<li>Chaitanya India</li>
													<li>Svatantra Micro Housing</li>
												</span>
											)} */}
									</ul>
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
