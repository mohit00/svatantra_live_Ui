// MODULES //
import { useEffect } from "react";

// COMPONENTS //
import Button from "../../src/components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import { useInView } from "react-intersection-observer";

// UTILS //

// STYLES //
import styles from "@/styles/sections/Svatantra.module.scss";

// IMAGES //

// DATA //

/** Svatantra Component */
export default function Svatantra({ gsap, ScrollTrigger }) {
	// useEffect(() => {
	// 	let Anim2, independentTimeline, scrollTriggerInstance;

	// 	/** First animation triggered by ScrollTrigger */
	// 	function Anim2Animation() {
	// 		Anim2 = gsap.timeline({
	// 			onComplete: () => {
	// 				startIndependentAnimations();
	// 			},
	// 		});

	// 		Anim2.to(`.${styles.OverlayWrap}`, { width: "100%" }, "first")
	// 			.to(
	// 				`.${styles.left_box}`,
	// 				{
	// 					x: 0,
	// 					opacity: 1,
	// 				},
	// 				"first"
	// 			)
	// 			.to(
	// 				`.${styles.box_1}`,
	// 				{
	// 					x: 0,
	// 				},
	// 				"first"
	// 			);

	// 		scrollTriggerInstance = ScrollTrigger.create({
	// 			animation: Anim2,
	// 			trigger: `.${styles.svatantra_section}`,
	// 			start: "top bottom-=200px",
	// 			end: "bottom bottom-=200px",
	// 			scrub: 1,
	// 			markers: false,
	// 		});
	// 	}

	// 	/** Independent animations after the first one */
	// 	function startIndependentAnimations() {
	// 		independentTimeline = gsap.timeline({
	// 			onComplete: () => {
	// 				cleanupAnimations();
	// 			},
	// 		});

	// 		independentTimeline
	// 			.to(`.${styles.box_2}`, { x: 0, duration: 1 })
	// 			.to(`.${styles.box_3}`, { x: 0, duration: 1 });
	// 	}

	// 	/** Cleanup animations and ScrollTrigger */
	// 	function cleanupAnimations() {
	// 		if (Anim2) {
	// 			Anim2.kill();
	// 		}
	// 		if (independentTimeline) {
	// 			independentTimeline.kill();
	// 		}
	// 		if (scrollTriggerInstance) {
	// 			scrollTriggerInstance.kill();
	// 		}
	// 	}

	// 	Anim2Animation();

	// 	// Clean up on component unmount
	// 	return () => {
	// 		cleanupAnimations();
	// 	};
	// }, []);
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		let Anim2;

		if (inView) {
			/** First animation */
			Anim2 = gsap.timeline();

			Anim2.to(`.${styles.OverlayWrap}`, { width: "100%", duration: 2 }, "first")
				.to(
					`.${styles.left_box}`,
					{
						x: 0,
						opacity: 1,
						duration: 2,
					},
					"first"
				)
				.to(
					`.${styles.box_1}`,
					{
						x: 0,
						duration: 2,
					},
					"first"
				)
				.to(`.${styles.box_2}`, { x: 0, duration: 0.8 }, "second")
				.to(`.${styles.box_3}`, { x: 0, duration: 0.8 }, "third");
		}

		// Cleanup on
		return () => {
			if (Anim2) Anim2.kill();
		};
	}, [inView]);
	return (
		<div className={`${styles.svatantra_section} ptb_100`} name="About" ref={ref}>
			<div className={styles.svatantra_wrapper}>
				<div className={`${styles.OverlayWrap}`}></div>
				<div className={`${styles.left_boxWrap}`}>
					<div className={styles.left_box}>
						<h2 className="section_title">We are Svatantra</h2>
						<p className={`${styles.para_width} text_reg pt_10 opacity_80`}>
							Svatantra is for the millions of foundational entrepreneurs who are the
							backbone of India&lsquo;s growth story. 
							{/* These visionary individuals, with
							grit and determination, fuel the engines of progress, propelling our
							nation towards a brighter future. */}
						</p>
						<div className={`${styles.BtnBx} pt_20 `}>
							<Button
								isHref
								buttonType="secondary"
								condition={"white"}
								link={"/we-are-svatantra/about-us"}
								title={"Grow More"}
							/>
						</div>
					</div>
				</div>

				<div className={styles.right_box_wrapper}>
					<div className={styles.right_box}>
						<div className={`${styles.box} ${styles.box_1} f_r_a_center`}>
							<div className={styles.title}>
								<h5>First</h5>
							</div>
							<div className={styles.desc}>
								<h6>to receive NBFC-MFI license from RBI</h6>
							</div>
						</div>
						<div className={`${styles.box} ${styles.box_2} f_r_a_center`}>
							<div className={styles.title}>
								<h5>Second</h5>
							</div>
							<div className={styles.desc}>
								<h6>largest MFI in the country</h6>
							</div>
						</div>
						<div className={`${styles.box} ${styles.box_3} f_r_a_center`}>
							<div className={styles.title}>
								<h5>Largest PE</h5>
							</div>
							<div className={styles.desc}>
								<h6>investment in the sector</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
