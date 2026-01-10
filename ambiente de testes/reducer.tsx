import { useReducer, useRef } from "react";

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type State = Task[];

enum ActionsTypes {
  ADD = "ADD",
  REMOVE = "REMOVE",
  TOGGLE = "TOGGLE",
}

type Actions =
  | { type: ActionsTypes.ADD; payload: string }
  | { type: ActionsTypes.REMOVE; payload: number }
  | { type: ActionsTypes.TOGGLE; payload: number };

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "ADD": {
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    }
    case "TOGGLE": {
      return state.map((task) =>
        task.id == action.payload ? { ...task, done: !task.done } : task
      );
    }
    case "REMOVE": {
      return state.filter((task) => task.id !== action.payload);
    }
    default:
      return state;
  }
}

export function ToDoApp() {
  const [state, dispatch] = useReducer(reducer, []);
  const taskInput = useRef<HTMLInputElement>(null);

  return (
    <>
      <input type="text" placeholder="digite a tarefa" ref={taskInput} />
      <button
        onClick={() => {
          if (taskInput.current) {
            dispatch({
              type: ActionsTypes.ADD,
              payload: taskInput.current.value,
            });
            taskInput.current.value = "";
          }
        }}
      >
        ADD
      </button>
      <ul>
        {state.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => {
                dispatch({
                  type: ActionsTypes.TOGGLE,
                  payload: task.id,
                });
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: ActionsTypes.REMOVE, payload: task.id })
              }
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
