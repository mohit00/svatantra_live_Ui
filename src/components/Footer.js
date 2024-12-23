/* eslint-disable react/jsx-no-target-blank */
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
					<div className={`${styles.row1} pb_30`}>
						<img src={logo.src} alt="logo" className={`${styles.firstLogo} `} />
						<hr className={`${styles.firstBreakLine} `} />

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

						<hr className={`${styles.secondBreakLine}`} />

						<div>
							<h1 className="text_reg color_white pb_10">Signup for our newsletter</h1>
							<div className={`${styles.emailBox}`}>
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
					{/* row2 */}
					<div className={`${styles.row2}`}>
						<div className={`${styles.left}`}>
							<div className={`${styles.socialIcons} pb_20`}>
								<div className={`${styles.box1}`}>
									<img src={twitter.src} alt="twitter" className={`${styles.icon}`} />
								</div>
								<div className={`${styles.box1}`}>
									<img src={linkdin.src} alt="twitter" className={`${styles.icon}`} />
								</div>
								<div className={`${styles.box1}`}>
									<img src={facebook.src} alt="twitter" className={`${styles.icon}`} />
								</div>
							</div>

							<hr className={`${styles.thirdLine}`} />

							<div className={`${styles.cats}`}>
								<p className="text_sm color_white">Smart ODR</p>
								<p className="text_sm color_white">Chaitanaya India</p>
								<p className="text_sm color_white">Svatantra Microhousing</p>
							</div>
						</div>
						<div className={`${styles.right}`}>
							<img src={logo.src} alt="logo" className={`${styles.secondLogo} `} />
						</div>
					</div>
				</div>
			</div>
			<hr className={`${styles.fourthLine}`} />
			<div className="container">
				<div className={`${styles.copyright}`}>
					<p className="text_xs f_w_r color_white opacity_70">
						Copyright ©2024, Svatantra. All rights reserve.
					</p>

					{/* <hr className={`${styles.lastLine}`} /> */}

					<div className={`${styles.box2}`}>
						<p className="text_xs f_w_r color_white opacity_70">Privacy Policy</p>
						<p className="text_xs f_w_r color_white opacity_70">Terms & Conditions</p>
					</div>

					<a href="https://www.ting.in/" target="_blank">
						<img src={ting.src} alt="tinglogo" />
					</a>
				</div>
			</div>
		</footer>
	);
}
