// MODULES //
import { useEffect } from "react";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/MediaPopupContent.module.scss";

// IMAGES //
import close from "../../public/img/close.svg";
// DATA //

/** MediaPopupContent Component */
export default function MediaPopupContent({ children, isOpen, isClose }) {
	useEffect(() => {
		/** */
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				isClose();
			}
		};

		if (isOpen) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, isClose]);

	useEffect(() => {
		/** */
		const preventScroll = (event) => {
			event.stopPropagation();
		};
		if (isOpen) {
			document.body.style.overflow = "hidden"; // Prevents background scrolling
			document.addEventListener("wheel", preventScroll, { passive: false });
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.removeEventListener("wheel", preventScroll);
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	/** */
	const handleOverlayClick = (event) => {
		if (event.target.closest(`.${styles.popup_content}`)) {
			// If the click is inside the content area, do nothing
			return;
		}
		isClose();
	};

	if (!isOpen) return null;

	return (
		<div className={`${styles.popup} popup_overlay`} onClick={handleOverlayClick}>
			<div className={styles.parentPopup}>
				<div
					className={`${styles.popup_content} popup_content`}
					onClick={(e) => e.stopPropagation()}
				>
					<button className={styles.close_btn} onClick={isClose}>
						<img src={close.src} alt="Close" />
					</button>
					{children}
				</div>
			</div>
		</div>
	);
}
