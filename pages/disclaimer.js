// MODULES //

// COMPONENTS //
import Breadcrum from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Footer2 from "@/components/Footer2";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Disclaimer.module.scss";

// IMAGES //

// DATA //

/** Disclaimer Page */
export default function DisclaimerPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Disclaimer"} Desc={""} OgImg={""} Url={"/disclaimer"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.DisclaimerPage}>
				<div className="container">
					<Breadcrum linknest1={"/disclaimer"} linknestTitle1={"Disclaimer"} />

					<h1 className="section_title pb_40 text_center">Disclaimer</h1>
					<p className="f_w_r text_center pb_20">
						This is the official site of Svatantra Microfin Private Limited
						(Svatantra) and provides general information about Svatantra. All the
						text, graphics, trademarks and all other content displayed on this site
						are owned by Svatantra. The information and content is based on the laws
						applicable in India.
					</p>
					<p className="f_w_r text_center pb_20">
						While efforts are made to keep the information on this site accurate and
						timely, Svatantra does not guarantee or endorse the content, accuracy or
						completeness of the information, text, graphics, hyperlinks and other
						items contained herein or on any other server. This site and the
						materials, information, and references to services and products if any
						herein, including without limitations, text, graphics and links, are
						provided &quot;as is&quot; without representations or warranties of any
						kind, whether express or implied.
					</p>
					<p className="f_w_r text_center pb_20">
						To the fullest extent permissible, Svatantra. disclaims any warranties,
						express and / or implied, including but not limited to implied warranties
						of merchantability, fitness for a particular purpose, non-infringement,
						freedom from computer virus and warranties arising from course of dealing
						or course of performance. Svatantra does not represent or warrant that the
						functions contained in the site will be uninterrupted or error free, that
						defects will be corrected or that the site or the server that makes the
						site available are free of viruses or other harmful components. Svatantra
						does not make any warranties or representations regarding the use of the
						materials in the site in terms of their completeness, correctness,
						accuracy, adequacy, usefulness, timeliness, reliability or otherwise.
					</p>
					<p className="f_w_r text_center pb_20">
						Svatantra is not responsible for any special, indirect, incidental or
						consequential damages that may arise from the use of or the inability to
						use, the site and / or the materials contained on the site irrespective of
						whether the materials contained on the site are provided by Svatantra.
					</p>
					<p className="f_w_r text_center pb_20">
						The contents of this site are subject to change without notice and
						Svatantra reserves the right to terminate access to this web site at any
						time and without notice. Entire contents of the site including all
						trademarks, logos, service marks and trade names are proprietary to
						Svatantra. Commercial or any other use of any of the contents of this
						site, including but not limiting to the reproduction, modification,
						distribution, transmission, republication, display or performance, of the
						same, is strictly prohibited. No reproduction of any part of the site may
						be sold or distributed for commercial gain nor shall it be modified or
						incorporated in any other work, publication or site, whether in hardcopy
						or electronic format, including postings to any other site.
					</p>
					<p className="f_w_r text_center pb_20">
						This site may contain some hyperlinks which lead out of this site.
						Information contained in any site linked from this site has not been
						reviewed for accuracy or legal sufficiency. Svatantra is not responsible
						for the content of any such external hyperlinks and references to any
						external links should not be construed as an endorsement of the links or
						their content.
					</p>
					<p className="f_w_r text_center pb_20">
						No information on this site shall constitute an invitation to invest in
						neither Svatantra nor its respective officers, employees or agents shall
						be liable for any loss, damage of expense arising out of any access to or
						use of this site or any site linked to it, including, without limitation,
						any loss of profit, indirect, incidental or consequential loss
					</p>
					<p className="f_w_r text_center pb_20">
						If Svatantra becomes aware of inappropriate use of the web site or any of
						its contents, Svatantra will respond in any way that, in its sole
						discretion, Svatantra deems appropriate. Svatantra may report to law
						enforcement authorities any actions that may be considered illegal, as
						well as any information it receives of such illegal conduct.
					</p>
					<p className="f_w_r text_center pb_60">
						By viewing this site you are deemed to agree to jurisdiction of the courts
						at Mumbai, India, in respect of any action arising therefrom or related
						thereto.
					</p>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer2 />
		</div>
	);
}
