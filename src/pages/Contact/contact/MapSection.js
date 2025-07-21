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
						{/* <img src={Map.src} className="img-responsive" alt="map" /> */}
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1932678774187!2d72.83475257520375!3d19.011203482180097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee8312abc3f%3A0x34340ca9e984f206!2sSvatantra%20Microfin%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1753082086511!5m2!1sen!2sin"
							// width="600"
							// height="450"
							allowfullscreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className={`${styles.info}`}>
						<h4 className="text_reg f_w_s_b pb_10 font_primary">
							Head Office Address
						</h4>
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
