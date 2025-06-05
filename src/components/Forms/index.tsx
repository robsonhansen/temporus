import style from "./styles.module.css";
import { DefaultInput } from "../DefaultInput";

export function Forms() {
  return (
    <form className={style.forms} action="#">
      <div className={style.formsRow}>
        <DefaultInput id="task" type="text" labelText="Tarefa" placeholder="Adicione uma task" disabled />
      </div>
      <div className={style.formsRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={style.formsRow}>
        <p>Ciclos</p>
        <p>0 0 0 0 0 0 0 0 0</p>
      </div>
      <div className={style.formsRow}>
        <button>Enviar</button>
      </div>
    </form>
  );
}
