import { createContext } from "react";
import type { StateTaskModel } from "../../../models/StateTaskModel";
import { initialState } from "./InitialTaskState";
import type { TaskActionModel } from "./TaskActions";

type TaskContextProps = {
  dispatch: React.Dispatch<TaskActionModel>;
  state: StateTaskModel;
};

const initialContextValue = {
  state: initialState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
