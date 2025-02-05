// MODULES //
import Link from "next/link";
import { useState, useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Breadcrumb.module.scss";

// IMAGES //

// DATA //

/** Breadcrumb Component */
export default function Breadcrum({
	classname,
	link1,
	link2,
	link3,
	link4,
	link5,
	link6,
	link7,
	link8,
	link9,
	blogTitle,
	blogSlug,
	brandTitle,
	brandSlug,
	brandInnerTitle,
	brandInnerSlug,
	blackColor,
	linkTitle,
	linkTitle2,
}) {
	const [isClass, setIsClass] = useState(classname);
	const [isColor, setIsColor] = useState(blackColor);
	useEffect(() => {
		const bHeight = document.querySelector(".main_header");
		const root = document.documentElement;
		root.style.setProperty("--headerHeight", `${bHeight.offsetHeight + 20}px`);
	}, []);

	return (
		<div
			className={`${styles.breadcrumMain} 
			 ${isClass ? styles.posAbs : ""}
			 ${isColor ? styles.black : ""}`}
		>
			<div className="container">
				<div className={`${styles.breadcrumbFlex} text_sm text_600`}>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						{link2 && (
							<li>
								<Link href={`/${link2}`}>{link2}</Link>
							</li>
						)}
						{link3 && (
							<li>
								<Link href={`/${link3}`}>{link3}</Link>
							</li>
						)}
						{link4 && (
							<li>
								<Link href={`/${link4}`}>{link4}</Link>
							</li>
						)}
						{link5 && (
							<li>
								<Link href={`/${link5}`}>{linkTitle}</Link>
							</li>
						)}
						{link6 && (
							<li>
								<Link href={`/${link6}`}>{linkTitle}</Link>
							</li>
						)}
						{link7 && (
							<>
								<li>
									<Link href={`/${link7}`}>{linkTitle}</Link>
								</li>
								<li>
									<Link href={`/${link8}`}>{linkTitle2}</Link>
								</li>
							</>
						)}
						{link9 && (
							<li>
								<Link href={`/${link9}`}>{linkTitle}</Link>
							</li>
						)}
						{/* {blogTitle && (
							<li>
								<Link href={`/${blogSlug}`}>{blogTitle}</Link>
							</li>
						)}
						{brandTitle && (
							<li>
								<Link href={`/${brandSlug}`}>{brandTitle}</Link>
							</li>
						)}
						{brandInnerTitle && (
							<li>
								<Link href={`/${brandInnerSlug}`}>{brandInnerTitle}</Link>
							</li>
						)} */}
					</ul>
				</div>
			</div>
		</div>
	);
}
