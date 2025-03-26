// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/digitally-svatantra/TechnologyDriven.module.scss";

// IMAGES //
import cashless from "../../../public/img/digitally-svatantra/cashless.jpg";
import saksham from "../../../public/img/digitally-svatantra/saksham.jpg";
import saathi from "../../../public/img/digitally-svatantra/saathi.jpg";

// DATA //

/** TechnologyDriven Component */
export default function TechnologyDriven() {
	return (
		<section className={`${styles.TechnologyDriven} ptb_80`}>
			<div className="container">
				<div className={styles.titleBox}>
					<h2 className="text_xxxl color_primary pb_20 f_w_m">
						Technology-driven solutions
					</h2>
				</div>
				<div className={`${styles.para}`}>
					<p className="text_md color_light_black font_secondary opacity_8 pb_20 l_h_6">
						At Svatantra, we believe in harnessing the power of technology to create a
						seamless, innovative, and personalised experience for both our customers
						and employees. Our commitment to the technology-drive approach isn’t just
						about staying ahead – it is also about creating a future where both
						customers and employees thrive.
					</p>
					<h5 className="text_md  color_light_black font_secondary opacity_8 f_w_s_b pt_20">
						Discover our digital solutions, tailor-made to enhance customer and
						employee experience and generate operational efficacy:
					</h5>
				</div>
				<div className={`${styles.committed_section_wrapper} pt_50`}>
					<div className={`${styles.committed_section} f_r_aj_between f_w`}>
						<div className={`${styles.committed_img}`}>
							<img src={cashless.src} className="img-responsive" alt="Cashless" />
						</div>
						<div className={`${styles.committed_info}`}>
							<h3 className="text_xxl color_primary pb_20">Cashless Disbursements</h3>
							<p className="text_sm opacity_8">
								Svatantra was among the first NBFC-MFIs to provide 100% cashless
								disbursements right from its inception in 2012. By eliminating cash
								transactions and through our technological intervention, we have made
								credit access more secure, efficient and convenient for all our
								customers.
							</p>
						</div>
					</div>
					<div className={`${styles.committed_section} f_r_aj_between f_w`}>
						<div className={`${styles.committed_img}`}>
							<img src={saksham.src} className="img-responsive" alt="saksham" />
						</div>
						<div className={`${styles.committed_info}`}>
							<h3 className="text_xxl color_primary pb_20">Saksham App</h3>
							<p className="text_sm opacity_8">
								With the launch of SAKSHAM, a customer-centric app, in November 2020, we
								made lending more accessible, easier, and efficient for our customers
								and employees. The app enables users to access essential services,
								including managing loans, online grievance redressal, payment platforms,
								and a chatbot for medical insurance and HR onboarding.
							</p>
						</div>
					</div>
					<div className={`${styles.committed_section} f_r_aj_between f_w`}>
						<div className={`${styles.committed_img}`}>
							<img src={saathi.src} className="img-responsive" alt="saathi" />
						</div>
						<div className={`${styles.committed_info}`}>
							<h3 className="text_xxl color_primary pb_20">About Saathi</h3>
							<p className="text_sm opacity_8">
								SAATHI was launched in 2017 as a cashless lending solution to streamline
								operations and ensure customers made transactions exclusively through
								formal banking channels. The app enables our team to access real-time
								data on remote customers, reduce turnaround times and perform numerous
								tasks, including identifying expansion areas.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
