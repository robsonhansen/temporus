import style from "./styles.module.css";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { useState } from "react";

export function Forms() {
  const [taskName, setTaskName] = useState("");

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleCreateNewTask} className={style.forms} action="#">
      <div className={style.formsRow}>
        <DefaultInput
          id="task"
          type="text"
          labelText="Tarefa"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Adicione uma Task"
        />
      </div>
      <div className={style.formsRow}>
        <p>Próximo intervalo em 25min.</p>
      </div>
      <DefaultButton type="submit" icon={<PlayCircleIcon />} />
    </form>
  );
}
