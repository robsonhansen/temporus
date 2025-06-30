import { createContext, useContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { useState } from "react";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaning: 0,
  formattedSecondsRemainning: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25 * 60,
    shortBreakTime: 5 * 60,
    longBreakTime: 15 * 60
  }
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialState,
  setState: () => {}
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);

  return <TaskContext.Provider value={{ state, setState }}>{children}</TaskContext.Provider>;
}

export function useTaskContext() {
  return useContext(TaskContext);
}
