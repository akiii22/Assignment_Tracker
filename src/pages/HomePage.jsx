import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./HomePage.module.css";
function HomePage() {
  const navigate = useNavigate();
  const navigateNoteApp = () => {
    navigate("note");
  };
  return (
    <>
      <Navbar />
      <div className={styles.home}>
        <div className={styles.homeContent}>
          <h1>
            Welcome <span>Students</span>
          </h1>
          <img src="../home1.png" alt="notebook" />
        </div>
        <button className={styles.btn} onClick={navigateNoteApp}>
          Get started
        </button>
      </div>
    </>
  );
}

export default HomePage;
