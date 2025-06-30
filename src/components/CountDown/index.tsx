import style from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext";

export function CountDown() {
  const { state } = useTaskContext();
  return <div className={style.countDown}>{state.formattedSecondsRemainning}</div>;
}
