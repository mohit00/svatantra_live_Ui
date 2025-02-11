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
export default function PavingThePath() {
	return (
		<section className={`${styles.PavingThePath} pb_80`}>
			<div className="container">
				<div className={`${styles.title_wrap} pb_40`}>
					<h2 className="text_xxxl color_primary pb_20">
						Paving the path to prosperity for women entrepreneurs
					</h2>
					<p className="text_md color_light_black opacity_8">
						Svatantra’s micro finance loans have been instrumental in promoting
						entrepreneurship, especially among semi-urban and rural women, making them
						economically independent. Our microfinance loans create a supportive
						financial environment for individuals to easily start and grow their
						businesses, bringing economic stability to their lives and those around
						them.
					</p>
				</div>
				<div>
					<h5 className="text_lg font_primary f_w_m">
						Key features powering our entrepreneurs and our economy
					</h5>
				</div>
				<div className={`${styles.keyfeatureFlex} pt_30`}>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<p className={`${styles.firstBox} text_sm color_light_black`}>1</p>
							<p className={`${styles.secondBox}`}>
								<img src={check.src} alt="icon" />
							</p>
						</div>
						<div className={styles.itemContent}>
							<p className="text_sm color_light_black opacity_8">
								We provide one of the lowest interest rates in India.
							</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<p className={`${styles.firstBox} text_sm color_light_black`}>2</p>
							<p className={`${styles.secondBox}`}>
								<img src={check.src} alt="icon" />
							</p>
						</div>
						<div className={styles.itemContent}>
							<p className="text_sm color_light_black opacity_8">
								Services that enable rural and semi-urban women entrepreneurs to become
								agents of change within their communities.
							</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<p className={`${styles.firstBox} text_sm color_light_black`}>3</p>
							<p className={`${styles.secondBox}`}>
								<img src={check.src} alt="icon" />
							</p>
						</div>
						<div className={styles.itemContent}>
							<p className="text_sm color_light_black opacity_8">
								Customised solutions for entrepreneurs to achieve business goals and
								drive economic growth.
							</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<div className={`${styles.circleBox} pb_30`}>
							<p className={`${styles.firstBox} text_sm color_light_black`}>4</p>
							<p className={`${styles.secondBox}`}>
								<img src={check.src} alt="icon" />
							</p>
						</div>
						<div className={styles.itemContent}>
							<p className="text_sm color_light_black opacity_8">
								A financial ecosystem that ensures every individual experiences a
								self-reliant future.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
