import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycle } from "../Cycles/Cycle";
import { DefaultButton } from "../DeafultButton";
import { DefaultInput } from "../DefaultInput";
import React, { useRef } from "react";
import type { TaskModel } from "../../../models/TaskModel";
import { useTaskContext } from "../../Contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../../Util/getNextCycle";
import { getNextCycleType } from "../../../Util/getNextCycleType";
import { TaskActionTypes } from "../../Contexts/TaskContext/TaskActions";
import { Tips } from "../Tips";
import { TimerWorkerManager } from "../../../Workers/TimerWorkerManager.ts";

export function MainForm() {
  const taskInput = useRef<HTMLInputElement>(null); //o useRef é muito usado para acessar diretamente elementos do DOM ou guardar valores que não precisam disparar atualização de tela. Diferente do useState que sempre fica atualizando a cada render.
  const { state, dispatch } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  console.log(nextCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskInput.current === null) return;

    const taskName = taskInput.current.value.trim(); //taskInput.current é o próprio input no DOM, permitindo acessar .value

    if (!taskName) {
      alert("Digite o nome da tarefa.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      completeDate: null,
      duration: state.config[nextCycleType],
      interruptDate: null,
      startDate: 1,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    const worker = TimerWorkerManager.getInstance();
    worker.postMessage("teste");
  }

  function handlerInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }
  return (
    <>
      <form onSubmit={handleCreateNewTask} className="form">
        <div className="formRow">
          <DefaultInput
            id="meuInput"
            type="string"
            labelText="Task"
            placeholder="Digite algo"
            ref={taskInput} //conectamos o useRef ao DOM
            disabled={!!state.activeTask} //o !! força o resultado ser true ou false, se for null vai ser convertido para false, se for um obj vai ser convertido para true
          />
        </div>
        <div className="formRow">
          <Tips />
        </div>

        {state.currentCycle > 0 && ( //Se state.currentCycle > 0, renderiza a <div> com <Cycle />. Caso contrário, não renderiza nada
          <div className="formRow">
            <Cycle />
          </div>
        )}
        <div className="formRow">
          {!state.activeTask ? (
            <DefaultButton
              aria-label="Iniciar nova tarefa"
              title="Iniciar nova tarefa"
              type="submit"
              key={"submit"} //key para o react não reaproveitar o botão e causar bug no submit
              icon={<PlayCircleIcon />}
            />
          ) : (
            <DefaultButton
              aria-label="Interromper tarefa"
              title="Interromper tarefa"
              type="button"
              color="red"
              key={"button"} //key para o react não reaproveitar o botão e causar bug no submit
              onClick={handlerInterruptTask}
              icon={<StopCircleIcon />}
            />
          )}
        </div>
      </form>
    </>
  );
}
