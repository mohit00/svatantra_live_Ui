// MODULES //

// COMPONENTS //
import ContentFromCms from "@/components/ContentFromCms";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Gallery.module.scss";

// IMAGES //

// DATA //

/** DummyComponent Component */
export default function GalleryComponent() {
	return (
		<div className={styles.gallery}>
			<div className="container">
				<h2 className="section_title">Our progress at a glance</h2>
				<p className="text_md pt_10">
					Browse through the powerful visuals that bring our stories to life.
				</p>
			</div>
		</div>
	);
}
