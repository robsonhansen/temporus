import style from "./styles.module.css";
import { SettingsIcon, HouseIcon, HistoryIcon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  const toggleTheme = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={style.menu}>
      <a href="/" className={style.menuLink} aria-label="Home" title="Ir para a página inicial">
        <HouseIcon />
      </a>
      <a href="/" className={style.menuLink} aria-label="Histórico" title="Ver histórico de atividades">
        <HistoryIcon />
      </a>
      <a href="/" className={style.menuLink} aria-label="Configurações" title="Acessar configurações">
        <SettingsIcon />
      </a>
      <a href="/" className={style.menuLink} aria-label="Tema" title="Mudar tema" onClick={toggleTheme}>
        <SunIcon />
      </a>
    </nav>
  );
}
