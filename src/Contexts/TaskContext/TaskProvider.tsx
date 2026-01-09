import { useEffect, useState } from "react";
import { initialState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";

type TextContextProviderType = {
  children: React.ReactNode;
};

export function TextContextProvider({ children }: TextContextProviderType) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
