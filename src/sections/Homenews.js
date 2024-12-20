// MODULES //
import { useState } from "react";
// COMPONENTS //
import Button from "@/components/Buttons/Button";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Homenews.module.scss";

// IMAGES //

// DATA //

/** Homenews Section */
export default function Homenews() {
	const [activeTab, setActiveTab] = useState("media");

	/** */
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<section className={styles.Homenews}>
			<div className="container">
				<div className={`${styles.mainBox}`}>
					<h1>In the news</h1>
					<div className={`${styles.category}`}>
						<div className={`${styles.switchBox}`}>
							<div
								className={`${styles.media} ${
									activeTab === "media" ? styles.active : ""
								}`}
								onClick={() => handleTabClick("media")}
							>
								<p>Media</p>
							</div>
							<div
								className={`${styles.award} ${
									activeTab === "award" ? styles.active : ""
								}`}
								onClick={() => handleTabClick("award")}
							>
								<p>Awards</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
