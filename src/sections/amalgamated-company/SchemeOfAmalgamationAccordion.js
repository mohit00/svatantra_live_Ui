// COMPONENTS //
import AccordianCommon from "@/components/AccordianCommon";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// IMAGES //
import download_icon from "@/../public/img/download_icon.svg";

// DATA //
import Amalgamation from "@/data/proposed-scheme-of-amalgamation.json";

/**
 * Proposed Scheme of Amalgamation accordion.
 * Shared by /amalgamated-company/scheme-of-amalgamation and the investors route,
 * so the markup and the static JSON stay in one place.
 */
export default function SchemeOfAmalgamationAccordion() {
    const accordionData = [
        {
            title: "Scheme of Amalgamation",
            files: Amalgamation,
        }
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
