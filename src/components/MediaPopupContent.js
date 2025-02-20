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

	/** */
	const handleOverlayClick = (event) => {
		if (event.target.classList.contains("popup_overlay")) {
			isClose();
		}
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
