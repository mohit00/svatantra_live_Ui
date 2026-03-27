// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Header from "@/components/Header";
import Breadcrum from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";
import AccordianCommon from "@/components/AccordianCommon";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// IMAGES //
import download_icon from "../../public/img/download_icon.svg";

// DATA //
import Amalgamation from "@/data/proposed-scheme-of-amalgamation.json";


export default function schemeOfAmalgamation() {
    const accordionData = [
        {
            title: "Scheme of Amalgamation",
            files: Amalgamation,
        }
    ];

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
                            <AccordianCommon
                                fontStyle="text_lg"
                                fontWeight="f_w_m"
                                fontFamily="font_primary"
                                fontColor="color_light_black"
                                items={accordionData.map((category) => ({
                                    title: category.title,
                                    children: (
                                        <>
                                            <p className="text_md" style={{ marginBottom: "20px" }}>{category.text}</p>

                                            <div className={styles.table_wrap}>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Document</th>
                                                            <th>Download</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {category.files.map((file, index) => (
                                                            <tr key={index}>
                                                                <td>{file.name}</td>
                                                                <td>
                                                                    <a href={file.url} target="_blank" rel="noreferrer">
                                                                        <img src={download_icon.src} className={styles.download_icon} />
                                                                        <span>Download</span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </>
                                    ),
                                }))}
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer2 />
        </div>
    );
}
