// MODULES //

// COMPONENTS //
import AccordianCommon from "@/components/AccordianCommon";
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/our-products/CommonQueries.module.scss";

// IMAGES //

// DATA //

/** CommonQueries Component */
export default function CommonQueries({
	title,
	faqItems,
	brochureText,
	brochureUrl,
}) {
	return (
		<section className={`${styles.CommonQueries} ptb_80`}>
			<div className="container">
				<div className={`${styles.common_queries_flex} f_w_j`}>
					<div className={`${styles.title_wrap}`}>
						<h2 className="text_xxxl color_primary">{title}</h2>
					</div>
					<div className={`${styles.common_queries_faq}`}>
						<AccordianCommon
							fontStyle={"text_lg"}
							fontWeight={"f_w_m"}
							fontFamily={"font_secondary"}
							fontColor={"color_light_black"}
							items={faqItems}
						/>
					</div>
				</div>
				<div className={`${styles.brochureBg} f_w_j`}>
					<div className={`${styles.brochureTxt}`}>
						<h2 className="text_lg color_primary font_primary f_w_b">
							{brochureText}
						</h2>
					</div>
					<div className={`${styles.brochureBtn}`}>
						<a
							className={`${styles.BtnBx}`}
							href={brochureUrl}
							target="_blank"
							rel="noreferrer"
						>
							<Button
								buttonType="secondary"
								condition={"white"}
								title={"Download brochure"}
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
