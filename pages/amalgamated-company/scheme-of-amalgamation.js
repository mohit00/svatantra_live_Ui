// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Header from "@/components/Header";
import Breadcrum from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";

// SECTIONS //
import SchemeOfAmalgamationAccordion from "@/sections/amalgamated-company/SchemeOfAmalgamationAccordion";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";


export default function schemeOfAmalgamation() {
    return (
        <div>
            <MetaTags
                Title={"Scheme Of Amalgamation | Amalgamated Company"}
                Url={"/amalgamated-company/schemeofamalgamation"}
            />

            <Header />

            <main className={styles.investors_page}>
                <Breadcrum
                    link5="/amalgamated-company"
                    linkTitle="Amalgamated Company"
                    linknest1="/amalgamated-company/schemeofamalgamation"
                    linknestTitle1="Scheme of Amalgamation"
                />

                <section className={`${styles.investors_main} pb_80`}>
                    <div className="container">
                        <h1 className="text_xxxl color_primary">Scheme of Amalgamation</h1>

                        <div className={`${styles.accordian_main} pt_40`}>
                            <SchemeOfAmalgamationAccordion />
                        </div>
                    </div>
                </section>
            </main>

            <Footer2 />
        </div>
    );
}
