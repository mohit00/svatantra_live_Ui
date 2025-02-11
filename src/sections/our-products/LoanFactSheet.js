// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/our-products/LoanFactSheet.module.scss";

// IMAGES //
import check from "../../../public/img/check.svg";

// DATA //

/** LoanFactSheet Component */
export default function LoanFactSheet() {
	return (
		<section className={`${styles.LoanFactSheet} pb_80`}>
			<div className="container">
				<div className={`${styles.title_wrap} pb_40`}>
					<h2 className="text_xxxl color_primary pb_20">
						A quick guide to our loan fact sheet
					</h2>
				</div>
			</div>
		</section>
	);
}
