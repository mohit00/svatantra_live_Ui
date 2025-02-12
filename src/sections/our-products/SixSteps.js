// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/our-products/SixSteps.module.scss";

// IMAGES //

// DATA //

/** SixSteps Component */
export default function SixSteps({ title, steps }) {
	return (
		<section className={`${styles.SixSteps} ptb_80`}>
			<div className="container">
				<div className={`${styles.title_wrap} pb_40`}>
					<h2 className="text_xxxl color_white">{title}</h2>
				</div>
				<div className={`${styles.keyfeatureFlex}`}>
					{steps.map((step, index) => (
						<div key={index} className={`${styles.item}`}>
							<div className={`${styles.circleBox} pb_30`}>
								<img src={step.icon} alt={step.title} />
							</div>
							<div className={styles.itemContent}>
								<h5 className="text_md color_light_black font_primary pb_20">
									{step.title}
								</h5>
								<p className="text_xs color_light_black font_secondary opacity_8">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
