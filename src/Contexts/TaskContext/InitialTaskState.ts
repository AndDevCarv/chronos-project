import type { StateTaskModel } from "../../../models/StateTaskModel";

export const initialState: StateTaskModel = {
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
