import { useEffect, useReducer, useState } from "react";
import { initialState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";

type TextContextProviderType = {
  children: React.ReactNode;
};

export function TextContextProvider({ children }: TextContextProviderType) {
  const [state, setState] = useState(initialState);

  type actionType = {
    type: string;
    payload?: number;
  };

  const [myState, dispatch] = useReducer(
    (state, action: actionType) => {
      // dispatch: (action: any) => void estrutura do dispatch, estaremos exercitanto o valor de action.

      switch (action.type) {
        case "increment": {
          if (!action.payload) return state;
          return {
            ...state,
            secondsRemaining: state.secondsRemaining + action.payload,
          };
        }

        case "decrement": {
          if (!action.payload) return state;

          return {
            ...state,
            secondsRemaining: state.secondsRemaining - action.payload,
          };
        }

        case "reset": {
          if (action.payload) return state;

          return {
            secondsRemaining: 0,
          };
        }
      }

      return state;
    },
    { secondsRemaining: 0 }
  );

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>o numero é: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </TaskContext.Provider>
  );
}
