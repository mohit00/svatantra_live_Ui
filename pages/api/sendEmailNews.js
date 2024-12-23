/* eslint-disable import/no-anonymous-default-export */
import { EmailTemplateNews } from "@/components/email/EmailTemplateNews.jsx";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
	try {
		const { email } = JSON.parse(req.body);
		// const name = "developer name";
		// const email = "developer email";

		const data = await resend.emails.send({
			from: "Base Template <onboarding@resend.dev>",
			to: "sangita.das@svatantra.adityabirla.com",
			// to: "developer@ting.in",
			subject: "New submission to your form",
			// html: "<h1>hello</h1>",
			react: EmailTemplateNews({
				email,
			}),
		});

		res.status(200).json(data);
	} catch (error) {
		res.status(400).json(error);
	}
};
