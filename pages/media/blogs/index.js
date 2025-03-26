/* eslint-disable require-jsdoc */
// MODULES //
import { useState, useEffect } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrumb from "@/components/Breadcrumb";

// SECTIONS //

// PLUGINS //

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/pages/Blogs.module.scss";

// IMAGES //
import advent from "../../../public/img/advent.png";

// DATA //
import { getAllBlogs } from "@/services/BlogService";

/** getOurLeaderships */
export const getStaticProps = async (context) => {
	const blogsData = await getAllBlogs();
	return { props: { blogsData }, revalidate: 60 };
};
/** Blogs Page */
export default function BlogsPage({ blogsData }) {
	const dateString = blogsData.data[0].date;
	const year = dateString.split(" ")[2];
	const yearNew = [
		...new Set(blogsData.data.map((item) => new Date(item.date).getFullYear())),
	];

	console.log(yearNew, "ddddd");

	const [selectedOptions, setSelectedOptions] = useState({
		select1: "All",
		select2: "All",
	});

	const [openDropdowns, setOpenDropdowns] = useState({
		select1: false,
		select2: false,
	});

	const options = [
		{ label: "Svatantra Microfin" },
		{ label: "Svatantra Microfin" },
		{ label: "Svatantra Microfin" },
	];
	const options2 = [
		{ label: "all" },
		...yearNew.map((year) => ({ label: String(year) })),
	];

	const toggleDropdown = (dropdown) => {
		setOpenDropdowns((prevState) => ({
			select1: dropdown === "select1" ? !prevState.select1 : false,
			select2: dropdown === "select2" ? !prevState.select2 : false,
		}));
	};

	const handleOptionClick = (option, dropdown) => {
		setSelectedOptions((prevState) => ({
			...prevState,
			[dropdown]: option,
		}));

		setOpenDropdowns({ select1: false, select2: false });
	};

	const filteredData = blogsData.data.filter(
		(item) =>
			(selectedOptions.select1 === "All" ||
				item.author.name === selectedOptions.select1) &&
			(selectedOptions.select2 === "All" ||
				item.date.includes(selectedOptions.select2))
	);

	// console.log(filteredData, " filteredData");

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Blogs"} Desc={""} OgImg={""} Url={"/blogs"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.BlogsPage} pb_80`}>
				<div className="container">
					<Breadcrumb
						linknest1={"/media/blogs"}
						linknestTitle1={"Media"}
						linknest2={"/media/blogs"}
						linknestTitle2={"Blogs"}
					/>
					<section className={`${styles.BlogsListingMain}`}>
						<div className={`${styles.Head}`}>
							<h2 className="section_title pb_10">Stories of spearheading change</h2>
							<p className="text_md color_light_black opacity_80">
								Insights into the future of rural entrepreneurship in India
							</p>
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
													<span className="text_reg f_w_m">{selectedOptions.select1}</span>
												</div>
												<img
													src={
														openDropdowns.select1
															? "../img/icons/UpArrow.svg"
															: "../img/icons/DownArrow.svg"
													}
													alt="Toggle Dropdown"
													className={`${styles.arrow}`}
												/>
											</div>

											{openDropdowns.select1 && (
												<ul className={`${styles.select_options}`}>
													{[
														...new Map(
															blogsData.data.map((item) => [item.author.name, item])
														).values(),
													].map((option) => (
														<li
															key={option.title}
															className={`${styles.select_option} ${
																option.author.name === selectedOptions.select1
																	? styles.selected
																	: ""
															}`}
															onClick={() => handleOptionClick(option.author.name, "select1")}
														>
															<span className="text_sm">{option.author.name}</span>
														</li>
													))}
												</ul>
											)}
										</div>
									</div>
								</div>
								{/* year */}
								<div className={`${styles.Filter}`}>
									<div className={`${styles.selectBx}`}>
										<div className={`${styles.custom_select}`}>
											<div
												className={`${styles.select_header}`}
												onClick={() => toggleDropdown("select2")}
												tabIndex={0}
											>
												<div className={`${styles.selected}`}>
													{/* <img
														src={options.find((opt) => opt.label === selectedOption)?.icon}
														alt={selectedOption}
														className={`${styles.icon}`}
													/> */}
													<span className="text_reg">{selectedOptions.select2}</span>
												</div>
												<img
													src={
														openDropdowns.select2
															? "../img/icons/UpArrow.svg"
															: "../img/icons/DownArrow.svg"
													}
													alt="Toggle Dropdown"
													className={`${styles.arrow}`}
												/>
											</div>

											{openDropdowns.select2 && (
												<ul className={`${styles.select_options}`}>
													{options2.map((option) => (
														<li
															key={option.label}
															className={`${styles.select_option} ${
																option.label === selectedOptions.select2 ? styles.selected : ""
															}`}
															onClick={() => handleOptionClick(option.label, "select2")}
														>
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
						<div className={`${styles.GridBox}`}>
							{filteredData.length > 0 ? (
								filteredData.map((item, ind) => (
									<div className={`${styles.slider}`} key={ind}>
										<a href={`blogs/${item.slug}`}>
											<div className={`${styles.box1}`}>
												<div className={`${styles.imgBox}`}>
													<img
														src={StrapiImage(item.thumbnail).url}
														alt="box1"
														className={`${styles.mainImg}`}
													/>
												</div>

												<div className={`${styles.categoryBox}`}>
													<div className={`${styles.news}`}>
														<p>{item.author.name}</p>
													</div>
													<div className={`${styles.date}`}>
														<p>{item.date}</p>
													</div>
												</div>

												<p className="text_reg_20 f_w_m pt_20">{item.title}</p>
											</div>
										</a>
									</div>
								))
							) : (
								<p>No blogs found</p>
							)}
						</div>
					</section>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
