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
	// const [openSidebar, setOpenSidebar] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const [openSidebar, setOpenSidebar] = useState(false);
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
		/** */
		const handleClickOutside = (event) => {
			if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
				setOpenSidebar(false); // Close sidebar
			}
		};

		if (openSidebar) {
			document.addEventListener("click", handleClickOutside);
		}

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [openSidebar]);

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
									<p className={`${styles.link_title} text_xs`}>About</p>
									<div className={styles.subItem}>
										<ul>
											<li>
												ABout
												<ul>
													<li>About</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>

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

{
	/* <div className={styles.links}>Our Impact</div>

								<div className={styles.links}>Resources</div>
								<div className={styles.links}>Digitally Svatantra</div>
								<div className={styles.links}>Media</div> */
}
