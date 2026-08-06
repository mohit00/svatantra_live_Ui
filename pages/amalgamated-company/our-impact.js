// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Header from "@/components/Header";
import Breadcrum from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";

// SECTIONS //
import OurImpactAccordion from "@/sections/amalgamated-company/OurImpactAccordion";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

export default function OurImpact() {
    return (
        <div>
            <MetaTags
                Title={"Our Impact | Amalgamated Company"}
                Url={"/amalgamated-company/our-impact"}
            />

            <Header />

            <main className={styles.investors_page}>
                <Breadcrum
                    link5="/amalgamated-company"
                    linkTitle="Amalgamated Company"
                    linknest1="/amalgamated-company/our-impact"
                    linknestTitle1="Our Impact"
                />

                <section className={`${styles.investors_main} pb_80`}>
                    <div className="container">
                        <h1 className="text_xxxl color_primary">Our Impact</h1>

                        <div className={`${styles.accordian_main} pt_40`}>
                            <OurImpactAccordion />
                        </div>
                    </div>
                </section>
            </main>

            <Footer2 />
        </div>
    );
}
