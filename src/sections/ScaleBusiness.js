// MODULES //
import { useState, useEffect } from "react";

// COMPONENTS //
import Accordian from "@/components/Accordian";

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// UTILS //

// STYLES //
import styles from "@/styles/sections/ScaleBusiness.module.scss";

// IMAGES //
import Map from "../../public/img/home/Map.png";

// DATA //

/** ScaleBusiness Section */
export default function ScaleBusiness() {
	const [activeFAQ, setActiveFAQ] = useState(0);
	/** Toggle faq item state */
	const toggleItem = (id) => {
		const selectedIndex = id === activeFAQ ? -1 : id;
		setActiveFAQ(selectedIndex);
	};
	const accordianData = [
		{
			maintitle: "Microfinance loans",
			AccNo: "01",
			description:
				"Enabling rural women to start and expand their business at one of the lowest interest rates.",
		},
		{
			maintitle: "Individual loan",
			AccNo: "02",
			description:
				"Enabling entrepreneurs, especially rural women to meet their needs and scale their businesses to new heights.",
		},
		{
			maintitle: "Insurance",
			AccNo: "03",
			description:
				"A support system for our women customers and their family ensuring financial security and future stability.",
		},
	];
	return (
		<section className={styles.ScaleBusiness}>
			<div className="container">
				<div className={`${styles.BusinessFlex}`}>
					<div className={`${styles.AccordianBx}`}>
						<h2 className="text_xxxl color_white">
							Scale your business with our financial services
						</h2>
						<div className={`${styles.AccMain}`}>
							{/* Accordian Items using json */}
							{accordianData.map((data, index) => (
								<Accordian
									isPlus
									index={index}
									// key={id}
									accID={`acc${index}`}
									isActive={activeFAQ === index}
									toggleItem={toggleItem}
									accTitle={data.maintitle}
									accNo={data.AccNo}
									titleClass="text_lg font_primary text_500 color_white"
									borderClass="white"
									key={index}
								>
									<div className={`${styles.AccContentBx}`}>
										<div className={`${styles.ContentBx} color_white`}>
											<p className="text_xs text_500">{parse(data.description)}</p>
										</div>
									</div>
								</Accordian>
							))}
						</div>
					</div>
					<div className={`${styles.MapImgBx}`}>
						<img src={Map.src} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}
