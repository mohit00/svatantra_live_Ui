// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/EventsUdaan.module.scss";

// IMAGES //
import udaan from "../public/img/udaan.jpg";
import GalleryComponent from "@/sections/Gallery";
import Udaangallery from "@/components/Udaangallery";

// DATA //

/** Events Udaan Page */
export default function EventsUdaanPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Events Udaan"}
				Desc={""}
				OgImg={""}
				Url={"/events-udaan"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.EventsUdaanPage}>
				<div className="container">
					<div className={styles.contentBox}>
						<div className={styles.titleBox}>
							<h1 className="text_xxxl color_primary">
								Udaan Scholarship <br />
								programme
							</h1>
							<img src={udaan.src} />
						</div>
					</div>
					<div className={`${styles.para} pb_50`}>
						<p className="text_xs  pb_20">
							In July 2019, Svatantra launched Udaan Scholarship programme with the
							intention of providing scholarships and career guidance to rural Indian
							girl students. We selected 96 girl students from across 7 states, and
							with the aid of a career counselling specialist, we organised a tailored
							career exploration programme for them and their parents. An extensive
							online examination was used to conduct the counselling, and this was
							followed by an in-person interview. For a year, these female students
							were awarded a monthly scholarship.
						</p>
						<p className="text_xs">
							The company intended to make a longterm difference in students&apos;
							lives through Udaan Scholarship. In addition to providing students with
							financial support, scholarships will also help them in the long run by
							providing career counselling. The goal of career counselling is to make
							sure that students adopt the road that will lead them to their ideal
							career.
						</p>
					</div>
					<Udaangallery />
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
