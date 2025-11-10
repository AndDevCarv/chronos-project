import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { House, History, Settings, Sun } from "lucide-react";

type AvaliableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>("dark");

  function handleThemeClick(event: React.MouseEvent) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <nav className={styles.menuItems}>
        <a
          className={styles.link}
          href="#"
          aria-label="Ir para a home"
          title="Ir para a home"
        >
          <House />
        </a>
        <a
          className={styles.link}
          href="#"
          aria-label="Ir para o histórico"
          title="Ir para o histórico"
        >
          <History />
        </a>
        <a
          className={styles.link}
          href="#"
          aria-label="Ir para as configurações"
          title="Ir para as configurações"
        >
          <Settings />
        </a>
        <a
          className={styles.link}
          href="#"
          aria-label="Mudar tema"
          title="Mudar tema"
          onClick={handleThemeClick}
        >
          <Sun />
        </a>
      </nav>
    </div>
  );
}
