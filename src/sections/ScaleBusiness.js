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
			title: "Where hues meet imagination.",
			description:
				"Enabling rural women to start and expand their business at one of the lowest interest rates.",
		},
		{
			maintitle: "Individual loan",
			title: "Where skills shape dreams.",
			description:
				"Enabling rural women to start and expand their business at one of the lowest interest rates.",
		},
		{
			maintitle: "Insurance",
			title: "Where future legends are born.",
			description:
				"Enabling rural women to start and expand their business at one of the lowest interest rates.",
		},
	];
	return (
		<section className={styles.ScaleBusiness}>
			<div className="container">
				<div className={`${styles.BusinessFlex}`}>
					<div className={`${styles.AccordianBx}`}>
						<h2>Scale your business with our financial services</h2>
						{/* Accordian Items using json */}
						{accordianData.map((data, index) => (
							// <AccordionItem key={index}>
							// 	<AccordionTitle isPlus={true}>
							// 		<p className="text_xxl">{data.maintitle}</p>
							// 	</AccordionTitle>
							// 	<AccordionContent>
							// 		<div className={`${styles.ImgBx} pb_40`}>
							// 			<img src={data.image} alt="mobileImage" />
							// 		</div>
							// 		<p className="text_lg pb_10">{parse(data.title)}</p>
							// 		<p className="text_reg">{parse(data.description)}</p>
							// 	</AccordionContent>
							// </AccordionItem>
							<Accordian
								isPlus
								index={index}
								// key={id}
								accID={`acc${index}`}
								isActive={activeFAQ === index}
								toggleItem={toggleItem}
								accTitle={data.maintitle}
								titleClass="text_xxl font_primary"
								borderClass="white"
								key={index}
							>
								<div className={`${styles.AccContentBx}`}>
									<div className={`${styles.ContentBx} `}>
										<p className="text_reg opac_80">{parse(data.description)}</p>
									</div>
								</div>
							</Accordian>
						))}
					</div>
					<div className={`${styles.MapImgBx}`}>
						<img src={Map.src} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}
