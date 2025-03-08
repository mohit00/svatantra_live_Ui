// MODULES //
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

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
import { headers } from "next.config";
// DATA //

/** Career Contact Form Page */
export default function CareerContactFormPage() {
	const router = useRouter();
	// const { slug } = router.query;

	const [fileName, setFileName] = useState("");
	const [isSubmited, setIsSubmited] = useState(false);
	const formRef = useRef();
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const [loading, setLoading] = useState(false);
	const fileInputRef = useRef(null);

	const [designation, setDesignation] = useState("");

	useEffect(() => {
		const savedDesignation = localStorage.getItem("designation"); // Get stored designation
		if (savedDesignation) {
			setDesignation(savedDesignation);
		}
	}, []);

	/** handleFileInputClick */
	const handleFileInputClick = () => {
		fileInputRef.current.click();
	};

	/** */
	// const handleFileChange = (event) => {
	// 	if (event.target.files.length > 0) {
	// 		setFileName(event.target.files[0].name);
	// 	}
	// };

	/** */
	// const triggerFileInput = () => {
	// 	document.getElementById("fileInput").click();
	// };

	/** sendMedia */
	/** sendMedia - Uploads CV and returns the file ID */
	/** Uploads CV and returns the file ID */
	async function sendMedia(file) {
		const formData = new FormData();
		formData.append("files", file);

		const requestOptions = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
			},
			body: formData,
		};

		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/upload`,
				requestOptions
			);
			if (!res.ok) throw new Error("File upload failed");

			const result = await res.json();
			return result[0].id; // ✅ Return file ID for form submission
		} catch (error) {
			console.error("File Upload Error:", error);
			return null;
		}
	}

	/** Handles form submission */
	const onSubmit = async (data) => {
		if (!data.cv || data.cv.length === 0) {
			alert("Please upload your CV.");
			return;
		}

		setLoading(true);

		// ✅ Upload file and get file ID
		const fileId = await sendMedia(data.cv[0]);

		if (!fileId) {
			alert("File upload failed. Please try again.");
			setLoading(false);
			return;
		}

		// ✅ Send form data with uploaded file ID
		const requestBody = {
			data: {
				...data,

				cv: fileId, // Attach uploaded file ID
			},
		};

		const Headers = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
			},
			body: JSON.stringify(requestBody),
		};

		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/jobs-leads`,
				Headers
			);
			if (!res.ok) throw new Error("Form submission failed");

			const result = await res.json();
			console.log("Success:", result);

			reset();
			setIsSubmited(true);
			router.push("/thank-you");
			setTimeout(() => setIsSubmited(false), 2000);
			setDesignation("");
		} catch (error) {
			console.error("Form Submission Error:", error);
			alert("Submission failed. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	/** Handles file input change */
	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setFileName(file.name);
			setValue("cv", [file], { shouldValidate: true });
		} else {
			setFileName("");
		}
	};

	/** Triggers file input */
	const triggerFileInput = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};
	/** */
	// async function SendEmailViaSend({ body }) {
	// 	try {
	// 		const res = await fetch("/api/sendEmail", {
	// 			method: "POST",
	// 			body: JSON.stringify({ ...body }),
	// 		});
	// 		const data = await res.json();
	// 		return data;
	// 	} catch (error) {
	// 		console.error("SendEmailViaSend failed", error);
	// 		return null; // Return null or any value to indicate failure
	// 	}
	// }

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

							<div className={styles.inputBox}>
								<input
									className={styles.field}
									placeholder="Date of birth *"
									name="dob"
									{...register("dob", { required: true })}
								/>
								{errors.dob && (
									<label className={styles.error}>{errors.dob.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<div>
									<select
										{...register("qualification", {
											required: "This field is required",
										})}
										name="qualification"
									>
										<option value="">Select Qualification</option>
										<option value="HSC">HSC</option>
										<option value="Graduation">Graduation</option>
										<option value="Post Graduation">Post Graduation</option>
										<option value="Diploma (3 years full time)">
											Diploma (3 years full time)
										</option>
										<option value="MSW/BSW">MSW/BSW</option>
										<option value="Professional Qualifications">
											Professional Qualifications
										</option>
										<option value="PAdditional Certifications">
											PAdditional Certifications
										</option>
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
									<option value="">Select Experience</option>
									<option value="Fresher">Fresher</option>
									<option value="0-1 year">0-1 year</option>
									<option value="1-2 years">1-2 years</option>
									<option value="2-3 years">2-3 years</option>
									<option value="3-4 years">3-4 years</option>
									<option value="4-5 years">4-5 years</option>
									<option value="5-6 years">5-6 years</option>
									<option value="6-7 years">6-7 years</option>
									<option value="7-8 years">7-8 years</option>
									<option value="8-9 years">8-9 years</option>
									<option value="9-10 years">9-10 years</option>
									<option value="Above 10 years">Above 10 years</option>
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
									<option value="">Select State *</option>
									<option value="Andhra Pradesh">Andhra Pradesh</option>
									<option value="Arunachal Pradesh">Arunachal Pradesh</option>
									<option value="Assam">Assam</option>
									<option value="Bihar">Bihar</option>
									<option value="Chhattisgarh">Chhattisgarh</option>
									<option value="Goa">Goa</option>
									<option value="Gujarat">Gujarat</option>
									<option value="Haryana">Haryana</option>
									<option value="Himachal Pradesh">Himachal Pradesh</option>
									<option value="Jharkhand">Jharkhand</option>
									<option value="Karnataka">Karnataka</option>
									<option value="Kerala">Kerala</option>
									<option value="Madhya Pradesh">Madhya Pradesh</option>
									<option value="Maharashtra">Maharashtra</option>
									<option value="Manipur">Manipur</option>
									<option value="Meghalaya">Meghalaya</option>
									<option value="Mizoram">Mizoram</option>
									<option value="Nagaland">Nagaland</option>
									<option value="Odisha">Odisha</option>
									<option value="Punjab">Punjab</option>
									<option value="Rajasthan">Rajasthan</option>
									<option value="Sikkim">Sikkim</option>
									<option value="Tamil Nadu">Tamil Nadu</option>
									<option value="Telangana">Telangana</option>
									<option value="Tripura">Tripura</option>
									<option value="Uttar Pradesh">Uttar Pradesh</option>
									<option value="Uttarakhand">Uttarakhand</option>
									<option value="West Bengal">West Bengal</option>
									<option value="Andaman and Nicobar Islands">
										Andaman and Nicobar Islands
									</option>
									<option value="Chandigarh">Chandigarh</option>
									<option value="Dadra and Nagar Haveli and Daman and Diu">
										Dadra and Nagar Haveli and Daman and Diu
									</option>
									<option value="Delhi">Delhi</option>
									<option value="Lakshadweep">Lakshadweep</option>
									<option value="Puducherry">Puducherry</option>
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
									<option value="">Select State *</option>
									<option value="Andhra Pradesh">Andhra Pradesh</option>
									<option value="Arunachal Pradesh">Arunachal Pradesh</option>
									<option value="Assam">Assam</option>
									<option value="Bihar">Bihar</option>
									<option value="Chhattisgarh">Chhattisgarh</option>
									<option value="Goa">Goa</option>
									<option value="Gujarat">Gujarat</option>
									<option value="Haryana">Haryana</option>
									<option value="Himachal Pradesh">Himachal Pradesh</option>
									<option value="Jharkhand">Jharkhand</option>
									<option value="Karnataka">Karnataka</option>
									<option value="Kerala">Kerala</option>
									<option value="Madhya Pradesh">Madhya Pradesh</option>
									<option value="Maharashtra">Maharashtra</option>
									<option value="Manipur">Manipur</option>
									<option value="Meghalaya">Meghalaya</option>
									<option value="Mizoram">Mizoram</option>
									<option value="Nagaland">Nagaland</option>
									<option value="Odisha">Odisha</option>
									<option value="Punjab">Punjab</option>
									<option value="Rajasthan">Rajasthan</option>
									<option value="Sikkim">Sikkim</option>
									<option value="Tamil Nadu">Tamil Nadu</option>
									<option value="Telangana">Telangana</option>
									<option value="Tripura">Tripura</option>
									<option value="Uttar Pradesh">Uttar Pradesh</option>
									<option value="Uttarakhand">Uttarakhand</option>
									<option value="West Bengal">West Bengal</option>
									<option value="Andaman and Nicobar Islands">
										Andaman and Nicobar Islands
									</option>
									<option value="Chandigarh">Chandigarh</option>
									<option value="Dadra and Nagar Haveli and Daman and Diu">
										Dadra and Nagar Haveli and Daman and Diu
									</option>
									<option value="Delhi">Delhi</option>
									<option value="Lakshadweep">Lakshadweep</option>
									<option value="Puducherry">Puducherry</option>
								</select>
								{errors.preferredState && (
									<label className={styles.error}>{errors.preferredState.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("industry", {
										required: "This field is required",
									})}
								>
									<option value="">Select Type of Industry *</option>
									<option value="Fresher">Fresher</option>
									<option value="MFI">MFI (Microfinance Institution)</option>
									<option value="Non MFI">Non MFI</option>
									<option value="NBFC">NBFC (Non-Banking Financial Company)</option>
									<option value="BFSI">
										BFSI (Banking, Financial Services, and Insurance)
									</option>
									<option value="Others">Others</option>
								</select>
								{errors.industry && (
									<label className={styles.error}>{errors.industry.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("previousMFI", {
										required: "This field is required",
									})}
								>
									<option value="">Previous MFI Experience *</option>

									<option value="yes">Yes</option>
									<option value="no">No</option>
									<option value="not-sure">Not Sure</option>
								</select>
								{errors.previousMFI && (
									<label className={styles.error}>{errors.previousMFI.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<select
									className={styles.field}
									{...register("currentJobStatus", {
										required: "This field is required",
									})}
								>
									<option value="">Select Current Job Status *</option>
									<option value="Fresher">Fresher</option>
									<option value="Currently Working">Currently Working</option>
									<option value="Serving Notice Period">Serving Notice Period</option>
									<option value="Currently Not Working">Currently Not Working</option>
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
									{...register("sourceOfCv", {
										required: "This field is required",
									})}
								>
									<option value="">Select Source of CV *</option>
									<option value="Advertisement / Social Media">
										Advertisement / Social Media
									</option>
									<option value="Campus">Campus</option>
									<option value="Careers">Careers</option>
									<option value="Direct">Direct</option>
									<option value="Employee Referral">Employee Referral</option>
									<option value="Job Portal">Job Portal</option>
									<option value="Recruitment Drives / Job Fair">
										Recruitment Drives / Job Fair
									</option>
								</select>
								{errors.sourceOfCv && (
									<label className={styles.error}>{errors.sourceOfCv.message}</label>
								)}
							</div>

							<div className={styles.inputBox}>
								<input
									type="text"
									className={styles.field}
									id="designation"
									placeholder="Designation*"
									name="designation"
									value={designation}
									{...register("designation", { required: true })}
								/>
								{errors.designation && errors.designation.type == "required" && (
									<label className={styles.error}>This field is required</label>
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
								{/* <p>CV *</p> */}
								<input
									className={`${styles.fileInput}`}
									type="file"
									name="cv"
									id="cv"
									// placeholder="Upload resume *"
									accept=".pdf,.doc,.docx"
									{...register("cv", {
										required: "Please upload your resume",
										validate: {
											acceptedFormats: (files) =>
												(files &&
													files[0] &&
													[
														"application/pdf",
														"application/msword",
														"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
													].includes(files[0].type)) ||
												"Only .pdf, .doc, and .docx files are accepted",
											maxSize: (files) =>
												(files && files[0] && files[0].size <= 10485760) ||
												"File size should be less than 10MB",
										},
									})}
									ref={fileInputRef}
									onChange={handleFileChange}
								/>
								{/* <img
									src={upload.src}
									id="fileInput"
									onClick={triggerFileInput}
									className={styles.upload}
								/> */}
								<div className={styles.customFileInput} onClick={handleFileInputClick}>
									{fileName ? (
										<span>
											{!isSubmited ? fileName : "Upload resume*"}
											<span className={styles.fileName}></span>
										</span>
									) : (
										"Upload resume*"
									)}
								</div>
							</div>
						</div>

						<div className={styles.consentCheckbox}>
							<div className={styles.mainDiv}>
								<div className={styles.checkboxContainer}>
									<input
										type="checkbox"
										id="customCheckbox"
										name="customCheckbox"
										className={styles.hiddenCheckbox}
										// {...register("customCheckbox", {
										// 	required: "You must agree before submitting", // Error message
										// })}
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
							{errors.customCheckbox && (
								<label className={styles.error}>{errors.customCheckbox.message}</label>
							)}
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
					<div>
						{isSubmited && (
							<p className="text_xs color_light_black m_b_5 pb_50">
								Thank your for submitting the form
							</p>
						)}
					</div>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
