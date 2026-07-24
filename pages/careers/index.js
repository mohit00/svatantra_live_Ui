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
import Footer2 from "@/components/Footer2";
// PLUGINS //

// STYLES //
import styles from "@/styles/pages/careers.module.scss";

// UTILS //

// IMAGES //
import Girl1 from "../../public/img/careers/cr1.jpg";
import Girl2 from "../../public/img/newImg/careerNew.jpg";
import desktopBanner from "../../public/img/newImg/careerBannerNew.jpg";
import mobileBanner from "../../public/img/newImg/careerMobile.jpg";
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
					bannerTitle="Careers"
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
								Talent Acquisition and Recruitment
							</h2>
							<h4 className="text_sm opacity_8 pb_10 pb_30">
								We follow structured recruitment processes for key operational roles, including a two-round interview process. For field officer positions, we primarily recruit fresh graduates and early-career talent.
								As part of our employee verification framework, we undertake background verification processes for field employees, including house visits, criminal background verification and credit bureau checks. These processes are intended to support operational integrity and governance standards across our branch network.
							</h4>
							<div className={`${styles.committed_section_wrapper}`}>
								<div className={`${styles.committed_section} f_r_aj_between f_w`}>
									<div className={`${styles.committed_img}`}>
										<img src={Girl1.src} className="img-responsive" alt="Girl1" />
									</div>
									<div className={`${styles.committed_info}`}>
										<h2 className="text_lg font_primary f_w_m pb_10 color_primary">
											Learning and Development 
										</h2>
										<p className="text_sm opacity_8">
											Newly recruited field officers undergo an approximately 5-day induction programme comprising classroom-based training and on-the-job training under the supervision of experienced employees and branch managers.
											<br className="hidden_sm" />
											In addition to induction programmes, we conduct periodic refresher training, leadership development initiatives and functional capability enhancement programmes across employee categories. These programmes are intended to support employee productivity, operational processes, borrower servicing standards and compliance with internal policies and regulatory requirements.

										</p>
									</div>
								</div>
								<div className={`${styles.committed_section} f_r_aj_between f_w`}>
									<div className={`${styles.committed_img}`}>
										<img src={Girl2.src} className="img-responsive" alt="Girl1" />
									</div>
									<div className={`${styles.committed_info}`}>
										<h2 className="text_lg font_primary f_w_m pb_10 color_primary">
											Internal Talent Development and Career Progression
										</h2>
										<p className="text_sm opacity_8 pb_10">
											Through a well-structured development programme, we ensure employees have access to ongoing refresher courses and resources which ensures our team stays up-to-date with industry best practices, emerging trends, and evolving company strategies.


										</p>
										{/* <ul>
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
											<li className="text_sm opacity_8 st">
												Deliver exceptional service and experiences to our clients.
											</li>
										</ul> */}
									</div>
								</div>
								<p className="text_sm opacity_8 f_w_b">
									By investing in our people, we invest in our future. We believe that
									well-trained, purpose-driven employees are the key to achieving our
									ambitious goals and delivering exceptional results.
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
			<Footer2 />
		</div>
	);
}
