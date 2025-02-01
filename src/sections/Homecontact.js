// MODULES //
import { useRef, useState, useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import ScrollOut from "scroll-out";
import { useForm } from "react-hook-form";

// UTILS //

// STYLES //
import Button from "@/components/Buttons/Button";
import styles from "@/styles/sections/Homecontact.module.scss";

// IMAGES //

// DATA //

/** Homecontact Section */
export default function Homecontact() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	const formRef = useRef();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const [loading, setLoading] = useState(false);
	const [isSubmited, setIsSubmited] = useState(false);

	/** resend */
	async function SendEmailViaSend({ body }) {
		try {
			const res = await fetch("/api/sendEmail", {
				method: "POST",
				body: JSON.stringify({ ...body }),
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.error("SendEmailViaSend failed", error);
			return null; // Return null or any value to indicate failure
		}
	}

	/** Function to handle submit */
	const onSubmit = async (data, e) => {
		const formdata = {
			name: data.name,
			email: data.email,
			number: data.number,
			message: data.message,
		};
		setLoading(true);

		// await SendEmailViaSend({ body: { ...formdata } });
		// reset();
		// setIsSubmited(true);
		// setTimeout(() => {
		// 	setIsSubmited(false);
		// }, 5000);

		// Use Promise.allSettled to ensure both functions run, even if one fails
		const result = await SendEmailViaSend({ body: { ...formdata } });
		console.log(result);

		reset();
		setIsSubmited(true);
		setTimeout(() => {
			setIsSubmited(false);
		}, 5000);
		setLoading(false);
	};

	return (
		<section className={styles.Homecontact} name="ContactUs">
			<div className="container">
				<div className={`${styles.mainbox}`}>
					<div className={`${styles.left}`} data-scroll>
						<h1 className="text_xxxl pb_20 color_primary">Connect with us</h1>
						<p className="text_sm pb_20 opacity_80">
							Have questions or need support? We&lsquo;re here to guide and assist you
							in building a brighter future. Reach out to us and take the first step
							toward financial resilience and self-reliance.
						</p>
						<h3 className="text_md">
							Toll free number: <br />
							18002679911
						</h3>
					</div>
					{/* <div className={`${styles.right}`} data-scroll>
						<form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
							<div className={`${styles.form_field}`}>
								<input
									type="text"
									placeholder="Name"
									id="name"
									name="name"
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
									placeholder="Email Address"
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
									placeholder="Phone No"
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
								{errors.number && (
									<label className="error">{errors.number.message}</label>
								)}
							</div>
							<div className={`${styles.form_field}`}>
								<textarea
									className={styles.textarea}
									id="message"
									name="message"
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
					</div> */}
				</div>
			</div>
		</section>
	);
}
