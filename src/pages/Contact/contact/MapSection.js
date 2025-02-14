// MODULES //

// COMPONENTS //
import ContactPageForm from "@/sections/ContactPageForm";
import Button from "@/components/Buttons/Button";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/pages/Contact/MapSection.module.scss";

// IMAGES //
import Map from "../../../../public/img/contact/map.jpg";
import arrow from "../../../../public/img/arrow.svg";
// DATA //

/** DummyComponent Component */
export default function MapSection() {
	return (
		<div className=" pb_80">
			<div className="container">
				<div className={`${styles.map_section} f_r_aj_between f_w`}>
					<div className={`${styles.map}`}>
						<img src={Map.src} className="img-responsive" alt="map" />
					</div>
					<div className={`${styles.info}`}>
						<h4 className="text_reg f_w_s_b pb_10">Head Office Address</h4>
						<h5 className="text_xs f_w_m">
							Svatantra Microfin Pvt. Ltd., 20th Floor, Sunshine Towers, Senapati Bapat
							Marg, Elphinstone Road (W), Mumbai - 400 013, Maharashtra, India
						</h5>

						<button className={styles.direction}>
							Get Directions <img src={arrow.src} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
