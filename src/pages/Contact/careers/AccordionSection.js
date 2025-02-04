/* eslint-disable require-jsdoc */
// MODULES //
import React, { useState } from "react";

// COMPONENTS //
import AccordianCommon from "@/components/AccordianCommon";
import ContentFromCms from "@/components/ContentFromCms";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/pages/careers/AccordionSection.module.scss";

// IMAGES //

// DATA //

/** DummyComponent Component */
export default function AccordionSection() {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleAccordionClick = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className={`${styles.AccordionSection} pt_40 pb_80`}>
			<div className="container">
				<h2 className="section_title">
					Take the next big step in your career
					<br className="hidden_sm" /> by becoming a part of Svatantra
				</h2>
				<p className="text_md opacity_80 pt_20">
					Explore our current openings and find the perfect role that aligns with
					your career goals.
				</p>
				<div className={`${styles.accordian_main} pt_60`}>
					<AccordianCommon
						fontStyle={"text_lg"}
						fontWeight={"f_w_m"}
						fontFamily={"font_primary"}
						fontColor={"color_light_black"}
						items={[
							{
								title: "Field Officer",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
							{
								title: "Branch Manager- SME",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
							{
								title: "Area Credit Manager-SME",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
							{
								title: "Relationship Officer-Collections",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
							{
								title: "Relationship Officer-SME",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
							{
								title: "Telecalling Relationship Officer",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
							{
								title: "Area Manager",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
							{
								title: "Credit Officer",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
							{
								title: "Branch Manager",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
							{
								title: "Assistant Branch Manager-SME",
								children: (
									<div className={`${styles.table_wrap} f_j f_w`}>
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
								),
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}
