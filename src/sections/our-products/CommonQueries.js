// MODULES //

// COMPONENTS //
import AccordianCommon from "@/components/AccordianCommon";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/our-products/CommonQueries.module.scss";

// IMAGES //

// DATA //

/** CommonQueries Component */
export default function CommonQueries() {
	return (
		<section className={`${styles.CommonQueries} ptb_80`}>
			<div className="container">
				<div className={`${styles.common_queries_flex} f_w_j`}>
					<div className={`${styles.title_wrap}`}>
						<h2 className="text_xxxl color_primary">Common Queries</h2>
					</div>
					<div className={`${styles.common_queries_faq}`}>
						<AccordianCommon
							fontStyle={"text_lg"}
							fontWeight={"f_w_m"}
							fontFamily={"font_secondary"}
							fontColor={"color_light_black"}
							items={[
								{
									title: "What is microfinance?",
									children: (
										<div>
											<p className="text_xs font_secondary color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "What is a Microfinance Institution (MFI)?",
									children: (
										<div>
											<p className="text_xs font_secondary color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "How is Svatantra different from other MFIs?",
									children: (
										<div>
											<p className="text_xs font_secondary color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "Who are microfinance clients?",
									children: (
										<div>
											<p className="text_xs font_secondary color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "Why is microfinance important for rural women?",
									children: (
										<div>
											<p className="text_xs font_secondary color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "What is the rate of interest charged on the loan?",
									children: (
										<div>
											<p className="text_xs font_secondary color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
								{
									title: "What is the recruitment process at Svatantra?",
									children: (
										<div>
											<p className="text_xs font_secondary color_light_black opacity_8">
												Microfinance refers to a variety of affordable financial services
												that target low-income clients, living either on or below the
												poverty line, particularly women. It aims to empower these clients
												by providing them access to microcredit for income-generating
												activities, savings and insurance, and remittance services.
											</p>
										</div>
									),
								},
							]}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
