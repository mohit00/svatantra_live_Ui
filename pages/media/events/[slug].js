// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrumb from "@/components/Breadcrumb";

// SECTIONS //
import Udaangallery from "@/components/Udaangallery";
import EventsTop from "@/sections/media/events/EventsTop";
import AvantGarde from "@/sections/media/events/AvantGarde";
import Eventinsti from "@/sections/media/events/EventInsti";

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/EventsUdaan.module.scss";

// IMAGES //
import udaan from "../../../public/img/udaan.jpg";
import GalleryComponent from "@/sections/Gallery";

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
					<Breadcrumb link5={"events"} linkTitle={"events"} />

					<EventsTop />
					<Udaangallery />
				</div>
				<AvantGarde />
				<div className="container">
					<Eventinsti />
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
