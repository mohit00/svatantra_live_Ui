/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-target-blank */
// MODULES //
import { useRef, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";
import * as Scroll from "react-scroll";
import {
	Link as ScrollSection,
	// Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import footerarrow from "../../public/img/footer/footerarrow.svg";
import twitter from "../../public/x_thread.svg";
import facebook from "../../public/img/footer/facebook.svg";
import insta from "../../public/img/footer/insta.svg";
import yt from "../../public/img/footer/yt.svg";
import linkdin from "../../public/img/footer/linkdin.svg";
import logo from "../../public/img/footer/logo.svg";
import ting from "../../public/img/footer/ting.svg";
// DATA //

/** Footer Component */
export default function Footer() {
	const formRef = useRef();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const [loading, setLoading] = useState(false);
	const [isSubmited, setIsSubmited] = useState(false);

	/** resend */
	async function SendEmailViaSend({ body }) {
		try {
			const res = await fetch("/api/sendEmailNews", {
				method: "POST",
				body: JSON.stringify({ ...body }),
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.error("SendEmailViaSend failed", error);
			return null; // Return null or any value to indicate failure
		}
	}

	/** Function to handle submit */
	const onSubmit = async (data, e) => {
		const formdata = {
			email: data.email,
		};
		setLoading(true);

		// await SendEmailViaSend({ body: { ...formdata } });
		// reset();
		// setIsSubmited(true);
		// setTimeout(() => {
		// 	setIsSubmited(false);
		// }, 5000);

		// Use Promise.allSettled to ensure both functions run, even if one fails
		const result = await SendEmailViaSend({ body: { ...formdata } });
		console.log(result);

		reset();
		setIsSubmited(true);
		setTimeout(() => {
			setIsSubmited(false);
		}, 5000);
		setLoading(false);
	};
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
								{/* <a>We are svatantra</a> */}
								<ScrollSection
									// onClick={toggleSidebar}
									activeClass="active"
									to="About"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.link_title} text_xs`}
								>
									About
								</ScrollSection>
							</li>
							<li className="text_xs color_white pb_10">
								{/* <a>Our impact</a> */}
								<ScrollSection
									// onClick={toggleSidebar}
									activeClass="active"
									to="OurImpact"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									className={`${styles.link_title} text_xs`}
								>
									Our Impact
								</ScrollSection>
							</li>
							<li className="text_xs color_white pb_10">
								{/* <a>Connect with us</a> */}
								<ScrollSection
									// onClick={toggleSidebar}
									activeClass="active"
									to="ContactUs"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.link_title} text_xs`}
								>
									Contact Us
								</ScrollSection>
							</li>
							{/* <li className="text_xs color_white pb_10">
								<a>Our finance</a>
								<ScrollSection
									// onClick={toggleSidebar}
									activeClass="active"
									to="OurFinance"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.link_title} text_xs`}
								>
									Our Finance
								</ScrollSection>
							</li> */}
							{/* <li className="text_xs color_white pb_10">
								<a>For investors</a>
							</li>
							<li className="text_xs color_white pb_10">
								<a>Pay now</a>
							</li> */}
							<li className="text_xs color_white pb_10">
								<a
									href="https://investors.svatantramicrofin.com/composition-of-the-board-and-kmp"
									target="_blank"
									rel="noreferrer"
								>
									Resources
								</a>
							</li>
							<li>
								{/* <a>Digitally svatantra</a> */}
								<ScrollSection
									// onClick={toggleSidebar}
									activeClass="active"
									to="DigitallySvatantra"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.link_title} text_xs color_white pb_10`}
								>
									Digitally Svatantra
								</ScrollSection>
							</li>
							<li className="text_xs color_white pb_10">
								{/* <a>Media</a> */}
								<ScrollSection
									// onClick={toggleSidebar}
									activeClass="active"
									to="Media"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									className={`${styles.link_title} text_xs`}
								>
									Media
								</ScrollSection>
							</li>
						</ul>

						<hr className={`${styles.secondBreakLine}`} />

						<div className={styles.letterBox}>
							<h1 className="text_reg color_white pb_10">Signup for our newsletter</h1>
							<form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
								<div className={`${styles.emailBox}`}>
									<input
										placeholder="Enter your email here..."
										className={`${styles.inputField}`}
										type="email"
										id="email"
										name="email"
										{...register("email", {
											required: true,
											pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
										})}
									/>
									{errors.email && errors.email.type == "required" && (
										<label className="error">This field is required</label>
									)}
									{errors.email && errors.email.type == "pattern" && (
										<label className="error_footer">Enter valid email</label>
									)}
									<div className={`${styles.arrowBox}`}>
										<button type="submit">
											<img
												src={footerarrow.src}
												alt="arrow"
												className={`${styles.arrow}`}
											/>
										</button>
									</div>
								</div>
								{isSubmited && (
									<p className="text_xs pt_10 color_white">
										Thank you for subscribing to our newsletter!
									</p>
								)}
							</form>
						</div>
					</div>
					{/* row2 */}
					<div className={`${styles.row2}`}>
						<div className={`${styles.left}`}>
							<div className={`${styles.socialIcons} pb_20`}>
								<a href="https://x.com/WeAreSvatantra" target="_blank" rel="noreferrer">
									<div className={`${styles.box1}`}>
										<img src={twitter.src} alt="twitter" className={`${styles.icon}`} />
									</div>
								</a>
								<a
									href="https://www.linkedin.com/company/7951922?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A7951922%2Cidx%3A2-1-9%2CtarId%3A1480583980673%2Ctas%3Asvatantra"
									target="_blank"
									rel="noreferrer"
								>
									<div className={`${styles.box1}`}>
										<img src={linkdin.src} alt="twitter" className={`${styles.icon}`} />
									</div>
								</a>
								<a
									href="https://www.facebook.com/svatantramicrofinance"
									target="_blank"
									rel="noreferrer"
								>
									<div className={`${styles.box1}`}>
										<img src={facebook.src} alt="twitter" className={`${styles.icon}`} />
									</div>
								</a>
								<a
									href="https://www.youtube.com/channel/UCDN7Vupq3kJt5PRjjkffytA"
									target="_blank"
									rel="noreferrer"
								>
									<div className={`${styles.box1}`}>
										<img src={yt.src} alt="twitter" className={`${styles.icon}`} />
									</div>
								</a>
								<a
									href="https://www.instagram.com/wearesvatantra?igsh=Zmh0b2hnOHZoaTh5"
									target="_blank"
									rel="noreferrer"
								>
									<div className={`${styles.box1}`}>
										<img src={insta.src} alt="twitter" className={`${styles.icon}`} />
									</div>
								</a>
							</div>

							<hr className={`${styles.thirdLine}`} />

							<div className={`${styles.cats}`}>
								<p className="text_sm color_white">
									<a href="https://smartodr.in/login" target="_blank" rel="noreferrer">
										Smart ODR
									</a>
								</p>
								<p className="text_sm color_white">
									<a
										href="https://www.chaitanyaindia.in/"
										target="_blank"
										rel="noreferrer"
									>
										Chaitanya India
									</a>
								</p>
								<p className="text_sm color_white">
									<a
										href="https://www.svatantramhfc.com/"
										target="_blank"
										rel="noreferrer"
									>
										Svatantra Micro Housing
									</a>
								</p>
								<p className="text_sm color_white">
									<a
										href="https://investors.svatantramicrofin.com/composition-of-the-board-and-kmp"
										target="_blank"
										rel="noreferrer"
									>
										Investors
									</a>
								</p>
							</div>
						</div>
						<div className={`${styles.right}`}>
							<a href="/">
								<img src={logo.src} alt="logo" className={`${styles.secondLogo} `} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<hr className={`${styles.fourthLine}`} />
			<div className="container">
				<div className={`${styles.copyright}`}>
					<p className="text_xs f_w_r color_white opacity_70">
						Copyright ©2025, Svatantra. All rights reserve.
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
