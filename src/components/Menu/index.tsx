import styles from "./styles.module.css";
import { House, History, Settings, Sun } from "lucide-react";

export function Menu() {
  return (
    <div className={styles.menu}>
      <nav className={styles.menuItems}>
        <a href="#">
          <House />
        </a>
        <a href="#">
          <History />
        </a>
        <a href="#">
          <Settings />
        </a>
        <a href="#">
          <Sun />
        </a>
      </nav>
    </div>
  );
}
