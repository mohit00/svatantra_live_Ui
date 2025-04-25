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
import Girl1 from "../../public/img/careers/cr1.jpg";
import Girl2 from "../../public/img/careers/cr2.jpg";
import desktopBanner from "../../public/img/finalBanners/Life_at_sva.jpg";
import mobileBanner from "../../public/img/mobileBanners/life_at_sva.jpg";
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
				<InnerBanner
					bannerTitle="Elevate your career and create a purpose-driven future"
					desktopImage={desktopBanner.src}
					mobileImage={mobileBanner.src}
				/>
				<Journey />
				<WhyComponent />
				<EmployeesComponent data={employee} />
				<div>
					<section className={`${styles.Committed} ptb_80`}>
						<div className="container">
							<h2 className="text_lg font_primary f_w_m pb_10 color_primary">
								A Culture of Excellence Through Training and Development
							</h2>
							<h4 className="text_sm opacity_8 pb_10 pb_30">
								At Svatantra, we believe that a people-first culture is the cornerstone
								of success. This commitment begins with investing in our employees,
								ensuring they are well-trained, highly skilled, and fully aligned to
								delivering excellence at every touchpoint. Our comprehensive training
								programs are designed to empower teams with diverse skills and
								perspectives, enabling them to excel and contribute meaningfully to our
								shared goals.
							</h4>
							<div className={`${styles.committed_section_wrapper}`}>
								<div className={`${styles.committed_section} f_r_aj_between f_w`}>
									<div className={`${styles.committed_img}`}>
										<img src={Girl1.src} className="img-responsive" alt="Girl1" />
									</div>
									<div className={`${styles.committed_info}`}>
										<h2 className="text_lg font_primary f_w_m pb_10 color_primary">
											Comprehensive onboarding and <br className="hidden_sm" />
											building strong foundations
										</h2>
										<p className="text_sm opacity_8">
											New employees embark on a 30-day intensive training program,
											combining practical field experience with focused classroom learning.
											This immersive approach enables every employee with a strong
											foundation and essential skills in their respective fields,
											establishing them up for success from day one itself.
										</p>
									</div>
								</div>
								<div className={`${styles.committed_section} f_r_aj_between f_w`}>
									<div className={`${styles.committed_img}`}>
										<img src={Girl2.src} className="img-responsive" alt="Girl1" />
									</div>
									<div className={`${styles.committed_info}`}>
										<h2 className="text_lg font_primary f_w_m pb_10 color_primary">
											Continuous learning with e-Gurukool to stay ahead of the curve
										</h2>
										<p className="text_sm opacity_8 pb_10">
											Our commitment to employee development extends beyond the initial
											onboarding phase. Through our innovative e-Gurukool platform,
											employees have access to ongoing refresher courses and resources.
											ensures our team stays up-to-date with industry best practices,
											emerging trends, and evolving company strategies, fostering a culture
											of innovation. Furthermore, combining intensive training with digital
											learning, empowers our employees to -
										</p>
										<ul>
											<li className="text_sm opacity_8">
												Develop a deep understanding of our company values and culture.
											</li>
											<li className="text_sm opacity_8">
												Master the necessary skills and knowledge to excel in their roles.
											</li>
											<li className="text_sm opacity_8">
												Adapt to changing industry landscapes and contribute to our ongoing
												success.
											</li>
											<li className="text_sm opacity_8">
												Deliver exceptional service and experiences to our clients.
											</li>
										</ul>
									</div>
								</div>
								<p className="text_sm opacity_8 ">
									By investing in our people, we invest in our future. We believe that
									well-trained, empowered employees are the key to achieving our
									ambitious goals and delivering exceptional results. (the above two
									lines are striked out as they are repetitive)
								</p>
							</div>
						</div>
					</section>
				</div>
				{/* <TalentComponent data={talents} pdfTalent={pdfTalent} /> */}
				<JoinComponent />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
