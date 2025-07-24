import style from "./styles.module.css";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Forms() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Por favor, adicione uma tarefa.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: "workTime",
    };

    setState((prevState) => ({
      ...prevState,
      activeTask: newTask,
      currentCycle: 1, //mexer
      secondsRemaning: newTask.duration * 60, // mexer
      formattedSecondsRemainning: "00:00", // mexer
      tasks: [...prevState.tasks, newTask],
    }));
  }
  return (
    <form onSubmit={handleCreateNewTask} className={style.forms} action="#">
      <div className={style.formsRow}>
        <DefaultInput id="task" type="text" labelText="Tarefa" ref={taskNameInput} placeholder="Adicione uma Task" />
      </div>
      <div className={style.formsRow}>
        <p>Próximo intervalo em 25min.</p>
      </div>
      <DefaultButton type="submit" icon={<PlayCircleIcon />} />
    </form>
  );
}
