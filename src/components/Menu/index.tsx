import styles from "./styles.module.css";
import { House, History, Settings, Sun } from "lucide-react";

export function Menu() {
  return (
    <div className={styles.menu}>
      <nav className={styles.menuItems}>
        <a className={styles.link} href="#">
          <House />
        </a>
        <a className={styles.link} href="#">
          <History />
        </a>
        <a className={styles.link} href="#">
          <Settings />
        </a>
        <a className={styles.link} href="#">
          <Sun />
        </a>
      </nav>
    </div>
  );
}
