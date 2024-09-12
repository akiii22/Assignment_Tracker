import Navbar from "../components/Navbar";
import styles from "./Why.module.css";

function Why() {
  return (
    <>
      <Navbar />
      <div className={styles.why}>
        <div className={styles.whyContainer}>
          <h1>
            Hi There
            <span className={styles.img}>
              <img src="../home.png" />
            </span>
          </h1>
          <p>
            An assignment tracker is an essential tool for students looking to
            stay organized and manage their time effectively. With deadlines and
            multiple tasks piling up, it can be challenging to keep track of
            everything. This assignment tracker simplifies that process by
            allowing students to input their assignments, set due dates, and
            prioritize tasks based on importance. Not only does it help in
            avoiding last-minute cramming, but it also fosters better time
            management, productivity, and reduced stress. By keeping all
            assignments in one place, students can easily visualize their
            workload, plan ahead, and ensure nothing slips through the cracks.
            Ultimately, it provides the structure needed to stay on top of
            academic responsibilities while maintaining a balanced schedule.
          </p>
        </div>
      </div>
    </>
  );
}

export default Why;
