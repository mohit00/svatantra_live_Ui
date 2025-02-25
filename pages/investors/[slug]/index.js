// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Breadcrum from "@/components/Breadcrumb";
import Button from "@/components/Buttons/Button";
// SECTIONS //

// PLUGINS //

// SERVICES //
import { getInvestorsSlug } from "@/services/Investors";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// IMAGES //

// DATA //
/** Data Fetching */
export async function getServerSideProps({ params }) {
	const data = await getInvestorsSlug(params.slug);

	return {
		props: {
			data: data.data,
		},
	};
}

/** Inside1 Page */
export default function SlugPage({ data }) {
	console.log(data[0], "Slug");
	/** createSlug */
	const createSlug = (text) =>
		text
			.trim()
			.replace(/\s+/g, "-")
			.replace(/[^a-zA-Z0-9-]/g, "")
			.replace(/-+$/, "");

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Inside1"} Desc={""} OgImg={""} Url={"/inside1"} />

			{/* Header */}
			<Header />
			<Breadcrum link2="For Investors" link3="Financial TrainingAnnual Return" />
			{/* Page Content starts here */}
			<main className={styles.investors_page}>
				<div className="container">
					<h1 className="text_xxxl color_primary pb_40">{data[0]?.title}</h1>

					<div className={`${styles.main_title_btn}  pb_80`}>
						{data[0]?.slugRow?.map((item, ind) => {
							return (
								<div className={`${styles.title_btn} f_w_j`} key={ind}>
									<div className={`${styles.title}`}>
										<h2 className="text_lg f_w_m font_primary color_light_black">
											{item.title}
										</h2>
									</div>
									<a
										href={`/investors/${createSlug(data[0]?.slug)}/${createSlug(
											item.slug
										)}`}
									>
										<Button buttonType="four" condition={"white"} title={"Read More"} />
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
