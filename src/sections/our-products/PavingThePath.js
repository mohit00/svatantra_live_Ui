// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/our-products/PavingThePath.module.scss";

// IMAGES //
import check from "../../../public/img/check.svg";

// DATA //

/** PavingThePath Component */
export default function PavingThePath({
	title,
	description,
	subTitle,
	features,
}) {
	return (
		<section className={`${styles.PavingThePath} pb_80`}>
			<div className="container">
				<div className={`${styles.title_wrap} pb_40`}>
					<h2 className="text_xxxl color_primary pb_20">{title}</h2>
					<p className="text_md color_light_black opacity_8">{description}</p>
				</div>
				<div>
					<h5 className="text_lg font_primary f_w_m">{subTitle}</h5>
				</div>
				<div className={`${styles.keyfeatureFlex} pt_30`}>
					{features.map((feature, index) => (
						<div key={index} className={`${styles.item}`}>
							<div className={`${styles.circleBox} pb_30`}>
								<p className={`${styles.firstBox} text_sm color_light_black`}>
									{index + 1}
								</p>
								<p className={`${styles.secondBox}`}>
									<img src={check.src} alt="icon" />
								</p>
							</div>
							<div className={styles.itemContent}>
								<p className="text_sm color_light_black opacity_8">{feature}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
