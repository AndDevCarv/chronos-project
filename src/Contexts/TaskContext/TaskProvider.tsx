import { useEffect, useReducer } from "react";
import { initialState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";

type TextContextProviderType = {
  children: React.ReactNode;
};

export function TextContextProvider({ children }: TextContextProviderType) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
