// MODULES //

// COMPONENTS //
import Breadcrum from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import AccordionSection from "@/pages/Contact/careers/AccordionSection";
import { getJobDetails } from "@/services/CareersService";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/careers.module.scss";

// UTILS //

// IMAGES //

// DATA //
/**Job opening */
export const getStaticProps = async () => {
	const jobDetailsData = await getJobDetails();

	return { props: { jobDetailsData }, revalidate: 60 };
};
/** Contact Page */
export default function JobOpening({ jobDetailsData }) {
	// console.log(jobDetailsData, "ddddddddd");
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.JobOpeningPage}>
				<Breadcrum link2="Careers" link3="job-opening" />
				<AccordionSection data={jobDetailsData} />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
