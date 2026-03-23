// MODULES //
import { useState } from "react";

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Header from "@/components/Header";
import Breadcrum from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";
import AccordianCommon from "@/components/AccordianCommon";
import AnnualReports from "@/data/annual-reports.json";
import Financials from "@/data/financials.json";
import RatingGradingTable from "@/components/RatingGradingTable";
import AnnualReturn from "@/data/annual-return.json";
import Notices from "@/data/notices.json";
import MldValuation from "@/data/mld-valuation.json";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// IMAGES //
import download_icon from "../../public/img/download_icon.svg";

export default function InvestorRelations() {

    const accordionData = [
        {
            title: "Annual Report",
            files: AnnualReports
        },
        {
            title: "Financials",
            subCategories: Financials,
        },
        {
            title: "Rating & Grading",
            custom: true,
        },
        {
            title: "Annual Return",
            files: AnnualReturn,
        },
        {
            title: "Notices",
            subCategories: Notices,
        },
        {
            title: "MLD Valuation",
            subCategories: MldValuation,
        },
        // {
        //     title: "Stock Exchange Intimations",
        //     subCategories: [
        //         {
        //             title: "2025",
        //             files: [
        //                 {
        //                     name: "Intimation Jan 2025",
        //                     url: "/amalgamated-company/investor-relations/intimations/2025/jan.pdf",
        //                 },
        //             ],
        //         },
        //         {
        //             title: "2024",
        //             files: [],
        //         },
        //         {
        //             title: "2023",
        //             files: [],
        //         },
        //     ],
        // },
        // {
        //     title: "Liquidity Risk & Other Disclosures",
        //     files: [],
        // },
        // {
        //     title: "Disclosures under Reg 62 of the SEBI – LODR",
        //     files: [],
        // },
        // {
        //     title: "Online Resolution of Disputes in the Indian Securities Market",
        //     files: [],
        // },
        // {
        //     title: "Unclaimed Interest",
        //     files: [],
        // },
        // {
        //     title: "Agency Partners",
        //     files: [],
        // },
    ];
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
                            <AccordianCommon
                                fontStyle="text_lg"
                                fontWeight="f_w_m"
                                fontFamily="font_primary"
                                fontColor="color_light_black"
                                items={accordionData.map((category) => ({
                                    title: category.title,

                                    children: category.subCategories ? (

                                        /* ===== Nested Accordion ===== */
                                        <AccordianCommon
                                            fontStyle="text_md"
                                            fontWeight="f_w_m"
                                            fontFamily="font_primary"
                                            fontColor="color_light_black"
                                            items={category.subCategories.map((sub) => ({
                                                title: sub.title,

                                                children: sub.files ? (

                                                    /* ===== NORMAL ===== */
                                                    <div className={styles.table_wrap}>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Details</th>
                                                                    <th>Enclosures</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {sub.files.map((file, index) => (
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

                                                ) : sub.subCategories ? (

                                                    /* ===== MLD FIX (2nd LEVEL) ===== */
                                                    <AccordianCommon
                                                        items={sub.subCategories.map((month) => ({
                                                            title: month.title,
                                                            children: (
                                                                <div className={styles.table_wrap}>
                                                                    <table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Details</th>
                                                                                <th>Enclosures</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {month.files.map((file, index) => (
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
                                                            ),
                                                        }))}
                                                    />

                                                ) : null,
                                            }))}
                                        />

                                    ) : category.custom ? (

                                        /* ✅ KEEP THIS EXACT */
                                        <RatingGradingTable />

                                    ) : (

                                        /* ===== NORMAL CATEGORY ===== */
                                        <div className={styles.table_wrap}>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Details</th>
                                                        <th>Enclosures</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {category.files?.map((file, index) => (
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

                                    )
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