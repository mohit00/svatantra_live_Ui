// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/media/events/AvantGarde.module.scss";

// IMAGES //
import udaan from "../../../../public/img/udaan.jpg";

// DATA //

/** AvantGarde Component */
export default function AvantGarde({ resultTitle, resultData }) {
	const avantGarde = [
		{
			title: "First Place",
			subTitle: "Goodfellas",
			desc: "(Rishabh Mishra, Ishant Bansal, Sai Sankalp Vemavarapu)",
			name: "S. P. Jain",
		},
		{
			title: "Runner-up",
			subTitle: "Finpreneurs",
			desc: "(Nidhi Dave, Khushi Bahl, & Dhruvin Zaveri)",
			name: "S. P. Jain",
		},
	];
	return (
		<section className={`${styles.AvantGarde} ptb_80`}>
			<div className="container">
				<div className={styles.titleBox}>
					<h2 className="text_xxxl color_white">{resultTitle}</h2>
				</div>
				<div className={`${styles.avant_garde_flex} pt_60`}>
					{resultData?.map((item) => (
						<div className={styles.itemContent} key={item?.title}>
							<div className={`${styles.title} text_center`}>
								<h4 className="text_lg font_primary color_white f_w_m">
									{item?.position}
								</h4>
							</div>
							<div className={`${styles.info} text_center`}>
								<h5 className="text_md font_secondary color_light_black opacity_8 f_w_b">
									{item?.title}
								</h5>
								<p className="text_xs color_light_black opacity_8 ptb_10">
									{item?.names}
								</p>
								<p className="text_xs color_primary opacity_8">{item?.author}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
