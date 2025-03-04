// MODULES //

// COMPONENTS //
import ContentFromCms from "@/components/ContentFromCms";
import StrapiImage from "@/utils/StrapiImage";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/media/events/EventsTop.module.scss";

// IMAGES //
import udaan from "../../../../public/img/udaan.jpg";

// DATA //

/** EventsTop Component */
export default function EventsTop({ title, logoImg, desc1 }) {
	return (
		<section className={`${styles.EventsTop} pb_50`}>
			<div className="container">
				<div className={styles.contentBox}>
					<div className={styles.titleBox}>
						<h1 className="text_xxxl color_primary">
							{title}
							{/* Udaan Scholarship <br />
							programme */}
						</h1>
						<img src={StrapiImage(logoImg).url} />
					</div>
				</div>
				<div className={`${styles.para}`}>
					<ContentFromCms>{desc1}</ContentFromCms>
					{/* <p className="text_sm color_light_black font_secondary opacity_8 pb_20">
						In July 2019, Svatantra launched Udaan Scholarship programme with the
						intention of providing scholarships and career guidance to rural Indian
						girl students. We selected 96 girl students from across 7 states, and with
						the aid of a career counselling specialist, we organised a tailored career
						exploration programme for them and their parents. An extensive online
						examination was used to conduct the counselling, and this was followed by
						an in-person interview. For a year, these female students were awarded a
						monthly scholarship.
					</p>
					<p className="text_sm color_light_black font_secondary opacity_8">
						The company intended to make a longterm difference in students&apos; lives
						through Udaan Scholarship. In addition to providing students with
						financial support, scholarships will also help them in the long run by
						providing career counselling. The goal of career counselling is to make
						sure that students adopt the road that will lead them to their ideal
						career.
					</p> */}
				</div>
			</div>
		</section>
	);
}
