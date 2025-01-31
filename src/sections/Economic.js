/* eslint-disable require-jsdoc */
// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import ScrollOut from "scroll-out";

// UTILS //

// STYLES //
import styles from "@/styles/sections/Economic.module.scss";

// IMAGES //
import counterImg from "../../public/img/home/counterPng.png";
import mobileImg from "../../public/img/home/counter_mobile_line.png";
// DATA //

/** DummyComponent Component */
export default function Economic() {
	const [values, setValues] = useState([0, 0, 0, 0, 0, 0]);
	const refs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];

	const countersData = [
		{ end: 4, suffix: "M+", decimals: 2 },
		{ end: 21170, suffix: " CR", decimals: 0 },
		{ end: 13885, suffix: "CR", decimals: 0 },
		{ end: 22135, suffix: "+", decimals: 0 },
		{ end: 2024, suffix: "", decimals: 0 },
		{ end: 19, suffix: "", decimals: 0 },
	];

	useEffect(() => {
		const observers = refs.map((ref, index) => {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						animateCounter(
							index,
							countersData[index].end,
							2000,
							countersData[index].decimals
						);
						observer.disconnect(); // Stop observing after animation starts
					}
				},
				{ threshold: 0.5 }
			);
			if (ref.current) observer.observe(ref.current);
			return observer;
		});

		return () => observers.forEach((observer) => observer.disconnect());
	}, []);

	const animateCounter = (index, end, duration, decimals) => {
		const start = 0;
		const startTime = performance.now();
		const step = (currentTime) => {
			const progress = Math.min((currentTime - startTime) / duration, 1);
			const value = start + progress * (end - start);

			setValues((prevValues) => {
				const updatedValues = [...prevValues];
				updatedValues[index] = value;
				return updatedValues;
			});

			if (progress < 1) {
				requestAnimationFrame(step);
			}
		};

		requestAnimationFrame(step);
	};
	return (
		<div className={`${styles.economic} pb_100`} name="OurImpact">
			<div className="container">
				<div className={styles.economic_wrapper}>
					<h2 className="section_title pb_40">
						We are in the business of activating economic engines of growth
					</h2>

					<div className={`${styles.counter} `}>
						<div className={`${styles.box} f_r_a_center`} data-scroll>
							<div className={`${styles.count}`}>
								<div className={`${styles.counterInfo}`} ref={refs[0]}>
									<h4 className="text_xxl">
										{/* 4.18 <span>M+</span> */}
										{values[0].toLocaleString(undefined, {
											minimumFractionDigits: countersData[0].decimals,
											maximumFractionDigits: countersData[0].decimals,
										})}{" "}
										<span>{countersData[0].suffix}</span>
									</h4>
									<h5 className="text_xs">Active customer</h5>
								</div>

								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`} data-scroll>
							<div className={`${styles.count}`}>
								<div className={`${styles.counterInfo}`} ref={refs[1]}>
									<h4 className="text_xxl">
										{/* 48,636 <span>CR</span> */}
										{values[1].toLocaleString(undefined, {
											minimumFractionDigits: countersData[1].decimals,
											maximumFractionDigits: countersData[1].decimals,
										})}
										<span>{countersData[1].suffix}</span>
									</h4>
									<h5 className="text_xs">Loans disbursed</h5>
								</div>
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`} data-scroll>
							<div className={`${styles.count}`}>
								<div className={`${styles.counterInfo}`} ref={refs[2]}>
									<h4 className="text_xxl">
										{/* 14,149 <span>CR</span> */}
										{values[2].toLocaleString(undefined, {
											minimumFractionDigits: countersData[2].decimals,
											maximumFractionDigits: countersData[2].decimals,
										})}{" "}
										<span>{countersData[2].suffix}</span>
									</h4>
									<h5 className="text_xs">AUM</h5>
								</div>
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`} data-scroll>
							<div className={`${styles.count}`}>
								<div className={`${styles.counterInfo}`} ref={refs[3]}>
									<h4 className="text_xxl">
										{/* 21,500 <span>+</span> */}
										{values[3].toLocaleString(undefined, {
											minimumFractionDigits: countersData[3].decimals,
											maximumFractionDigits: countersData[3].decimals,
										})}{" "}
										<span>{countersData[3].suffix}</span>
									</h4>
									<h5 className="text_xs">Total employees</h5>
								</div>
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`} data-scroll>
							<div className={`${styles.count}`}>
								<div className={`${styles.counterInfo}`} ref={refs[4]}>
									<h4 className="text_xxl">
										{values[4].toLocaleString(undefined, {
											minimumFractionDigits: countersData[4].decimals,
											maximumFractionDigits: countersData[4].decimals,
										})}{" "}
										<span>{countersData[4].suffix}</span>
									</h4>
									<h5 className="text_xs">Total branches</h5>
								</div>
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
						<div className={`${styles.box} f_r_a_center`} data-scroll>
							<div className={`${styles.count}`}>
								<div className={`${styles.counterInfo}`} ref={refs[5]}>
									<h4 className="text_xxl">
										{values[5].toLocaleString(undefined, {
											minimumFractionDigits: countersData[5].decimals,
											maximumFractionDigits: countersData[5].decimals,
										})}{" "}
										<span>{countersData[5].suffix}</span>
									</h4>
									<h5 className="text_xs">States</h5>
								</div>
								<img
									src={counterImg.src}
									className={`${styles.counterImg} hidden_xs`}
								/>
								<img src={mobileImg.src} className={`${styles.mobile} hidden_lg`} />
							</div>
						</div>
					</div>

					<div className={`${styles.economic_info} f_r_aj_between pt_30`}>
						<div className={styles.desc}>
							<h6 className="text_sm">
								*Combined numbers of Svatantra Microfin Pvt. Ltd. & Chaitanya India
							</h6>
						</div>
						<div className={styles.title}>
							<h5 className="text_reg opacity_80">
								<span>*CRISIL</span> A - (Stable Rating)
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
