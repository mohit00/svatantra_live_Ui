// MODULES //
import { useRef, useState, useEffect } from "react";
// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Button from "../../src/components/Buttons/Button";
import { useForm } from "react-hook-form";
import Breadcrum from "@/components/Breadcrumb";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/CareerContactForm.module.scss";

// IMAGES //
import upload from "../../public/img/upload.svg";
// DATA //

/** Career Contact Form Page */
export default function CareerContactFormPage() {
	const [fileName, setFileName] = useState("");
	const formRef = useRef();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const [loading, setLoading] = useState(false);
	const [isSubmited, setIsSubmited] = useState(false);

	/** */
	const handleFileChange = (event) => {
		if (event.target.files.length > 0) {
			setFileName(event.target.files[0].name);
		}
	};

	/** */
	const triggerFileInput = () => {
		document.getElementById("fileInput").click();
	};

	/** */
	const onSubmit = async (data, e) => {
		const formdata = {
			name: data.name,
			email: data.email,
			number: data.number,
			message: data.message,
		};
		setLoading(true);

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

	/** */
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

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Career Contact Form"}
				Desc={""}
				OgImg={""}
				Url={"/career-contact-form"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.CareerContactFormPage}>
				<div className="container">
					<Breadcrum link2="Careers" link3="job-opening" />
					<h1 className="text_lg ptb_60">Application Form</h1>

					<form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.form}>
							<div className={styles.inputBox}>
								<input
									type="text"
									className={styles.field}
									id="name"
									placeholder="Candidate Name *"
									name="name"
									{...register("name", { required: true })}
								/>
								{errors.name && errors.name.type == "required" && (
									<label className={styles.error}>This field is required</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<input
									className={styles.field}
									placeholder="Email address *"
									name="email"
									type="email"
									{...register("email", {
										required: true,
										pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
									})}
								/>
								{errors.name && errors.name.type == "required" && (
									<label className={styles.error}>This field is required</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<input
									className={styles.field}
									placeholder="Contact Number *"
									type="number"
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
									<label className={styles.error}>{errors.number.message}</label>
								)}
							</div>

							<input className={styles.field} placeholder="Date of birth *" />

							<div className={styles.inputBox}>
								<div>
									<select
										{...register("qualification", {
											required: "This field is required",
										})}
									>
										<option value="">Qualification *</option>
										<option value="">Qualification *</option>
										<option value="">Qualification *</option>
									</select>
									{errors.qualification && (
										<label className={styles.error}>{errors.qualification.message}</label>
									)}
								</div>
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("experience", {
										required: "This field is required",
									})}
								>
									<option value="">Experience *</option>
									<option value="0-1">Experience *</option>
									<option value="2-3">Experience *</option>
									<option value="4-5">Experience *</option>
									<option value="5+">Experience *</option>
								</select>
								{errors.experience && (
									<label className={styles.error}>{errors.experience.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("state", {
										required: "This field is required",
									})}
								>
									<option value="">State *</option> {/* Placeholder option */}
									<option value="new-york">New York</option>
									<option value="california">California</option>
									<option value="texas">Texas</option>
									<option value="florida">Florida</option>
									<option value="illinois">Illinois</option>
								</select>
								{errors.state && (
									<label className={styles.error}>{errors.state.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("preferredState", {
										required: "This field is required",
									})}
								>
									<option value="">Preferred State *</option> {/* Placeholder option */}
									<option value="new-york">New York</option>
									<option value="california">California</option>
									<option value="texas">Texas</option>
									<option value="florida">Florida</option>
									<option value="illinois">Illinois</option>
								</select>
								{errors.preferredState && (
									<label className={styles.error}>{errors.preferredState.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("industryType", {
										required: "This field is required",
									})}
								>
									<option value="">Type of Industry *</option> {/* Placeholder option */}
									<option value="it">Information Technology</option>
									<option value="finance">Finance</option>
									<option value="healthcare">Healthcare</option>
									<option value="education">Education</option>
									<option value="manufacturing">Manufacturing</option>
									<option value="retail">Retail</option>
								</select>
								{errors.industryType && (
									<label className={styles.error}>{errors.industryType.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("previousMFIExperience", {
										required: "This field is required",
									})}
								>
									<option value="">Previous MFI Experience *</option>{" "}
									{/* Placeholder option */}
									<option value="yes">Yes</option>
									<option value="no">No</option>
									<option value="not-sure">Not Sure</option>
								</select>
								{errors.previousMFIExperience && (
									<label className={styles.error}>
										{errors.previousMFIExperience.message}
									</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("currentJobStatus", {
										required: "This field is required",
									})}
								>
									<option value="">Current job status *</option>{" "}
									{/* Placeholder option */}
									<option value="employed">Employed</option>
									<option value="unemployed">Unemployed</option>
									<option value="self-employed">Self-Employed</option>
									<option value="student">Student</option>
									<option value="other">Other</option>
								</select>
								{errors.currentJobStatus && (
									<label className={styles.error}>
										{errors.currentJobStatus.message}
									</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("sourceOfCV", {
										required: "This field is required",
									})}
								>
									<option value="">Source of CV *</option> {/* Placeholder option */}
									<option value="linkedin">LinkedIn</option>
									<option value="job-portal">Job Portal</option>
									<option value="employee-referral">Employee Referral</option>
									<option value="company-website">Company Website</option>
									<option value="recruiter">Recruiter</option>
									<option value="other">Other</option>
								</select>
								{errors.sourceOfCV && (
									<label className={styles.error}>{errors.sourceOfCV.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("designation", {
										required: "This field is required",
									})}
								>
									<option value="">Designation *</option> {/* Placeholder option */}
									<option value="manager">Manager</option>
									<option value="team-lead">Team Lead</option>
									<option value="executive">Executive</option>
									<option value="analyst">Analyst</option>
									<option value="intern">Intern</option>
									<option value="other">Other</option>
								</select>
								{errors.designation && (
									<label className={styles.error}>{errors.designation.message}</label>
								)}
							</div>

							{/* <div className={styles.inputFileData}>
								<input
									type="file"
									id="fileInput"
									name="myfile"
									className={styles.file}
								/>
								<img src={upload.src} id="fileInput" onChange={handleFileChange} />
							</div> */}

							<div className={styles.data}>
								<p>CV *</p>
								<input
									type="file"
									id="fileInput"
									className={styles.hiddenFileInput}
									onChange={handleFileChange}
								/>
								<img
									src={upload.src}
									id="fileInput"
									onClick={triggerFileInput}
									className={styles.upload}
								/>
							</div>
						</div>

						<div className={styles.consentCheckbox}>
							<div className={styles.mainDiv}>
								<div className={styles.checkboxContainer}>
									<input
										type="checkbox"
										id="customCheckbox"
										className={styles.hiddenCheckbox}
									/>
									<label
										htmlFor="customCheckbox"
										className={styles.customCheckbox}
									></label>
								</div>
								<div className={styles.aggreement}>
									<h2 className="text_xs color_light_black m_b_5">Candidate consent</h2>
									<p className="text_xs">
										I hereby give my consent and authorization to Svatantra Microfin
										Private Limited (“Company”) to process my personal data/sensitive
										personal data provided in the job application to be processed for the
										purpose of the recruitment process and also further agree that the
										Company may collect, store, process and use the personal data I have
										provided for the said purpose.
									</p>
								</div>
							</div>
						</div>

						{/* <button type="submit">Submit</button> */}

						<div className="ptb_60">
							{/* <button className={styles.submit} type="submit">
								submit
							</button> */}
							<Button
								buttonType="secondary"
								condition={"white"}
								title={"Submit"}
								type="submit"
							/>
						</div>
					</form>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
