import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { House, History, Settings, SunIcon, MoonIcon } from "lucide-react";

type AvaliableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const StorageTheme =
      (localStorage.getItem("theme") as AvaliableThemes) || "dark";

    return StorageTheme;
  });

  function handleThemeClick(event: React.MouseEvent) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
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
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </div>
  );
}
