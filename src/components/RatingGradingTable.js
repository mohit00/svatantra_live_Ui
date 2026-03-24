import data from "@/data/rating-grading.json";
import styles from "@/styles/pages/Investor.module.scss";
const RatingTable = () => {
  return (
    <div className="rating-section">
      {/* <h2>Rating & Grading</h2> */}
      <p>
        Chaitanya’s performance has been rated majorly as stable based on the
        following parameters by reputed Rating and Grading agencies.
      </p>

      <div className="table-wrapper">
        <table className={styles.rating_table}>
          <thead>
            <tr>
              <th>Rating Instrument</th>
              <th>Rating Agency</th>
              <th>Rating and Grading</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) =>
              row.items.map((item, i) => (
                <tr key={`${index}-${i}`}>
                  {i === 0 && (
                    <td rowSpan={row.items.length}>
                      {row.category}
                    </td>
                  )}
                  <td>{item.agency}</td>
                  <td>{item.rating}</td>
                  <td>
                    {item.link || row.link ? (
                      <a href={item.link || row.link} target="_blank" rel="noreferrer">
                        View details
                      </a>
                    ) : (
                      <span>Not available</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RatingTable;