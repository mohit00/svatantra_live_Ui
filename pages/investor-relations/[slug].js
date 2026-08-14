import InvestorsSlugPage from "../investors/[slug]/index";
import { getInvestorsSlug } from "@/services/Investors";

/** Fetch the category using the existing Investors Strapi service. */
export async function getServerSideProps({ params }) {
	const data = await getInvestorsSlug(params.slug);

	return {
		props: {
			data: data.data,
		},
	};
}

/** Render the Investors page UI while retaining the Investor Relations URL. */
export default function InvestorRelationsSlugPage({ data }) {
	return (
		<InvestorsSlugPage
			data={data}
			breadcrumbContext="investor-relations"
		/>
	);
}
