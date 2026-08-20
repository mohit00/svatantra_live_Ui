// MODULES //
import { useEffect, useRef } from "react";

// COMPONENTS //
import Popup from "@/components/Popup";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/IpoDisclaimerPopup.module.scss";

// IMAGES //

// DATA //
import disclaimer from "@/data/ipo-disclaimer.json";

/**
 * IpoDisclaimerPopup Component
 *
 * Gate shown before the DRHP and the Draft Abridged Prospectus can be opened.
 * Wording comes from "Project Udaan - Website Disclaimer - DRHP (Company).docx"
 * and lives verbatim in src/data/ipo-disclaimer.json.
 *
 * The popup is one continuous scrollable area: title, the full disclaimer, then
 * "I Confirm" / "I Do Not Confirm" at the very bottom. The buttons sit in normal
 * flow, so the reader only reaches them after scrolling through the whole text -
 * deliberately not a fixed footer.
 *
 * Only "I Confirm" opens the document. "I Do Not Confirm", the X and Escape all
 * do the same thing: close the popup and leave the user on the IPO page. There
 * is deliberately no follow-up message or second popup.
 *
 * Rendered once per page, not once per row: the IPO tables sit inside
 * AccordianCommon, which measures panel scrollHeight, so a popup per row would
 * disturb that measurement.
 *
 * @param {boolean} isOpen - whether a gated document is awaiting a decision
 * @param {object} document - the pending row ({ title, url }), or null. Not
 *   displayed; only used to reset the scroll position per document.
 * @param {Function} onConfirm - called on "I Confirm"; opens the document
 * @param {Function} onClose - called on I Do Not Confirm, X, backdrop and Escape
 */
export default function IpoDisclaimerPopup({
	isOpen,
	document: pendingDocument,
	onConfirm,
	onClose,
}) {
	const scrollAreaRef = useRef(null);

	// The reader should start at the top of the disclaimer, not wherever the
	// previous scroll left off.
	useEffect(() => {
		if (isOpen && scrollAreaRef.current) scrollAreaRef.current.scrollTop = 0;
	}, [isOpen, pendingDocument?.url]);

	/**
	 * Freeze the page behind the popup.
	 *
	 * body overflow alone is not enough here: the site runs Lenis smooth
	 * scrolling (see utils/SmoothScrolling), which listens for wheel and touch
	 * events on the window and scrolls the page itself, ignoring body overflow.
	 * SmoothScrolling does not expose its Lenis instance, so instead of reaching
	 * into shared code this handler runs in the capture phase and stops those
	 * events before Lenis sees them:
	 *   - inside the popup's scroll area  -> stop propagation only, so the
	 *     disclaimer still scrolls natively
	 *   - anywhere else                   -> also preventDefault, so the page
	 *     behind stays put
	 */
	useEffect(() => {
		if (!isOpen) return undefined;

		const { body } = window.document;
		const previousOverflow = body.style.overflow;
		body.style.overflow = "hidden";

		/** freezeBackground function */
		const freezeBackground = (event) => {
			const area = scrollAreaRef.current;
			if (area && area.contains(event.target)) {
				event.stopPropagation();
				return;
			}
			event.preventDefault();
			event.stopPropagation();
		};

		const options = { passive: false, capture: true };
		window.addEventListener("wheel", freezeBackground, options);
		window.addEventListener("touchmove", freezeBackground, options);

		return () => {
			body.style.overflow = previousOverflow;
			window.removeEventListener("wheel", freezeBackground, { capture: true });
			window.removeEventListener("touchmove", freezeBackground, { capture: true });
		};
	}, [isOpen]);

	// Escape closes without opening the document. Popup has no key handling of
	// its own, and a consent gate should be dismissable from the keyboard.
	useEffect(() => {
		if (!isOpen) return undefined;

		/** handleKeyDown function */
		const handleKeyDown = (event) => {
			if (event.key === "Escape") onClose();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<Popup isOpen={isOpen} onClose={onClose}>
			{/* One scroll container for everything: heading, disclaimer, buttons.
				Typography is set in the module rather than with the global
				text_* classes, which are display sizes (text_md is 24px/500) and
				far too large for a long legal document. */}
			<div
				className={styles.disclaimer}
				ref={scrollAreaRef}
				role="dialog"
				aria-modal="true"
				aria-labelledby="ipo-disclaimer-title"
			>
				<h2
					id="ipo-disclaimer-title"
					className={`font_primary color_primary ${styles.title}`}
				>
					{disclaimer.title}
				</h2>

				{/* Each paragraph is a list of runs carrying the bold flags taken
					from the source .docx, so the emphasis matches the document
					rather than being decided here. */}
				{disclaimer.paragraphs.map((runs, index) => (
					<p key={index} className={styles.para}>
						{runs.map((run, runIndex) =>
							run.b ? (
								<strong key={runIndex} className={styles.strong}>
									{run.t}
								</strong>
							) : (
								<span key={runIndex}>{run.t}</span>
							)
						)}
					</p>
				))}

				{/* In normal flow at the end of the disclaimer, not a fixed footer:
					the reader reaches these by scrolling through the whole text.
					onConfirm calls window.open straight off this click so the
					browser still treats it as a user gesture. */}
				<div className={styles.actions}>
					<button
						type="button"
						className={`${styles.btn} ${styles.btn_primary}`}
						onClick={onConfirm}
					>
						{disclaimer.confirmLabel}
					</button>
					<button
						type="button"
						className={`${styles.btn} ${styles.btn_secondary}`}
						onClick={onClose}
					>
						{disclaimer.declineLabel}
					</button>
				</div>
			</div>
		</Popup>
	);
}
