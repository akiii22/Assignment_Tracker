import { NavLink } from "react-router-dom";
import styles from "./NavLink.module.css";
function NavLinks() {
  return (
    <div className={styles.listContainer}>
      <ul>
        <li>
          <NavLink to="/why">Why?</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
