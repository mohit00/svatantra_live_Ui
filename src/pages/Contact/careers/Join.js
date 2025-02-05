// MODULES //

// COMPONENTS //
import ContentFromCms from "@/components/ContentFromCms";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/pages/careers/Join.module.scss";

// IMAGES //
import JoinImg from "../../../../public/img/careers/join_img.jpg";

// DATA //

/** DummyComponent Component */
export default function JoinComponent() {
	return (
		<div className={`${styles.join} ptb_80`}>
			<div className="container">
				<div className={`${styles.join_section} f_r_aj_between f_w`}>
					<div className={`${styles.join_info}`}>
						<h2 className="section_title color_white">
							Take the next big step in your career by becoming a part of Svatantra
						</h2>
						<p className="text_md color_white pt_10 f_w_l">
							Explore our current openings and find the perfect role that aligns with
							your career goals.
						</p>
					</div>
					<div className={`${styles.join_img}`}>
						<img src={JoinImg.src} className="JoinImg" alt="JoinImg" />
					</div>
				</div>
			</div>
		</div>
	);
}
