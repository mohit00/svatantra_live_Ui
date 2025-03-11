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
import { getEvents, getEventsBySlug } from "@/services/eventsService";

/** getStaticPaths */
export async function getStaticPaths() {
	const { data: insights } = await getEvents();

	const paths = insights.map((post) => ({
		params: { slug: post?.slug || "test" },
	}));

	// We'll prerender only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: true };
}

/** getStaticProps */
export async function getStaticProps({ params }) {
	const { data: insights } = await getEventsBySlug(params?.slug);
	// const { data: related } = await getAllBlogs(insights[0]?.type, params.slug);

	return {
		props: { data: insights[0] || { error: true } },
		// Next.js will invalidate the cache when a
		// request comes in, at most once every 60 seconds.
		revalidate: 60,
	};
}

/** Events Udaan Page */
export default function EventsUdaanPage({ data }) {
	return (
		<div>
			{/* Metatags */}
			{/* <MetaTags
				Title={"Events Udaan"}
				Desc={""}
				OgImg={""}
				Url={"/events-udaan"}
			/> */}
			{/* <Breadcrumb
				link7={"events"}
				linkTitle={"events"}
				link8={`events/${data?.slug}`}
				linkTitle2={`${data?.title}`}
			/> */}

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.EventsUdaanPage}>
				<div className="container">
					<Breadcrumb
						link7={"media/events"}
						linkTitle={"events"}
						link8={`media/events/${data?.slug}`}
						linkTitle2={`${data?.title}`}
					/>
				</div>
				<div className="container">
					{data?.title || data?.logo || data?.desc ? (
						<EventsTop
							title={data?.title}
							logoImg={`${data?.logo?.url}`}
							desc1={data?.desc}
						/>
					) : (
						""
					)}

					{data?.gallery_img && <Udaangallery imageData={data?.gallery_img} />}
				</div>
				{data?.result && data?.result_title ? (
					<AvantGarde resultTitle={data?.result_title} resultData={data?.result} />
				) : (
					""
				)}
				{data?.table != null || data?.desc2 != null || data?.problems != null ? (
					<div className="container">
						<Eventinsti
							tableData={data?.table}
							descData={data?.desc2}
							problemStatementData={data?.problems}
						/>
					</div>
				) : (
					""
				)}
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
