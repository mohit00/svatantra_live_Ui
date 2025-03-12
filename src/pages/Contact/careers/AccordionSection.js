/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
// MODULES //
import React, { useState } from "react";
import { useRouter } from "next/router";

// COMPONENTS //
import AccordianCommon from "@/components/AccordianCommon";
import ContentFromCms from "@/components/ContentFromCms";
import upArrow from "../../../../public/img/icons/UpArrow.svg";
import downArrow from "../../../../public/img/icons/DownArrow.svg";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/pages/careers/AccordionSection.module.scss";

// IMAGES //
import filterImg from "../../../../public/img/filterImg.svg";
import Button from "@/components/Buttons/Button";
// DATA //

/** DummyComponent Component */
export default function AccordionSection({ data }) {
	// console.log(data, "hey ");
	/** DummyComponent Component */
	const handleApplyClick = (value) => {
		if (typeof window !== "undefined") {
			// Ensure code runs only in the browser
			localStorage.setItem("designation", value); // Store job title
			window.location.href = "/careers/career-contact-form"; // Redirect to form page
		}
	};

	console.log(data);

	const [activeIndex, setActiveIndex] = useState(null);
	const uniqueStates = [...new Set(data.data.map((job) => job.state))];
	const [selectedState, setSelectedState] = useState("");

	const [selectedOptions, setSelectedOptions] = useState({
		select1: "Maharashtra",
		// select2: "2023",
	});

	const [openDropdown, setOpenDropdown] = useState(false);

	const options = [
		{ label: "Maharashtra" },
		{ label: "Maharashtra" },
		{ label: "Maharashtra" },
	];

	const toggleDropdown = () => setOpenDropdown(!openDropdown);

	const filteredJobs = selectedState
		? data.data.filter((job) => job.state === selectedState)
		: data.data;

	const handleStateChange = (state) => {
		setSelectedState(state);
		setOpenDropdown(false);
	};

	const accData = filteredJobs.length
		? filteredJobs.map((item, ind) => {
				return {
					title: item?.title || "No Title",
					children: (
						<div className={`${styles.table_wrap}`}>
							<div className=" f_j f_w ">
								<div className={`${styles.box1}`}>
									{item.col1 && (
										<>
											<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
											<ContentFromCms>{item.col1}</ContentFromCms>
										</>
									)}
								</div>
								<div className={`${styles.box1}`}>
									{item.col2 && (
										<>
											<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
											<ContentFromCms>{item.col2}</ContentFromCms>
										</>
									)}
								</div>
							</div>

							<div
								className={`${styles.BtnBx} ptb_20`}
								onClick={() => handleApplyClick(item.title)}
							>
								<Button
									buttonType="four"
									condition={"white"}
									title={"Join Us"}
									link={"/careers/career-contact-form"}
								/>
							</div>
						</div>
					),
				};
		  })
		: [];

	return (
		<div className={`${styles.AccordionSection} pt_40 pb_80`}>
			<div className="container">
				<h2 className="section_title">
					Take the next big step in your career
					<br className="hidden_sm" /> by becoming a part of Svatantra
				</h2>
				<p className="text_md opacity_80 pt_20 pb_40">
					Explore our current openings and find the perfect role that aligns with
					your career goals.
				</p>
				<div className={styles.filter}>
					<div className={styles.filterPart}>
						<img src={filterImg.src} />
						<p className="text_xs">Sort By:</p>
					</div>

					<div className={`${styles.FiltersBox}`}>
						<div className={`${styles.Filter}`}>
							<div className={`${styles.selectBx}`}>
								<div className={`${styles.custom_select}`}>
									<div
										className={`${styles.select_header}`}
										onClick={() => toggleDropdown("select1")}
										tabIndex={0}
									>
										<div className={`${styles.selected}`}>
											<span className="text_reg font_secondary">
												{selectedState || "All States"}
											</span>
										</div>
										<img
											src={openDropdown.select1 ? upArrow.src : downArrow.src}
											alt="Toggle Dropdown"
											className={`${styles.arrow}`}
										/>
									</div>

									{openDropdown && (
										<ul className={`${styles.select_options}`}>
											<li
												className={`${styles.select_option} ${
													selectedState === "" ? styles.selected : ""
												}`}
												onClick={() => handleStateChange("")}
											>
												<span className="text_reg">All States</span>
											</li>
											{uniqueStates.map((state, index) => (
												<li
													key={index}
													className={`${styles.select_option} ${
														selectedState === state ? styles.selected : ""
													}`}
													onClick={() => handleStateChange(state)}
												>
													<span className="text_reg">{state}</span>
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.accordian_main}`}>
					<AccordianCommon
						fontStyle={"text_lg"}
						fontWeight={"f_w_m"}
						fontFamily={"font_primary"}
						fontColor={"color_light_black"}
						items={accData}
					/>
				</div>
			</div>
		</div>
	);
}
