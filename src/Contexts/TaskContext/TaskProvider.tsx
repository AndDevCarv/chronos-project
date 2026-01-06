import { useEffect, useReducer, useState } from "react";
import { initialState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";

type TextContextProviderType = {
  children: React.ReactNode;
};

export function TextContextProvider({ children }: TextContextProviderType) {
  const [state, setState] = useState(initialState);

  

  const [numero, dispatch] = useReducer((state, action) => { // dispatch: (action: any) => void estrutura do dispatch, estaremos exercitanto o valor de action
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        break;
    }
    console.log(state, action);
    return state;
  }, 0);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>o numero é: {numero}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </button>
    </TaskContext.Provider>
  );
}
