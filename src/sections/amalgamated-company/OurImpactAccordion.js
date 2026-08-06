// COMPONENTS //
import AccordianCommon from "@/components/AccordianCommon";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// IMAGES //
import download_icon from "@/../public/img/download_icon.svg";

// DATA //
import CSRActivities from "@/data/csr-activities.json";
import ConsumerEducation from "@/data/consumer-education.json";

/**
 * Our Impact accordion.
 * Shared by /amalgamated-company/our-impact and the investors route.
 */
export default function OurImpactAccordion() {
    const accordionData = [
        {
            title: "CSR Activities",
            text: "Chaitanya aims towards the overall development of the underserved in addition to Financial Services and hence actively participates in the community-building activities every year, related to Health care, Disaster Relief, and other volunteer activities. Chaitanya strives to be a valuable contributor to the economic, social and environmental progress of India.",
            files: CSRActivities,
        },
        {
            title: "Consumer Education",
            text: "With a view to increasing awareness among the borrowers, Chaitanya India had placed consumer education literature, explaining with examples, the concepts of date of overdue, SMA and NPA classification and upgradation, with specific reference to day-end process.",
            files: ConsumerEducation,
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
    );
}
