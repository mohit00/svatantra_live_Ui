// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import footerarrow from "../../public/img/footer/footerarrow.svg";
import twitter from "../../public/img/footer/twitter.svg";
import facebook from "../../public/img/footer/facebook.svg";
import linkdin from "../../public/img/footer/linkdin.svg";
import logo from "../../public/img/footer/logo.svg";
import ting from "../../public/img/footer/ting.svg";
// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer}`}>
			{/* <p>© {new Date().getFullYear()} Copyright</p> */}
			<div className="container">
				<div className={`${styles.mainBox}`}>
					<div className={`${styles.topRow}`}>
						<div className={`${styles.left}`}>
							<ul>
								<li className="text_xs color_white pb_10">
									<a>We are svatantra</a>
								</li>
								<li className="text_xs color_white pb_10">
									<a>Our impact</a>
								</li>
								<li className="text_xs color_white pb_10">
									<a>Connect with us</a>
								</li>
								<li className="text_xs color_white pb_10">
									<a>Our finance</a>
								</li>
								<li className="text_xs color_white pb_10">
									<a>For investors</a>
								</li>
								<li className="text_xs color_white pb_10">
									<a>Pay now</a>
								</li>
								<li className="text_xs color_white pb_10">
									<a>Digitally svatantra</a>
								</li>
								<li className="text_xs color_white pb_10">
									<a>Media</a>
								</li>
							</ul>
						</div>
						<div className={`${styles.right}`}>
							<h2 className="text_reg f_w_s_b color_white pb_10">
								Signup for our newsletter
							</h2>

							<div className={`${styles.email}`}>
								<input
									type="email"
									placeholder="Enter your email here..."
									className={`${styles.inputField}`}
								/>
								<div className={`${styles.arrowBox}`}>
									<img src={footerarrow.src} alt="arrow" className={`${styles.arrow}`} />
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.secondRow}`}>
						<div className={`${styles.left}`}>
							<div className={`${styles.icons}`}>
								<div className={`${styles.iconBox}`}>
									<img src={twitter.src} alt="twitter" className={`${styles.logo}`} />
								</div>
								<div className={`${styles.iconBox}`}>
									<img src={linkdin.src} alt="twitter" className={`${styles.logo}`} />
								</div>
								<div className={`${styles.iconBox}`}>
									<img src={facebook.src} alt="twitter" className={`${styles.logo}`} />
								</div>
							</div>
							<div className={`${styles.underline}`}>
								<p className="text_sm f_w_b color_white">Smart ODR</p>
								<p className="text_sm f_w_b color_white">Chaitanaya India</p>
								<p className="text_sm f_w_b color_white">Svatantra Microhousing</p>
							</div>
						</div>
						<div className={`${styles.right}`}>
							<img src={logo.src} alt="logo" className={`${styles.logo}`} />
						</div>
					</div>
				</div>
			</div>
			<hr className={`${styles.breakLine}`} />
			<div className="container">
				<div className={`${styles.copyrightSection}`}>
					<p className="text_xs opacity_8 color_white">
						Copyright ©2024 Svatantra. All rights reserved.
					</p>
					<div className={`${styles.midBox}`}>
						<p className="text_xs opacity_8 color_white">Privacy Policy</p>
						<p className="text_xs opacity_8 color_white">Terms & Conditions</p>
					</div>
					<img src={ting.src} alt="ting" />
				</div>
			</div>
		</footer>
	);
}
