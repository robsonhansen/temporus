import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { Forms } from "../Forms";
import { PlayCircleIcon } from "lucide-react";

import style from "./style.module.css";

export function MainForm() {
  return (
    <div className={style.mainForm}>
      <Cycles />
      <Forms />
      <DefaultButton icon={<PlayCircleIcon />} />
    </div>
  );
}
