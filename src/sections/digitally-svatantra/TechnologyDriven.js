// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/digitally-svatantra/TechnologyDriven.module.scss";

// IMAGES //
import cashless from "../../../public/img/newImg/dsNew.jpg";
import saksham from "../../../public/img/digitally-svatantra/saksham.jpg";
import saathi from "../../../public/img/newImg/ds3New.jpg";

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
					<p className="text_sm opacity_8 pb_10">
						At Svatantra, we believe in harnessing the power of technology to create a
						seamless, innovative, and personalised experience for both our customers
						and employees. Our commitment to the technology–driven approach isn’t just
						about staying ahead – it is also about creating a future where both
						customers and employees thrive.
					</p>
					<p className="text_sm opacity_8">
						We have strategically integrated technology into our operations to
						streamline processes and enhance our bottom line. However, we also
						recognise the importance of maintaining a personal touch with our
						customers. That is why our approach always centres on a carefully balanced
						strategy, such as, leveraging digital innovation while retaining the
						essential human element. This commitment ensures that technology serves as
						an enabler of growth, rather than a barrier to access and understanding.
					</p>
					<h5 className="text_sm  color_light_black font_secondary opacity_8 f_w_s_b pt_20">
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
							<h3 className="text_xxl color_primary pb_20">Cashless disbursements</h3>
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
							<h3 className="text_xxl color_primary pb_20">Customer-Centric App</h3>
							<p className="text_sm opacity_8">
								Customer-Centric made lending more accessible, easier, and efficient for our customers and employees. The app enables users to access essential services, including managing loans, online grievance redressal, payment platforms, and a chatbot insurance.
							</p>
						</div>
					</div>
					<div className={`${styles.committed_section} f_r_aj_between f_w`}>
						<div className={`${styles.committed_img}`}>
							<img src={saathi.src} className="img-responsive" alt="saathi" />
						</div>
						<div className={`${styles.committed_info}`}>
							<h3 className="text_xxl color_primary pb_20">Unique lending process</h3>
							<p className="text_sm opacity_8 pb_10">
								The company leverages technology to enhance its lending processes to
								serve its customers. One of the company’s key innovations is the
								implementation of a unique, digitally enabled income assessment process.
								This advanced system allows for more accurate and efficient evaluation
								of potential borrowers’ financial capabilities.
							</p>
							<p className="text_sm opacity_8">
								This also includes risk, HR, finance, and learning, which are integrated
								into the company’s end-to-end IT platform, ensuring efficiency and
								transparency. We are continuously investing in digitisation and making
								upgrades to our existing systems to protect customer data and our
								proprietary assets.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
