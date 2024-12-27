// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";
import Button from "../../src/components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import * as Scroll from "react-scroll";
import {
	Link as ScrollSection,
	// Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Arrow from "@/../public/img/icons/arrow.svg";
import HeaderLogo from "../../public/img/home/header_logo.svg";

// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	let scroll = Scroll.animateScroll;
	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	return (
		<div
			className={`${styles.main_header} main_header ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			<div className={`${styles.header_section} header_container`}>
				<div className={`${styles.header_inside}`}>
					<div className={`${styles.header_logo}`}>
						{/* Logo wrap */}
						<Link href="/">
							<div className={styles.image_wrap}>
								<Image src={HeaderLogo} alt="Logo" />
							</div>
						</Link>
						{/* Hamburger icon visible in mobile only */}
						<div className={styles.hamburger_icon} onClick={toggleSidebar}>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
						</div>
					</div>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
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
							{/* <Link href="javascript:void(0)">
								<div className={`${styles.link_title} text_xs`}>About</div>
							</Link> */}
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
							{/* <Link href="javascript:void(0)">
								<div className={`${styles.link_title} text_xs`}>Our Impact</div>
							</Link> */}
						</div>
						<div className={styles.links}>
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
							{/* <Link href="javascript:void(0)">
								<div className={`${styles.link_title} text_xs`}>Our Finance</div>
							</Link> */}
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
							{/* <Link href="javascript:void(0)">
								<div className={`${styles.link_title} text_xs`}>
									Digitally Svatantra
								</div>
							</Link> */}
						</div>
						{/* <div className={styles.links}>
							<Link href="javascript:void(0)">
								<div className={`${styles.link_title} text_xs`}>For Investors</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="javascript:void(0)">
								<div className={`${styles.link_title} text_xs`}>Careers</div>
							</Link>
						</div> */}
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
							{/* <Link href="javascript:void(0)">
								<div className={`${styles.link_title} text_xs`}>Media</div>
							</Link> */}
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
							{/* <Link href="javascript:void(0)">
								<Button
									buttonType="secondary"
									condition={"white"}
									link={"#"}
									title={"Contact Us"}
								/>
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
