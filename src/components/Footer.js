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
								<li>
									<a>We are svatantra</a>
								</li>
								<li>
									<a>We are svatantra</a>
								</li>
								<li>
									<a>We are svatantra</a>
								</li>
								<li>
									<a>We are svatantra</a>
								</li>
								<li>
									<a>We are svatantra</a>
								</li>
								<li>
									<a>We are svatantra</a>
								</li>
								<li>
									<a>We are svatantra</a>
								</li>
								<li>
									<a>We are svatantra</a>
								</li>
							</ul>
						</div>
						<div className={`${styles.right}`}>
							<h2>Signup for our newsletter</h2>

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
								<p>Smart ODR</p>
								<p>Chaitanaya India</p>
								<p>Svatantra Microhousing</p>
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
					<p>Copyright ©2024 Svatantra. All rights reserved.</p>
					<div className={`${styles.midBox}`}>
						<p>Privacy Policy</p>
						<p>Terms & Conditions</p>
					</div>
					<img src={ting.src} alt="ting" />
				</div>
			</div>
		</footer>
	);
}
