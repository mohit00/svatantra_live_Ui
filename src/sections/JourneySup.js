// MODULES //
import { useEffect } from "react";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/JourneySup.module.scss";

// IMAGES //
import img_20 from "../../public/img/year/20.svg";
import img_24 from "../../public/img/year/13.svg";
import img_23 from "../../public/img/year/12.svg";
import img1 from "../../public/img/year/img1.jpg";
import img2 from "../../public/img/year/img2.jpg";

// DATA //

/** JourneySup Section */
export default function JourneySup({ gsap, ScrollTrigger }) {
	/** */
	const scrollAnimation = () => {
		const winH = window.innerHeight;
		const tl = gsap.timeline();

		ScrollTrigger.create({
			trigger: ".mainBox",
			start: "top top",
			end: `+=${winH}`,
			markers: true,
			pin: true,
			scrub: true,
			animation: tl,
		});
	};

	useEffect(() => {
		scrollAnimation();
	}, []);

	return (
		<section className={styles.JourneySup}>
			<div className="container">
				<h1 className="text_xxxl color_primary pb_30">
					Building a legacy of growth and <br />
					change
				</h1>
				<p className="text_reg_20 opacity_8 pb_50">
					A story of bold steps, innovation, and lasting impact from a single <br />
					branch to India&apos;s second-largest MFI.
				</p>
				<div className={`${styles.mainBox} mainBox`}>
					<div className={`${styles.stickyYear} stickyYear`}>
						<img
							src={img_20.src}
							alt="yearNumber20"
							className={`${styles.year20} year20`}
						/>
					</div>
					<div className={`${styles.contentBox} contentBox`}>
						<div className={`${styles.box1} box1`}>
							<img src={img_24.src} className={`${styles.number} number`} />
							<div className={`${styles.content} content`}>
								<h1 className="text_reg font_secondary f_w_b">February</h1>
								<p className="">Svatantra Microfin founded by Ananya Birla.</p>
								<img src={img1.src} />
							</div>
						</div>
						<div className={`${styles.box1} box1`}>
							<img src={img_24.src} className={`${styles.number} number`} />
							<div className={`${styles.content} content`}>
								<h1 className="text_reg font_secondary f_w_b">February</h1>
								<p className="">Svatantra Microfin founded by Ananya Birla.</p>
								<img src={img1.src} />
							</div>
						</div>
						<div className={`${styles.box1} box1`}>
							<img src={img_24.src} className={`${styles.number} number`} />
							<div className={`${styles.content} content`}>
								<h1 className="text_reg font_secondary f_w_b">February</h1>
								<p className="">Svatantra Microfin founded by Ananya Birla.</p>
								<img src={img1.src} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
