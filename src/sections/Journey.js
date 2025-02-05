// MODULES //

// COMPONENTS //
import ContentFromCms from "@/components/ContentFromCms";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Journey.module.scss";

// IMAGES //
import Journey1 from "../../public/img/journey/Journey1.jpg";

// DATA //

/** DummyComponent Component */
export default function JourneyComponent() {
	return (
		<div className={`${styles.Journey_section} pb_80`}>
			<div className="container">
				<div className={`${styles.banner_info}`}>
					<h2 className="section_title">Building a legacy of growth and change</h2>
					<p className="text_md pt_10 pb_40">
						A story of bold steps, innovation, and lasting impact from a single branch
						to India&lsquo;s second-largest MFI.
					</p>
				</div>
				<div className={`${styles.Journey_box_wrapper}`}>
					<div className={`${styles.Journey_box} f_w_j`}>
						<div className={`${styles.title}`}>
							<h2>
								<span className={`${styles.color_trans}`}>20</span>12
							</h2>
						</div>
						<div className={`${styles.info_wrapper}`}>
							<div className={`${styles.info}`}>
								<h4 className="text_reg f_w_b">February</h4>
								<h6 className="text_sm f_w_m opacity_80">
									Svatantra Microfin founded by Ananya Birla.
								</h6>
								<div className={`${styles.image} pt_20`}>
									<img src={Journey1.src} className="img-responsive" alt="Journey" />
								</div>
							</div>
							<div className={`${styles.info}`}>
								<h4 className="text_reg f_w_b">February</h4>
								<h6 className="text_sm f_w_m opacity_80">
									Svatantra Microfin founded by Ananya Birla.
								</h6>
								<div className={`${styles.image} pt_20`}>
									<img src={Journey1.src} className="img-responsive" alt="Journey" />
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.Journey_box} f_w_j`}>
						<div className={`${styles.title}`}>
							<h2>
								<span className={`${styles.color_trans}`}>20</span>13
							</h2>
						</div>
						<div className={`${styles.info_wrapper}`}>
							<div className={`${styles.info}`}>
								<h4 className="text_reg f_w_b">February</h4>
								<h6 className="text_sm f_w_m opacity_80">
									Svatantra Microfin founded by Ananya Birla.
								</h6>
								<div className={`${styles.image} pt_20`}>
									<img src={Journey1.src} className="img-responsive" alt="Journey" />
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.Journey_box} f_w_j`}>
						<div className={`${styles.title}`}>
							<h2>
								<span className={`${styles.color_trans}`}>20</span>14
							</h2>
						</div>
						<div className={`${styles.info_wrapper}`}>
							<div className={`${styles.info}`}>
								<h4 className="text_reg f_w_b">February</h4>
								<h6 className="text_sm f_w_m opacity_80">
									Svatantra Microfin founded by Ananya Birla.
								</h6>
								<div className={`${styles.image} pt_20`}>
									<img src={Journey1.src} className="img-responsive" alt="Journey" />
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.Journey_box} f_w_j`}>
						<div className={`${styles.title}`}>
							<h2>
								<span className={`${styles.position_fixed}`}>20</span>
								<span className={`${styles.color_trans}`}>20</span>15
							</h2>
						</div>
						<div className={`${styles.info_wrapper}`}>
							<div className={`${styles.info}`}>
								<h4 className="text_reg f_w_b">February</h4>
								<h6 className="text_sm f_w_m opacity_80">
									Svatantra Microfin founded by Ananya Birla.
								</h6>
								<div className={`${styles.image} pt_20`}>
									<img src={Journey1.src} className="img-responsive" alt="Journey" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
