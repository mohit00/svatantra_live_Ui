// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/our-products/LoanFactSheet.module.scss";

// IMAGES //
import pdf_icon from "../../../public/img/pdf_icon.svg";

// DATA //

/** LoanFactSheet Component */
export default function LoanFactSheet() {
	return (
		<section className={`${styles.LoanFactSheet} pb_80`}>
			<div className="container">
				<div className={`${styles.title_wrap} pb_40`}>
					<h2 className="text_xxxl color_primary ">
						A quick guide to our loan fact sheet
					</h2>
				</div>
				<div className={`${styles.table_wrap}`}>
					<table>
						<thead>
							<tr>
								<th>Products</th>
								<th>Loan amount</th>
								<th>Tenure</th>
								<th>Repayment option</th>
								<th>Rate of interest (p.a)</th>
								<th>Loan processing fee</th>
								<th>Repayment charges</th>
							</tr>
						</thead>
						<tr>
							<td>Microfinance loans</td>
							<td>₹ 5,369 to ₹ 1 lakh</td>
							<td>12 to 30 Months</td>
							<td>Monthly</td>
							<td>19.75% to 24.25%*</td>
							<td>0.75% to 1.50% (+GST)</td>
							<td>Nil</td>
						</tr>
						<tr>
							<td>MSME loans</td>
							<td>₹ 1 lakh to ₹ 3 lakh</td>
							<td>24 to 36 Months</td>
							<td>Monthly</td>
							<td>23%</td>
							<td>2% (+GST)</td>
							<td>
								2% (excluding GST) on principal amount outstanding as on date of payment
							</td>
						</tr>
						<tr>
							<td rowSpan="2">Insurance</td>
							<td colSpan="6">
								Svantra offers Credit Linked Insurance, a life insurance tailored to
								provide financial support to our women customers and their spouses. It
								ensures the family remains economically independent, especially in case
								of death of the insured person.
							</td>
						</tr>
						{/* <tr className={`${styles.bgWhite} ${styles.bgBorder}`}>
							<td colSpan="6">
								₹ 1 lakh to ₹ 3 lakhCredit Linked Insurance is a life insurance offered
								by Svatantra to women customers and her spouse to provide relief to her
								family in case of death of the insured person.
							</td>
						</tr> */}
						{/* <tr className={`${styles.bgWhite} `}>
							<td colSpan="7" className={`${styles.bgBorder}`}>
								ROI is a function of risk profile of the customers and will be reviewed
								periodically. All the products above Rs.25000 have tenure ranging from
								24 to 30 months. Apart from credit life insurance all other insurance
								products are optional (consent based) Penal charges - Nil
							</td>
						</tr> */}
					</table>
				</div>
				<div className={`${styles.btnBox} pt_30`}>
					<a href="">
						<span>
							<img src={pdf_icon.src} alt="icon" />
						</span>
						Disclouser of Interest Rate
					</a>
					<a href="">
						<span>
							<img src={pdf_icon.src} alt="icon" />
						</span>
						Customer Awareness on Overdue, SMA/ NPA
					</a>
				</div>
			</div>
		</section>
	);
}
