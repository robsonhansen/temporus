import style from "./styles.module.css";
import { DefaultInput } from "../DefaultInput";

export function Forms() {
  return (
    <form className={style.forms} action="#">
      <div className={style.formsRow}>
        <DefaultInput id="task" type="text" labelText="Tarefa" placeholder="Adicione uma task" />
      </div>
      <div className={style.formsRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </form>
  );
}
