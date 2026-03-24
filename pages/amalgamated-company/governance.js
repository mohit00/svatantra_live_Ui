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

import FairPracticeCode from "@/data/fair-practice-code.json";
import ListOfHolidays from "@/data/list-of-holidays.json";
import OmbudsmanScheme from "@/data/ombudsman-scheme.json";
import BoardOfDirectors from "@/data/board-of-directors.json";
import OurCommittees from "@/data/our-committees.json";
import Policies from "@/data/policies.json";

export default function Governance() {
    const accordionData = [
        {
            title: "Our Board",
            text: "Chaitanya’s board composition comes from divergent industries with proficiency in their discipline. The board is the source of guidance and driving force for the team.",
            members: BoardOfDirectors.members,
        },
        {
            title: "Our Committees",
            text: OurCommittees.description,
            committees: OurCommittees.committees,
        },
        {
            title: "Policies",
            files: Policies,
        },
        {
            title: "Fair Practice Code",
            files: FairPracticeCode,
        },
        {
            title: "Ombudsman Scheme",
            files: OmbudsmanScheme,
        },
        {
            title: "Resignation of Directors",
            text:
                ""
        },
        {
            title: "List of Holidays",
            files: ListOfHolidays,
        },
    ];

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
                            <AccordianCommon
                                fontStyle="text_lg"
                                fontWeight="f_w_m"
                                fontFamily="font_primary"
                                fontColor="color_light_black"
                                items={accordionData.map((category) => ({
                                    title: category.title,
                                    children: category.title === "Resignation of Directors" ? (
                                        <div className="fusion-text fusion-text-2" style={{ "--awb-font-size": "22px", "--awb-text-transform": "none", "--awb-text-color": "var(--awb-color8)" }}>
                                            <div ><p>Announcing, with utmost gratitude the resignation of the following Board of Directors from Chaitanya India Fin Credit Pvt. Ltd. In contributing their insights, expertise, and unwavering support to our organization, their leadership has played an integral part in our growth journey. We wish them every success in their future endeavors.</p><br />
                                            </div>
                                            <p>The following directors resigned from the Board with effect from August 18, 2020;</p><br />
                                            <ol>
                                                <li>Mr. K Subramanyam Ravi</li>
                                                <li>Mr. Rachamadugu Nandakumar</li>
                                            </ol>
                                            <br />
                                            <p>The following directors resigned from the Board with effect from November 23, 2023;</p><br />
                                            <ol>
                                                <li>Mr. Sachin Bansal</li>
                                                <li>Mr. Ankit Agarwal</li>
                                                <li>Mr. Samit S Shetty</li>
                                                <li>Mr. Ranganathan Sridharan</li>
                                                <li>Ms. Usha A Narayanan</li>
                                            </ol>
                                        </div>
                                    ) : category.committees ? (
                                        <>
                                            <p className="text_md mb_20">{category.text}</p>
                                            {category.committees.map((committee, idx) => (
                                                <div key={idx} className={styles.committee_section}>
                                                    <h4 className="text_lg color_primary mb_30" style={{ marginTop: idx === 0 ? "20px" : "40px" }}>{committee.committee}</h4>
                                                    <div className={styles.table_wrap}>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Role</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {committee.members.map((member, index) => (
                                                                    <tr key={index}>
                                                                        <td>{member.name}</td>
                                                                        <td>{member.role}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    ) : category.members ? (
                                        <>
                                            <p className="text_md" style={{ marginBottom: "20px" }}>{category.text}</p>
                                            <div className={styles.table_wrap}>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Role</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {category.members.map((member, index) => (
                                                            <tr key={index}>
                                                                <td>{member.name}</td>
                                                                <td>{member.role}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </>
                                    ) : category.text ? (
                                        <div className={styles.governance_text}>
                                            {category.text.split("\n\n").map((paragraph, idx) => (
                                                <p key={idx} className="text_md mb_15">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    ) : category.files ? (
                                        <div className={styles.table_wrap}>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Details</th>
                                                        <th>Enclosures</th>
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
                                    ) : null,
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
