// MODULES //

// COMPONENTS //
import ContactPageForm from "@/sections/ContactPageForm";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/pages/Contact/ContactSection.module.scss";

// IMAGES //

// DATA //

/** DummyComponent Component */
export default function ContactSection() {
	return (
		<div className="pt_80 pb_60">
			<div className="container">
				<div className={`${styles.contact_section} f_j f_w`}>
					<div className={`${styles.contact_form}`}>
						<ContactPageForm />
					</div>
					<div className={`${styles.contact_info}`}>
						<h4 className="text_reg f_w_s_b pb_10 font_primary">Email</h4>

						<h5 className="text_xs f_w_b">Complaint / Query: </h5>
						<p className="text_xs pb_10">
							<a href="mailto:customercare@svatantra.adityabirla.com">
								customercare@svatantra.adityabirla.com
							</a>
						</p>

						<h5 className="text_xs f_w_b">Careers:</h5>
						<p className="text_xs pb_10">
							<a href="mailto:careers@svatantra.adityabirla.com">
								careers@svatantra.adityabirla.com
							</a>
						</p>

						<h5 className="text_xs f_w_b">Media: </h5>
						<p className="text_xs pb_10">
							<a href="mailto:media@svatantra.adityabirla.com">
								media@svatantra.adityabirla.com
							</a>
						</p>

						<h5 className="text_xs f_w_b">Campus: </h5>
						<p className="text_xs pb_10">
							<a href="mailto:customercare@svatantra.adityabirla.com">
								campus.connect@svatantra.adityabirla.com
							</a>
						</p>

						<h5 className="text_xs f_w_b">General Information: </h5>
						<p className="text_xs pb_10">
							<a href="mailto:customercare@svatantra.adityabirla.com">
								info@svatantra.adityabirla.com
							</a>
						</p>

						<div className={`${styles.number} pt_40`}>
							<h5 className="text_reg f_w_s_b pb_10 font_primary">Phone </h5>
							<p className="text_xs">
								<a href="tel: + 91 22 6141 5900">Tel. No: + 91 22 6141 5900</a>
							</p>
							<p className="text_xs">
								<a href="tel: 18002679911">Toll Free No: 18002679911</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
