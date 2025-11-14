import { TaskModel } from "./taskModel";

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
