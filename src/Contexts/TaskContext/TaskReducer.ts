import type { StateTaskModel } from "../../../models/StateTaskModel";
import { formatedSecondsToMinutes } from "../../../Util/formatedSecondsToMinutes";
import { getNextCycle } from "../../../Util/getNextCycle";

import { TaskActionTypes, type TaskActionModel } from "./TaskActions";

export function taskReducer(
  state: StateTaskModel,
  action: TaskActionModel
): StateTaskModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: { // vai startar a task e adicionar atributos
      const nextCycle = getNextCycle(state.currentCycle); //próx ciclo (worktime, shortbreak....)
      const newTask = action.payload; //payload do dispatch
      const secondsRemaining = newTask.duration * 60;
      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining: formatedSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: { //vai interromper a task e modificar seus atributos
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id == task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET_TASK:
      return state;
  }
}
