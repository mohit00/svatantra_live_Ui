// MODULES //

// COMPONENTS //
import Breadcrum from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/CareersDisclaimer.module.scss";

// IMAGES //

// DATA //

/** Careers Disclaimer Page */
export default function CareersDisclaimerPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Careers Disclaimer"}
				Desc={""}
				OgImg={""}
				Url={"/careers-disclaimer"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.CareersDisclaimerPage}`}>
				<div className="container">
					<Breadcrum
						linknest1={"/careers"}
						linknestTitle1={"Career"}
						linknest2={"/career/careers-disclaimer"}
						linknestTitle2={"Career Disclaimer"}
					/>

					<h1 className="section_title pb_40 text_center">
						Job Disclaimer and Caution Notice
					</h1>

					<ul>
						<li className="pb_20">
							Svatantra Microfin Private Limited do not demand or accept any amount or
							security deposit from job applicants during the selection process or
							while inviting applicants for an interview .
						</li>
						<li className="pb_20">
							Anyone making an employment offer in return for money or other type of
							gain is not authorized by Svatantra Microfin Private Limited and is not
							offering an approved job.
						</li>
						<li className="pb_20">
							An authentic job offer mail from us will have our domain name
							name@svatantra.adityabirla.com. Please be aware of fraudsters using fake
							URLs to mask themselves as from reputed Organizations. Hence, always
							check & verify the email ID.
						</li>
						<li className="pb_20">
							Please check the official website of Svatantra Microfin Private Limited
							(www.svatantramicrofin.com) to get the contact details and enquire with
							the company to confirm if the offers or promotions are genuine; do not
							respond to any fraudulent communication.
						</li>
						<li className="pb_50">
							Please be informed that we, Svatantra Microfin Private Limited, shall not
							in any way, be responsible or liable for any loss that may be occasioned
							to any member of the public on account of their dealings with such
							fraudulent persons.
						</li>
					</ul>
					<p className="f_w_b text_center pb_20">
						Should you come across any such fraudulent incident or have any
						information regarding solicitation for recruitment or employment with
						Svatantra Microfin Private Limited, please assist us in taking appropriate
						action to curb such mala fide activities.
					</p>
					<p className="f_w_b text_center pb_80">
						We reserve our right to take appropriate legal action against such
						individuals/entities, as we deem fit.
					</p>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
