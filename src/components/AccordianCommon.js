// MODULES //
import React, {
	useState,
	useRef,
	useEffect,
	useLayoutEffect,
	useCallback,
} from "react";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import BgStyles from "@/styles/sections/pages/careers/AccordionSection.module.scss";
import styles from "@/styles/components/AccordianCommon.module.scss";

// IMAGES //
import plus_arrow from "@/../public/img/icons/plus_arrow.svg";
import minus_icon from "@/../public/img/icons/minus_icon.svg";

// DATA //

/** useLayoutEffect warns during SSR, where there is nothing to measure anyway */
const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** AccordianCommon Component */
export default function AccordianCommon({
	items,
	fontStyle,
	fontWeight,
	fontFamily,
	fontColor,
	defaultIndex = 0,
	hideFirstDivider = false,
}) {
	// const [activeIndex, setActiveIndex] = useState(null);
	// defaultIndex keeps the existing "first item open" behaviour everywhere;
	// pass null to render a group collapsed.
	const [activeIndex, setActiveIndex] = useState(defaultIndex);
	const [heights, setHeights] = useState([]);
	const contentRefs = useRef([]);
	// useEffect(() => {
	// 	/** handleAccordionClick function */
	// 	const calculateHeights = () => {
	// 		const calculatedHeights = contentRefs.current.map(
	// 			(el) => el?.scrollHeight || 0
	// 		);
	// 		setHeights(calculatedHeights);
	// 	};

	// 	calculateHeights();
	// 	window.addEventListener("resize", calculateHeights); // Recalculate heights on window resize

	// 	return () => {
	// 		window.removeEventListener("resize", calculateHeights);
	// 	};
	// }, [activeIndex]);
	/**
	 * Measure every panel from the committed DOM.
	 * Returning the previous array when nothing moved is what keeps this from
	 * looping: callers pass a freshly built `items` array on every render, so an
	 * unconditional setState here would re-render, re-run the effect and repeat.
	 */
	const calculateHeights = useCallback(() => {
		setHeights((prev) => {
			const next = contentRefs.current.map((el) => el?.scrollHeight || 0);
			const unchanged =
				prev.length === next.length && prev.every((h, i) => h === next[i]);
			return unchanged ? prev : next;
		});
	}, []);

	// Measure after the commit, not during render: the open panel only gains its
	// .activeInner padding once that class lands, so a value read while
	// rendering is always short by that padding and the panel clips.
	// items?.length, not items: callers rebuild the array every render, so
	// depending on its identity would re-measure on every render forever.
	useIsomorphicLayoutEffect(() => {
		calculateHeights();
	}, [activeIndex, items?.length, calculateHeights]);

	useEffect(() => {
		window.addEventListener("resize", calculateHeights);

		// 🔥 IMPORTANT: observe DOM changes
		const observer = new MutationObserver(calculateHeights);

		contentRefs.current.forEach((el) => {
			if (el) observer.observe(el, { childList: true, subtree: true });
		});

		return () => {
			window.removeEventListener("resize", calculateHeights);
			observer.disconnect();
		};
	}, [activeIndex, items?.length, calculateHeights]);
	/** handleAccordionClick function */
	const handleAccordionClick = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};
	/** toggleAccordion */
	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	/**
	 * A nested panel finishing its own height animation makes this one taller.
	 * transitionend bubbles, so re-measuring here lets a parent grow to fit a
	 * child that has just expanded instead of clipping it.
	 */
	const handleTransitionEnd = (event) => {
		if (event.propertyName === "height") calculateHeights();
	};

	/** Open panels use the measured height; before the first measurement fall
	 * back to auto so nothing is hidden (this is also the server-rendered state) */
	const panelHeight = (index) => {
		const measured = heights[index] ?? contentRefs.current[index]?.scrollHeight;
		return measured ? `${measured}px` : undefined;
	};

	return (
		<div
			className={`${styles.accordion}${hideFirstDivider ? ` ${styles.no_first_divider}` : ""
				}`}
		>
			{items?.map((item, index) => (
				<div key={index} className={`${styles.accordionItem} b_r_12`}>
					{/* {console.log(items, "   itemsitemsitemsitemsitems")} */}
					{/* Accordion Header */}
					<div
						className={`${styles.accordionHeader} ${BgStyles.activeBgTitle_1}  ${activeIndex === index ? BgStyles.activeBgTitle : ""
							}`}
						// onClick={() => handleAccordionClick(index)}
						onClick={() => toggleAccordion(index)}
					>
						<div
							className={`${fontStyle} ${fontWeight} ${fontFamily} ${fontColor} ${fontColor} headerF`}
						>
							{item.title}
						</div>
						<span>
							{activeIndex === index ? (
								<img src={minus_icon.src} className={`${styles.AccImgMinus}`} alt="" />
							) : (
								<img src={plus_arrow.src} className={`${styles.AccImg} `} alt="" />
							)}
						</span>
					</div>

					{/* Accordion Content */}
					<div
						className={`${styles.accordionContent} ${activeIndex === index ? styles.active : ""
							} ${activeIndex === index ? BgStyles.activeBgContent : ""}`}
						ref={(el) => (contentRefs.current[index] = el)}
						onTransitionEnd={handleTransitionEnd}
						style={{
							height: activeIndex === index ? panelHeight(index) : "0px",
							overflow: "hidden",
							transition: "height 0.3s ease",
						}}
					>
						<div
							className={`${activeIndex === index ? styles.activeInner : ""
								} activeSpace`}
						>
							{item.children}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
