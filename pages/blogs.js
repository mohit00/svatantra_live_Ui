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

// STYLES //
import styles from "@/styles/pages/Blogs.module.scss";

// IMAGES //
import advent from "../public/img/advent.png";

// DATA //

/** Blogs Page */
export default function BlogsPage() {
	const [selectedOptions, setSelectedOptions] = useState({
		select1: "SVATANTRA MICROFIN",
		select2: "2023",
	});

	const [openDropdowns, setOpenDropdowns] = useState({
		select1: false,
		select2: false,
	});

	const options = [
		{ label: "SVATANTRA MICROFIN" },
		{ label: "SVATANTRA MICROFIN" },
		{ label: "SVATANTRA MICROFIN" },
	];
	const options2 = [
		{ label: "All" },
		{ label: "Newest Arrivals" },
		{ label: "Best Sellers" },
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
			[dropdown]: option.label,
		}));

		setOpenDropdowns({ select1: false, select2: false });
	};
	const BlogList = [
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Malati's Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title:
				"Small Grocery Stores and Shops:The Heart of Rural India's Economic and Social Fabric",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Role of rural women in Indian agricultural businesses",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Malati's Tea Stall - A Blend for Business Excellence",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title:
				"Small Grocery Stores and Shops:The Heart of Rural India's Economic and Social Fabric",
			link: "/blogs-inside",
		},
		{
			image: advent.src,
			cardtype: "SVATANTRA MICROFIN",
			date: "14 June 2024",
			title: "Role of rural women in Indian agricultural businesses",
			link: "/blogs-inside",
		},
	];
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Blogs"} Desc={""} OgImg={""} Url={"/blogs"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.BlogsPage}>
				<div className="container">
					<Breadcrumb link5={"blogs"} linkTitle={"Blogs"} />
					<section className={`${styles.BlogsListingMain}`}>
						<div className={`${styles.Head}`}>
							<h2 className="section_title pb_20">Stories of spearheading change</h2>
							<p className="text_md color_light_black opacity_80 pb_60">
								Insights into the future of rural entrepreneurship in India
							</p>
							{/* <div className={`${styles.Tabs}`}>
								<div className={`${styles.btn} ${styles.active} text_16 color_primary`}>
									Filter Articles
								</div>
								<div className={`${styles.btn} text_16 color_primary`}>Blogs</div>
								<div className={`${styles.btn} text_16 color_primary`}>Articles</div>
								<div className={`${styles.btn} text_16 color_primary`}>Videos</div>
								<div className={`${styles.btn} text_16 color_primary`}>Recipes</div>
							</div> */}
							<div className={`${styles.Filter}`}>
								<p className="text_reg text_700">Categories</p>
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
												<span className="text_reg text_700">{selectedOptions.select1}</span>
											</div>
											<img
												src={
													openDropdowns.select1
														? "img/product/filterIcons/UpArrow.svg"
														: "img/product/filterIcons/DnArrow.svg"
												}
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
														<span className="text_reg text_600">{option.label}</span>
													</li>
												))}
											</ul>
										)}
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.GridBox}`}>
							{BlogList.map((item, ind) => {
								return (
									<div className={`${styles.slider}`} key={ind}>
										<div className={`${styles.box1}`}>
											<div className={`${styles.imgBox}`}>
												<img src={item.image} alt="box1" className={`${styles.mainImg}`} />
												{/* <img src={box11.src} alt="logo" className={`${styles.logo}`} /> */}
											</div>

											<div className={`${styles.categoryBox}`}>
												<div className={`${styles.news}`}>
													<p>{item.cardtype}</p>
												</div>
												<div className={`${styles.date}`}>
													<p>{item.date}</p>
												</div>
											</div>

											<p className="text_reg_20 f_w_m pt_20">{item.title}</p>
										</div>
									</div>
								);
							})}
						</div>
						<div className={`${styles.ViewBtn}`}>
							{/* <Button color="secondary" variant="filled">
								View All
							</Button> */}
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
