import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <h1>Assignment Tracker</h1>
        <img src="../logo-note.png" alt="notebook" />
      </Link>
    </div>
  );
}

export default Logo;
