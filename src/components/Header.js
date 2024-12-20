// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

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
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			<div className={`${styles.header_section} header_container`}>
				<div className={`${styles.header_inside}`}>
					{/* Logo wrap */}
					<Link href="/">
						<div className={styles.image_wrap}>
							<Image src={HeaderLogo} alt="Logo" />
						</div>
					</Link>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
						<div className={styles.links}>
							<Link href="javascript:void(0)">
								<div className={styles.link_title}>About</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="javascript:void(0)">
								<div className={styles.link_title}>Our Finance</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="javascript:void(0)">
								<div className={styles.link_title}>Digitally Svatantra</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="javascript:void(0)">
								<div className={styles.link_title}>Our Impact</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="javascript:void(0)">
								<div className={styles.link_title}>For Investors</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="javascript:void(0)">
								<div className={styles.link_title}>Careers</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="javascript:void(0)">
								<div className={styles.link_title}>Media</div>
							</Link>
						</div>
					</div>

					{/* Hamburger icon visible in mobile only */}
					<div className={styles.hamburger_icon} onClick={toggleSidebar}>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
					</div>
				</div>
			</div>
		</div>
	);
}
