// MODULES //
import { useRef, useState } from "react";
import { useRouter } from "next/router";

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
export default function ContactPageForm({ formText }) {
	const router = useRouter();
	const [isSubmited, setIsSubmited] = useState(false);
	const formRef = useRef();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	/** Function to handle submit */
	const onSubmit = async (data, e) => {
		const Headers = {
			method: "POST",
			body: JSON.stringify({
				data: data,
			}),
		};

		/** */
		async function sendData() {
			const res = await fetch("/api/contactleads", Headers);
			if (!res.ok) {
				return;
			}
			const result = await res.json();
			console.log(result, " res");
			reset();
			setIsSubmited(true);
			router.push("/thank-you");
			setTimeout(() => {
				setIsSubmited(false);
			}, 2000);
		}

		sendData();
	};

	return (
		<div className={`${styles.form_section}`}>
			{formText ? (
				formText
			) : (
				<h2 className="text_md f_w_s_b pb_20 font_primary">Send an enquiry</h2>
			)}
			{/* <h2 className="text_md f_w_s_b pb_20 font_primary">
				{formText ? formText : "Send an enquiry"}
			</h2> */}
			<form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
				<div className={`${styles.form_field}`}>
					<input
						type="text"
						placeholder="First Name *"
						id="firstName"
						name="firstName"
						className={`${styles.inputField}`}
						{...register("firstName", { required: true })}
					/>
					{errors.firstName && errors.firstName.type == "required" && (
						<label className="error">This field is required</label>
					)}
				</div>
				{/* <div className={`${styles.form_field}`}>
					<input
						type="text"
						placeholder="Surname"
						id="surname"
						name="surname"
						className={`${styles.inputField}`}
						{...register("surname", { required: true })}
					/>
					{errors.surname && errors.surname.type == "required" && (
						<label className="error">This field is required</label>
					)}
				</div> */}
				<div className={`${styles.form_field}`}>
					<input
						type="email"
						id="email"
						name="email"
						{...register("email", {
							required: true,
							pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
						})}
						placeholder="Email Address *"
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
						placeholder="Phone No *"
						className={`${styles.inputField}`}
						type="number"
						id="tel"
						name="tel"
						maxLength="10"
						{...register("tel", {
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
					{errors.tel && <label className="error">{errors.tel.message}</label>}
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
						We appreciate you contacting us. We&lsquo;ll respond shortly.
					</p>
				)}
			</form>
		</div>
	);
}
