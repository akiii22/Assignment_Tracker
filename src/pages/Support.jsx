import Navbar from "../components/Navbar";
import styles from "./Support.module.css";
function Support() {
  return (
    <>
      <Navbar />
      <div className={styles.support}>
        <div className={styles.supportContainer}>
          <img
            src="../professor.png"
            alt="Support"
            className={styles.supportImage}
          />
          <div className={styles.supportContent}>
            <p>
              Our Assignment Tracker is designed to assist teachers in managing
              and monitoring their students assignments with ease. By providing
              a centralized platform to track due dates, assignments, and
              progress, our app aims to simplify the administrative aspects of
              teaching. Teachers can quickly add and organize assignments, set
              deadlines, and keep students accountable. Our goal is to enhance
              the teaching experience and help educators focus more on
              instruction and less on paperwork. If you need any assistance or
              have questions about using the app, our support team is here to
              help you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
