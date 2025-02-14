// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Popup.module.scss";

// IMAGES //
import close from "../../public/img/close.png";

// DATA //

/** Popup Component */
export default function Popup({ isOpen, onClose, children }) {
	if (!isOpen) {
		return null;
	}
	return (
		<div className={styles.popup}>
			<div className={`${styles.Overlay}`} onClick={onClose}></div>
			<div className={`${styles.popup_content} popup_content`}>
				<button className={styles.close_btn} onClick={onClose}>
					<img src={close.src} alt="" />
				</button>
				{children}
			</div>
		</div>
	);
}
