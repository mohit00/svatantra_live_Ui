// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Header from "@/components/Header";
import Breadcrum from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";

// SECTIONS //
import InvestorRelationsAccordion from "@/sections/amalgamated-company/InvestorRelationsAccordion";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

export default function InvestorRelations() {
    return (
        <div>
            <MetaTags
                Title={"Investor Relations | Amalgamated Company"}
                Url={"/amalgamated-company/investor-relations"}
            />

            <Header />

            <main className={styles.investors_page}>
                <Breadcrum
                    link5="/amalgamated-company"
                    linkTitle="Amalgamated Company"
                    linknest1="/amalgamated-company/investor-relations"
                    linknestTitle1="Investor Relations"
                />

                <section className={`${styles.investors_main} pb_80`}>
                    <div className="container">

                        <h1 className="text_xxxl color_primary">
                            Investor Relations
                        </h1>

                        <div className={`${styles.accordian_main} pt_40`}>
                            <InvestorRelationsAccordion />
                        </div>

                    </div>
                </section>
            </main>

            <Footer2 />
        </div>
    );
}
