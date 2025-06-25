import { useState } from "react";
import { Home } from "./pages/Home";
import type { TaskStateModel } from "./models/TaskStateModel";

import "./styles/global.css";
import "./styles/theme.css";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaning: 0,
  formattedSecondsRemainning: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25 * 60, // 25 minutes in seconds
    shortBreakTime: 5 * 60, // 5 minutes in seconds
    longBreakTime: 15 * 60, // 15 minutes in seconds
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
