import { Home } from "../pages/Home";
import "./styles/global.css";
import "./styles/theme.css";
import type { StateTaskModel } from "../models/StateTaskModel";
import { useState } from "react";

/*
  export type StateTaskModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formatedSecondsRemaining: number;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
      workTime: number;
      shortBreak: number;
      longBreak: number;
    };
  };
*/

const initialState: StateTaskModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState}/>;
}
