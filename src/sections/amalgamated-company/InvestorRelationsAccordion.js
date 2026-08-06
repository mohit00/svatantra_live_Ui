// COMPONENTS //
import AccordianCommon from "@/components/AccordianCommon";
import RatingGradingTable from "@/components/RatingGradingTable";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// IMAGES //
import download_icon from "@/../public/img/download_icon.svg";

// DATA //
import AnnualReports from "@/data/annual-reports.json";
import Financials from "@/data/financials.json";
import AnnualReturn from "@/data/annual-return.json";
import Notices from "@/data/notices.json";
import MldValuation from "@/data/mld-valuation.json";
import stockExchangeIntimations from "@/data/stock-exchange-intimations.json";
import liquidityRisk from "@/data/liquidity-risk.json";
import disclosures from "@/data/disclosures-under-regulation-62.json";
import unclaimedInterest from "@/data/unclaimed-interest.json";
import agencyPartners from "@/data/agency-partners.json";

/**
 * Investor Relations accordion.
 * Shared by /amalgamated-company/investor-relations and the investors route.
 */
export default function InvestorRelationsAccordion() {
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
        {
            title: "Stock Exchange Intimations",
            subCategories: stockExchangeIntimations,
        },
        {
            title: "Liquidity Risk & Other Disclosures",
            subCategories: liquidityRisk,
        },
        {
            title: "Disclosures under Reg 62 of the SEBI – LODR",
            files: disclosures,
        },
        {
            title: "Online Resolution of Disputes in the Indian Securities Market",
            type: "odr",
        },
        {
            title: "Unclaimed Interest",
            files: unclaimedInterest,
        },
        {
            title: "Agency Partners",
            files: agencyPartners,
        },
    ];

    return (
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

                ) : category.type === "odr" ? (

                    <div className={styles.table_wrap}>
                        <p>
                            To strengthen the investor grievance redressal mechanism in the securities market,
                            the Securities and Exchange Board of India has issued the circulars dated
                            July 31, 2023, and August 4, 2023 (
                            <a
                                href="/amalgamated-company/investor-relations/online-resolution-of-disputes-in-the-indian-securities-market/1691751968746.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                link
                            </a>
                            ), providing guidelines for “Online Resolution of Disputes in the Indian Securities Market”.
                        </p>

                        <p style={{ marginTop: "10px" }}>
                            The link to SMART ODR Portal (Securities Market Approach for Resolution through ODR Portal):{" "}
                            <a href="https://smartodr.in/login" target="_blank" rel="noreferrer">
                                https://smartodr.in/login
                            </a>
                        </p>
                    </div>

                ) : category.custom ? (

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
    );
}
