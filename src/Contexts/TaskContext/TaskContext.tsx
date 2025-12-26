import { createContext } from "react";
import type { StateTaskModel } from "../../../models/StateTaskModel";
import { initialState } from "./InitialTaskState";

type TaskContextProps = {
  setState: React.Dispatch<React.SetStateAction<StateTaskModel>>;
  state: StateTaskModel;
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
