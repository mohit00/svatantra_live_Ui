// MODULES //
import CountUp from "react-countup";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Economic.module.scss";

// IMAGES //
import counterImg from "../../public/img/home/counterPng.png";
import mobileImg from "../../public/img/home/counter_mobile_line.png";
// DATA //

/** DummyComponent Component */
export default function Economic() {
	return (
		<div className={`${styles.economic} pb_100`} name="OurImpact">
			<div className="container">
				<div className={styles.economic_wrapper}>
					<h2 className="section_title">
						We are in the business of activating economic engines of growth
					</h2>
					<div className={`${styles.economic_info} f_r_aj_between ptb_30`}>
						<div className={styles.desc}>
							<h6 className="text_sm">
								*Combined numbers of Svatantra Microfin Pvt. Ltd. & Chaitanya India
							</h6>
						</div>
						<div className={styles.title}>
							<h5 className="text_reg opacity_80">
								<span>*Crisil</span> A - Stable Rating
							</h5>
						</div>
					</div>

					<div className={`${styles.counter} `}>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<CountUp
									// start={4.1}
									end={4.18}
									duration={5}
									separator=" "
									decimals={2}
									decimal="."
									// prefix="EUR "
									// suffix=""
									onEnd={() => console.log("Ended! 👏")}
									onStart={() => console.log("Started! 💨")}
								>
									{({ countUpRef, start }) => (
										<>
											<div>
												<div className={`${styles.counterInfo}`}>
													<h4 className="text_xxl" ref={countUpRef}>
														4.18
													</h4>
													<span className="color_primary_tint text_xxl">M+</span>
												</div>

												<h5 className="text_xs">Active customer</h5>
											</div>
										</>
									)}
								</CountUp>
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<CountUp
									start={0}
									end={48636}
									duration={5}
									separator=","
									decimals={0}
									decimal=""
									// prefix="EUR "
									// suffix=""
									onEnd={() => console.log("Ended! 👏")}
									onStart={() => console.log("Started! 💨")}
								>
									{({ countUpRef, start }) => (
										<>
											<div>
												<div className={`${styles.counterInfo}`}>
													<h4 className="text_xxl" ref={countUpRef}>
														4.18
													</h4>
													<span className="color_primary text_xxl">CR</span>
												</div>

												<h5 className="color_primary_tint text_xs">Loans disbursed</h5>
											</div>
										</>
									)}
								</CountUp>
								{/* <h4 className="text_xxl">
									48,636 <span>CR</span>
								</h4>
								<h5 className="text_xs">Loans disbursed</h5> */}
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<CountUp
									start={0}
									end={14149}
									duration={5}
									separator=","
									decimals={0}
									decimal=""
									// prefix="EUR "
									// suffix=""
									onEnd={() => console.log("Ended! 👏")}
									onStart={() => console.log("Started! 💨")}
								>
									{({ countUpRef, start }) => (
										<>
											<div>
												<div className={`${styles.counterInfo}`}>
													<h4 className="text_xxl" ref={countUpRef}>
														4.18
													</h4>
													<span className="color_primary_tint text_xxl">CR</span>
												</div>

												<h5 className="text_xs">AM</h5>
											</div>
										</>
									)}
								</CountUp>
								{/* <h4 className="text_xxl">
									14,149 <span>CR</span>
								</h4>
								<h5 className="text_xs">AUM</h5> */}
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<CountUp
									start={0}
									end={21500}
									duration={5}
									separator=","
									decimals={0}
									decimal=""
									// prefix="EUR "
									// suffix=""
									onEnd={() => console.log("Ended! 👏")}
									onStart={() => console.log("Started! 💨")}
								>
									{({ countUpRef, start }) => (
										<>
											<div>
												<div className={`${styles.counterInfo}`}>
													<h4 className="text_xxl" ref={countUpRef}>
														4.18
													</h4>
													<span className="color_primary_tint text_xxl">+</span>
												</div>

												<h5 className="text_xs">Total employees</h5>
											</div>
										</>
									)}
								</CountUp>
								{/* <h4 className="text_xxl">
									21,500 <span>+</span>
								</h4>
								<h5 className="text_xs">Total employees</h5> */}
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<CountUp
									start={0}
									end={2000}
									duration={5}
									separator=","
									decimals={0}
									decimal=""
									// prefix="EUR "
									// suffix=""
									onEnd={() => console.log("Ended! 👏")}
									onStart={() => console.log("Started! 💨")}
								>
									{({ countUpRef, start }) => (
										<>
											<div>
												<div className={`${styles.counterInfo}`}>
													<h4 className="text_xxl" ref={countUpRef}>
														4.18
													</h4>
													<span className="color_primary_tint text_xxl">+</span>
												</div>

												<h5 className="text_xs">Total branches</h5>
											</div>
										</>
									)}
								</CountUp>
								{/* <h4 className="text_xxl">2000</h4>
								<h5 className="text_xs">Total branches</h5> */}
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`}>
							<div className={`${styles.count}`}>
								<CountUp
									start={0}
									end={19}
									duration={5}
									separator=","
									decimals={0}
									decimal=""
									// prefix="EUR "
									// suffix=""
									onEnd={() => console.log("Ended! 👏")}
									onStart={() => console.log("Started! 💨")}
								>
									{({ countUpRef, start }) => (
										<>
											<div>
												<div className={`${styles.counterInfo}`}>
													<h4 className="text_xxl" ref={countUpRef}>
														19
													</h4>
													{/* <span className="color_primary text_xxl">+</span> */}
												</div>

												<h5 className="text_xs">States</h5>
											</div>
										</>
									)}
								</CountUp>
								{/* <h4 className="text_xxl">19</h4>
								<h5 className="text_xs">States</h5> */}
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
