// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrum from "@/components/Breadcrumb";
import Udaangallery from "@/components/Udaangallery";

// SECTIONS //
import EventsTop from "@/sections/media/events/EventsTop";
import AvantGarde from "@/sections/media/events/AvantGarde";
import ParticipatingInstitutes from "@/sections/media/events/ParticipatingInstitutes";

// PLUGINS //

// IMAGES //

// STYLES //
import styles from "@/styles/pages/EventsInside.module.scss";

// SERVICES //

// UTILS //

/** Events Inside Page */
export default function EventsInside() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Events Inside"}
				Desc={""}
				Keywords={""}
				OgImg={""}
				Url={"/events"}
			/>
			{/* Header */}
			<Header />

			{/* Page Content Starts */}
			<main className={`${styles.eventsInside_page} no_banner_page`}>
				<Breadcrum link2="Media" link3="Events" link4="Udaan" />
				<EventsTop />
				<section>
					<div className="container">
						<Udaangallery />
					</div>
				</section>
				<AvantGarde />
				<ParticipatingInstitutes />
			</main>
			{/* Page Content Ends */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
