import Logo from "./Logo";
import styles from "./Navbar.module.css";
import NavLinks from "./NavLink";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <NavLinks />
    </div>
  );
}

export default Navbar;
