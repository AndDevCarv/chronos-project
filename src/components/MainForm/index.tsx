import { PlayCircleIcon } from "lucide-react";
import { Cycle } from "../Cycles/Cycle";
import { DefaultButton } from "../DeafultButton";
import { DefaultInput } from "../DefaultInput";
import React, { useRef } from "react";
import type { TaskModel } from "../../../models/TaskModel";
import { useTaskContext } from "../../Contexts/TaskContext/UseTaskContext";

export function MainForm() {
  const taskInput = useRef<HTMLInputElement>(null);
  const { setState } = useTaskContext();

  function HandleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskInput.current === null) return;

    const taskName = taskInput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      completeDate: null,
      duration: 1,
      interruptDate: null,
      startDate: 1,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState, //CONFERIR spread
        activeTask: newTask,
        currentCycle: 1, //conferir
        secondsRemaining, //conferir
        formatedSecondsRemaining: "00:00",
        tasks: [...prevState.tasks, newTask], //conferir
      };
    });
  }

  return (
    <>
      <form onSubmit={HandleCreateNewTask} className="form">
        <div className="formRow">
          <DefaultInput
            id="meuInput"
            type="string"
            labelText="Task"
            placeholder="Digite algo"
            ref={taskInput}
          />
        </div>
        <div className="formRow">
          <p>O próximo descanso é em 25min</p>
        </div>
        <div className="formRow">
          <Cycle />
        </div>
        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  );
}
