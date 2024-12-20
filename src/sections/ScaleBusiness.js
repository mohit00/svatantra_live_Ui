// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/ScaleBusiness.module.scss";

// IMAGES //
import Map from "../../public/img/home/Map.png";

// DATA //

/** ScaleBusiness Section */
export default function ScaleBusiness() {
	return (
		<section className={styles.ScaleBusiness}>
			<div className="container">
				<div className={`${styles.BusinessFlex}`}>
					<div className={`${styles.AccordianBx}`}>
						<h2>Scale your business with our financial services</h2>
					</div>
					<div className={`${styles.MapImgBx}`}>
						<img src={Map.src} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}
