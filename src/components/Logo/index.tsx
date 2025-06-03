import style from "./styles.module.css";
import { TimerIcon } from "lucide-react";

export function Logo() {
  return (
    <div className={style.logo}>
      <a className={style.logoLink} href="/">
        <TimerIcon />
        <span>Temporus</span>
      </a>
    </div>
  );
}
