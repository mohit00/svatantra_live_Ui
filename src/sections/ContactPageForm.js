// MODULES //
import { useRef, useState } from "react";

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";

// UTILS //

// STYLES //
// import styles from "@/styles/sections/ContactForm.module.scss";

import styles from "@/styles/sections/formcontact.module.scss";

// IMAGES //

// DATA //

/** ContactForm Section */
export default function ContactPageForm() {
	const [isSubmited, setIsSubmited] = useState(false);
	const formRef = useRef();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	/** Function to handle submit */
	const onSubmit = async (data, e) => {
		// Write form submission codes here
	};

	return (
		<div className={`${styles.form_section}`}>
			<h2 className="text_md f_w_s_b pb_20">Send an enquiry</h2>
			<form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
				<div className={`${styles.form_field}`}>
					<input
						type="text"
						placeholder="Name"
						id="name"
						name="First Name *"
						className={`${styles.inputField}`}
						{...register("name", { required: true })}
					/>
					{errors.name && errors.name.type == "required" && (
						<label className="error">This field is required</label>
					)}
				</div>
				<div className={`${styles.form_field}`}>
					<input
						type="text"
						placeholder="surname"
						id="surname"
						name="Surname *"
						className={`${styles.inputField}`}
						{...register("name", { required: true })}
					/>
					{errors.name && errors.name.type == "required" && (
						<label className="error">This field is required</label>
					)}
				</div>
				<div className={`${styles.form_field}`}>
					<input
						type="email"
						id="email"
						name="email"
						{...register("email", {
							required: true,
							pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
						})}
						placeholder="Email *"
						className={`${styles.inputField}`}
					/>
					{errors.email && errors.email.type == "required" && (
						<label className="error">This field is required</label>
					)}
					{errors.email && errors.email.type == "pattern" && (
						<label className="error">Enter valid email</label>
					)}
				</div>
				<div className={`${styles.form_field}`}>
					<input
						// type="text"
						placeholder="Telephone *"
						className={`${styles.inputField}`}
						type="number"
						id="number"
						name="number"
						maxLength="10"
						{...register("number", {
							required: "This field is required",
							minLength: {
								value: 10,
								message: "Phone number must be exactly 10 digits",
							},
							maxLength: {
								value: 10,
								message: "Phone number must be exactly 10 digits",
							},
							pattern: {
								value: /^[0-9]+$/,
								message: "Phone number must contain only digits",
							},
						})}
					/>
					{errors.number && <label className="error">{errors.number.message}</label>}
				</div>
				<div className={`${styles.form_field}`}>
					<textarea
						className={styles.textarea}
						id="message"
						name="message"
						placeholder="Message *"
						{...register("message", {
							required: true,
						})}
					/>
					{errors.message && errors.message.type == "required" && (
						<label className="error">This field is required</label>
					)}
				</div>
				<div className={`${styles.BtnBx} pt_10`}>
					<Button buttonType="four" condition={"white"} title={"Submit"} />
				</div>

				{isSubmited && (
					<p className="text_xs pt_10">
						We appreciate you contacting us. We&lsquo;ll respond shortly. N
					</p>
				)}
			</form>
		</div>
	);
}
