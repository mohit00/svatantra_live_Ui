// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/JourneySup.module.scss";

// IMAGES //

// DATA //

/** JourneySup Section */
export default function JourneySup({ gsap, ScrollTrigger }) {
	return (
		<section className={styles.JourneySup}>
			<div className="container">
				<h1 className="text_xxxl color_primary pb_30">
					Building a legacy of growth and <br />
					change
				</h1>
				<p className="text_reg_20 opacity_8 pb_50">
					A story of bold steps, innovation, and lasting impact from a single <br />
					branch to India&apos;s second-largest MFI.
				</p>
			</div>
		</section>
	);
}
