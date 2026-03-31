// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer2 from "@/components/Footer2";
import AccordianCommon from "@/components/AccordianCommon";

// STYLES //
import styles from "@/styles/pages/Investor.module.scss";

// DATA //
const accordionData = [
  {
    title: "Customer Grievance",
    text: "",
    files: [
      {
        name: "Lodging of Customer Complaint",
        url: "/customer_grievance/lodging_of_Customer_complaints_disclosures_on_websites_of_the_regulated_entities.pdf",
      },
      {
        name: "CGRM Flowchart document",
        url: "/customer_grievance/CRGM_flowchart_website.pdf",
      },
    ],
  },
];


export default function CustomerGrievance() {
  return (
    <div>
      <MetaTags
        Title={"Customer Grievance | Customer Grievance"}
        Url={"/customer-grievance"}
      />

      <Header />

      <main className={styles.investors_page}>
        <Breadcrumb
          linknest1="/contact"
          linknestTitle1="Contact"
          linknest2="/customer-grievance"
          linknestTitle2="Customer Grievance"
        />

        <section className={`${styles.investors_main} pb_80`}>
          <div className="container">
            <h1 className="text_xxxl color_primary">
              Customer Grievance
            </h1>

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
                      {category.text && (
                        <p
                          className="text_md"
                          style={{ marginBottom: "20px" }}
                        >
                          {category.text}
                        </p>
                      )}

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
                                  <a
                                    href={file.url}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <img
                                      src="/img/download_icon.svg"
                                      className={styles.download_icon}
                                      alt="download"
                                    />
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