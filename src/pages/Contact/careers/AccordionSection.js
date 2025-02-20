/* eslint-disable require-jsdoc */
// MODULES //
import React, { useState } from "react";

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
export default function AccordionSection() {
	const [activeIndex, setActiveIndex] = useState(null);

	// const handleAccordionClick = (index) => {
	// 	setActiveIndex(activeIndex === index ? null : index);
	// };

	const [selectedOptions, setSelectedOptions] = useState({
		select1: "Maharashtra",
		// select2: "2023",
	});

	const [openDropdowns, setOpenDropdowns] = useState({
		select1: false,
		select2: false,
	});

	const options = [
		{ label: "Maharashtra" },
		{ label: "Maharashtra" },
		{ label: "Maharashtra" },
	];
	// const options2 = [{ label: "2024" }, { label: "2025" }, { label: "2026" }];

	const toggleDropdown = (dropdown) => {
		setOpenDropdowns((prevState) => ({
			select1: dropdown === "select1" ? !prevState.select1 : false,
			select2: dropdown === "select2" ? !prevState.select2 : false,
		}));
	};

	const handleOptionClick = (option, dropdown) => {
		setSelectedOptions((prevState) => ({
			...prevState,
			[dropdown]: option.label,
		}));

		setOpenDropdowns({ select1: false, select2: false });
	};

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
											{/* <img
														src={options.find((opt) => opt.label === selectedOption)?.icon}
														alt={selectedOption}
														className={`${styles.icon}`}
													/> */}
											<span className="text_reg">{selectedOptions.select1}</span>
										</div>
										<img
											src={openDropdowns.select1 ? upArrow.src : downArrow.src}
											alt="Toggle Dropdown"
											className={`${styles.arrow}`}
										/>
									</div>

									{openDropdowns.select1 && (
										<ul className={`${styles.select_options}`}>
											{options.map((option) => (
												<li
													key={option.label}
													className={`${styles.select_option} ${
														option.label === selectedOptions.select1 ? styles.selected : ""
													}`}
													onClick={() => handleOptionClick(option, "select1")}
												>
													{/* <img
															src={option.icon}
															alt={option.label}
															className={`${styles.option_icon}`}
														/> */}
													<span className="text_reg">{option.label}</span>
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
						items={[
							{
								title: "Field Officer",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
							{
								title: "Branch Manager- SME",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
							{
								title: "Area Credit Manager-SME",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
							{
								title: "Relationship Officer-Collections",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
							{
								title: "Relationship Officer-SME",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
							{
								title: "Telecalling Relationship Officer",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
							{
								title: "Area Manager",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
							{
								title: "Credit Officer",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
							{
								title: "Branch Manager",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
							{
								title: "Assistant Branch Manager-SME",
								children: (
									<div className={`${styles.table_wrap}`}>
										<div className=" f_j f_w ">
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
											<div className={`${styles.box1}`}>
												<h5 className="text_reg_20 f_w_m pb_20">Job Responsibilities:</h5>
												<ul>
													<li className="text_sm">
														Identifying customers suitable for various credit options.
													</li>
													<li className="text_sm">
														Assisting Relationship Officer / Assistant Branch Manager durig
														initial process execution.
													</li>
													<li className="text_sm">
														Follow-up with clients on their monthly repayments.
													</li>
													<li className="text_sm">
														Ensuring ethical collection practices are followed by the team.
													</li>
												</ul>
											</div>
										</div>

										<div className={`${styles.BtnBx} ptb_20`}>
											<Button
												buttonType="four"
												condition={"white"}
												title={"Join Us"}
												link={"/careers/career-contact-form"}
											/>
										</div>
									</div>
								),
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}
