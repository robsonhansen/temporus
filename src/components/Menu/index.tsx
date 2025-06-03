import style from "./styles.module.css";
import { SettingsIcon, HouseIcon, HistoryIcon, SunIcon } from "lucide-react";

export function Menu() {
  return (
    <nav className={style.menu}>
      <a href="/" className={style.menuLink}>
        <HouseIcon />
      </a>
      <a href="/" className={style.menuLink}>
        <HistoryIcon />
      </a>
      <a href="/" className={style.menuLink}>
        <SettingsIcon />
      </a>
      <a href="/" className={style.menuLink}>
        <SunIcon />
      </a>
    </nav>
  );
}
