// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Header from "@/components/Header";
import Breadcrum from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";

// SECTIONS //
import GovernanceAccordion from "@/sections/amalgamated-company/GovernanceAccordion";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

export default function Governance() {
    return (
        <div>
            <MetaTags
                Title={"Governance | Amalgamated Company"}
                Url={"/amalgamated-company/governance"}
            />

            <Header />

            <main className={styles.investors_page}>
                <Breadcrum
                    link5="/amalgamated-company"
                    linkTitle="Amalgamated Company"
                    linknest1="/amalgamated-company/governance"
                    linknestTitle1="Governance"
                />

                <section className={`${styles.investors_main} pb_80`}>
                    <div className="container">
                        <h1 className="text_xxxl color_primary">Governance</h1>

                        <div className={`${styles.accordian_main} pt_40`}>
                            <GovernanceAccordion />
                        </div>
                    </div>
                </section>
            </main>

            <Footer2 />
        </div>
    );
}
