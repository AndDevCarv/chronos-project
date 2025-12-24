import type { TaskModel } from "./TaskModel";
import { createContext, useContext, useState } from "react";

export type StateTaskModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formatedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreak: number;
    longBreak: number;
  };
};

const initialState: StateTaskModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: "01:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
  },
};

type TaskContextProps = {
  setState: React.Dispatch<React.SetStateAction<StateTaskModel>>;
  state: StateTaskModel;
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TextContextProviderType = {
  children: React.ReactNode;
};

export function TextContextProvider({ children }: TextContextProviderType) {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
