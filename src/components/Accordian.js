"use client";
// MODULES //
import Image from "next/image";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/components/Accordian.module.scss";

// IMAGES //
import ArrowIcon from "@/../public/img/icons/acc_arrow.svg";
import PlusIcon from "../../public/img/home/add.svg";
import MinusIcon from "../../public/img/home/minus.svg";

// DATA //

/** Accordian Component */
export default function Accordian({
	index,
	isActive,
	toggleItem,
	accTitle,
	children,
	accID,
	isPlus,
	isPlusColor,
	titleClass,
	borderClass,
}) {
	return (
		<div
			className={`${styles.accordian} ${
				isActive ? styles.active : ""
			} ${borderClass} toTop`}
			data-scroll
		>
			<div
				id={accID}
				className={`${styles.question}`}
				onClick={() => toggleItem(index)}
			>
				<div className={`${styles.text} ${titleClass} `} data-scroll>
					{accTitle}
				</div>
				{isPlus ? (
					<div className={`${styles.icon} ${isActive && styles.active}`}>
						<div className={`${styles.line}`}></div>
						<div className={`${styles.line}`}></div>
					</div>
				) : isPlusColor ? (
					<div className={`${styles.icon} ${isActive && styles.active}`}>
						<div className={`${styles.line_color}`}></div>
						<div className={`${styles.line_color}`}></div>
					</div>
				) : (
					<Image
						className={`${styles.ArrowIcon} ${isActive && styles.active}`}
						src={ArrowIcon}
						width={30}
						height={27}
						alt="Accordion Arrow"
					/>
				)}
			</div>
			<div className={`${styles.answer} ${isActive && styles.active} f_w_m`}>
				{children}
			</div>
		</div>
	);
}
