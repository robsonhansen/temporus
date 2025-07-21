import { Cycles } from "../Cycles";
import { Forms } from "../Forms";

import style from "./style.module.css";

export function MainForm() {
  return (
    <div className={style.mainForm}>
      <Cycles />
      <Forms />
    </div>
  );
}
