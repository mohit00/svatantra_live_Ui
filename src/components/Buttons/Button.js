/* eslint-disable indent */
// MODULES //
import Link from "next/link";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Buttons/Button.module.scss";

// IMAGES //
import btnArrow from "../../../public/img/home/BtnArrow.svg";
import btnArrowBlack from "../../../public/img/home/BtnArrowBlack.svg";

// DATA //

/** Button Component */
const Button = ({ buttonType, link, title, condition, isButton, isHref }) => {
	switch (buttonType) {
		case "primary":
			return (
				<>
					{isHref ? (
						<Link href={link}>
							<a className={styles.btn_primary}>
								<span className={styles.span_inner}>
									<img src={btnArrow.src} className={`${styles.btn_arrow}`} />
								</span>
							</a>
						</Link>
					) : (
						<button className={styles.btn_primary}>
							<span className={styles.span_inner}>
								<img src={btnArrow.src} className={`${styles.btn_arrow}`} />
							</span>
						</button>
					)}
				</>
			);
		case "secondary":
			return (
				// <Link >
				<div>
					{isHref ? (
						<a
							className={`${styles.btn_secondary} ${condition ? styles.white : ""}`}
							href={link}
						>
							<span className={styles.btn_outer_span}>
								<span
									className={`${styles.btn_inner_circle} ${styles.btn_inner_right}`}
								>
									<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
								</span>
								<span className={`${styles.btn_inner_text} text_xs color_white f_w_m`}>
									{title}
								</span>
								<span className={`${styles.btn_inner_circle} ${styles.btn_inner_left}`}>
									<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
								</span>
							</span>
						</a>
					) : (
						<button
							className={`${styles.btn_secondary} ${condition ? styles.white : ""}`}
						>
							<span className={styles.btn_outer_span}>
								<span
									className={`${styles.btn_inner_circle} ${styles.btn_inner_right}`}
								>
									<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
								</span>
								<span className={`${styles.btn_inner_text} text_xs color_white f_w_m`}>
									{title}
								</span>
								<span className={`${styles.btn_inner_circle} ${styles.btn_inner_left}`}>
									<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
								</span>
							</span>
						</button>
					)}
				</div>
				// </Link>
			);

		case "ternary":
			return (
				<Link href={link}>
					<a className={`${styles.btn_third} ${condition ? styles.white : ""}`}>
						<span className={styles.btn_outer_span}>
							<span className={`${styles.btn_inner_circle} ${styles.btn_inner_left}`}>
								<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
							</span>
							<span className={`${styles.btn_inner_text} text_xxs f_w_s_b`}>
								{title}
							</span>
							<span className={`${styles.btn_inner_circle} ${styles.btn_inner_right}`}>
								<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
							</span>
						</span>
					</a>
				</Link>
			);

		case "four":
			return (
				// <Link >
				<div>
					<a
						className={`${styles.btn_secondary} ${condition ? styles.white : ""}`}
						href={link}
					>
						<span className={styles.btn_outer_span}>
							<span className={`${styles.btn_inner_circle} ${styles.btn_inner_right}`}>
								<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
							</span>
							<button
								type="submit"
								className={`${styles.btn_inner_text} text_xs color_white f_w_m`}
							>
								{title}
							</button>
							<span className={`${styles.btn_inner_circle} ${styles.btn_inner_left}`}>
								<img src={btnArrow.src} className={`${styles.btn_arrow1}`} alt="" />
							</span>
						</span>
					</a>
				</div>
				// </Link>
			);
		case "five":
			return (
				// <Link >
				<div>
					<a
						className={`${styles.btn_five} ${condition ? styles.white : ""}`}
						href={link}
					>
						<span className={styles.btn_outer_span}>
							<span className={`${styles.btn_inner_circle} ${styles.btn_inner_right}`}>
								<img
									src={btnArrowBlack.src}
									className={`${styles.btn_arrow1}`}
									alt=""
								/>
							</span>
							<button className={`${styles.btn_inner_text} text_xs color_light_black`}>
								{title}
							</button>
							<span className={`${styles.btn_inner_circle} ${styles.btn_inner_left}`}>
								<img
									src={btnArrowBlack.src}
									className={`${styles.btn_arrow1}`}
									alt=""
								/>
							</span>
						</span>
					</a>
				</div>
				// </Link>
			);
	}
};
export default Button;
