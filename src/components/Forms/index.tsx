import style from "./styles.module.css";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";

export function Forms() {
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("New task created!");
  }
  return (
    <form onSubmit={handleCreateNewTask} className={style.forms} action="#">
      <div className={style.formsRow}>
        <DefaultInput id="task" type="text" labelText="Tarefa" placeholder="Adicione uma task" />
      </div>
      <div className={style.formsRow}>
        <p>Próximo intervalo em 25min.</p>
      </div>
      <DefaultButton type="submit" icon={<PlayCircleIcon />} />
    </form>
  );
}
