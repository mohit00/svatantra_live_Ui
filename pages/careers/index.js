// MODULES //

// COMPONENTS //
import Breadcrum from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import MetaTags from "@/components/MetaTags";
import EmployeesComponent from "@/pages/Contact/careers/Employees";
import JoinComponent from "@/pages/Contact/careers/Join";

// SECTIONS //
import Journey from "@/pages/Contact/careers/Journey";
import TalentComponent from "@/pages/Contact/careers/Talent";
import WhyComponent from "@/pages/Contact/careers/Why";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/careers.module.scss";

// UTILS //

// IMAGES //
import Girl1 from "../../public/img/about/girl.jpg";
import Girl2 from "../../public/img/about/girl2.jpg";

// SERVICES //
import {
	getEmployeeTestimonials,
	getTalentPdf,
	getTalents,
} from "@/services/CareersService";

// DATA //
/** employee data */
export const getStaticProps = async () => {
	const employee = await getEmployeeTestimonials();
	const talents = await getTalents();
	const pdfTalent = await getTalentPdf();

	return { props: { employee, talents, pdfTalent }, revalidate: 60 };
};

/** Contact Page */
export default function CareersPage({ employee, talents, pdfTalent }) {
	// console.log(pdfTalent, "dddd");
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Careers"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.CareersPage}>
				<Breadcrum link5="careers" linkTitle={"Careers"} />
				<InnerBanner bannerTitle="Elevate your career and create a purpose-driven future" />
				<Journey />
				<WhyComponent />
				<EmployeesComponent data={employee} />
				<div>
					<section className={`${styles.Committed} ptb_80`}>
						<div className="container">
							<h2 className="section_title">
								Committed to fueling your journey <br className="hidden_sm" /> towards
								self-powered growth
							</h2>
							<h4 className="text_lg pt_20 pb_40 opacity_80">
								At Svatantra, we are driven by a singular vision: to create a
								self-powered system of growth. We believe in the transformative power of
								grassroots entrepreneurship and are committed to championing the
								individuals who fuel India’s economic rise.
							</h4>
							<div className={`${styles.committed_section_wrapper}`}>
								<div className={`${styles.committed_section} f_r_aj_between f_w`}>
									<div className={`${styles.committed_img}`}>
										<img src={Girl1.src} className="img-responsive" alt="Girl1" />
									</div>
									<div className={`${styles.committed_info}`}>
										<p className="text_sm opacity_8">
											Our purpose is to cultivate a new generation of entrepreneurs who
											will shape India’s journey into a global economic superpower. Taking
											every step forward, we strive to turn aspirations into
											accomplishments, creating ripples of progress far beyond our own
											world.
										</p>
									</div>
								</div>
								<div className={`${styles.committed_section} f_r_aj_between f_w`}>
									<div className={`${styles.committed_img}`}>
										<img src={Girl2.src} className="img-responsive" alt="Girl1" />
									</div>
									<div className={`${styles.committed_info}`}>
										<p className="text_sm opacity_8">
											Our purpose is to cultivate a new generation of entrepreneurs who
											will shape India’s journey into a global economic superpower. Taking
											every step forward, we strive to turn aspirations into
											accomplishments, creating ripples of progress far beyond our own
											world.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<TalentComponent data={talents} pdfTalent={pdfTalent} />
				<JoinComponent />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
