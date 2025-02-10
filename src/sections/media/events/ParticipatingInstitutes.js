// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/media/events/ParticipatingInstitutes.module.scss";

// IMAGES //

// DATA //

/** ParticipatingInstitutes Component */
export default function ParticipatingInstitutes() {
	const ParticipatingInstitutes = [
		{
			textOne: "FMS",
			textTwo: "XIMB Bbn",
			textThree: "IIM A",
			textFour: "IIM B",
		},
		{
			textOne: "FMS",
			textTwo: "XIMB Bbn",
			textThree: "IIM A",
			textFour: "IIM B",
		},
		{
			textOne: "FMS",
			textTwo: "XIMB Bbn",
			textThree: "IIM A",
			textFour: "IIM B",
		},
		{
			textOne: "IIM Shillong",
			textTwo: "XIMB Bbn",
			textThree: "IIM A",
			textFour: "IIM B",
		},
		{
			textOne: "FMS",
			textTwo: "IIFT Delhi & Kolkata",
			textThree: "IIM A",
			textFour: "IIM B",
		},
		{
			textOne: "FMS",
			textTwo: "IIFT Delhi & Kolkata",
			textThree: "IIM A",
			textFour: "IIM B",
		},
	];
	return (
		<section className={`${styles.ParticipatingInstitutes} ptb_80`}>
			<div className="container">
				<div className={styles.titleBox}>
					<h2 className="text_xxxl color_primary">Participating Institutes</h2>
				</div>
				<div className={`${styles.table_wrap} pt_40`}>
					<table>
						{ParticipatingInstitutes.map((item) => (
							<tr key={item.textOne}>
								<td>{item.textOne}</td>
								<td>{item.textTwo}</td>
								<td>{item.textThree}</td>
								<td>{item.textFour}</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		</section>
	);
}
