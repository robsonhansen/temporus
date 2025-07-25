import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import style from "./styles.module.css";

export function CountDown() {
  const { state } = useTaskContext();
  return <div className={style.countDown}>{state.formattedSecondsRemainning}</div>;
}
