import type { StateTaskModel } from "../../../models/StateTaskModel";

import { TaskActionTypes, type TaskActionModel } from "./TaskActions";

export function taskReducer(
  action: TaskActionModel,
  state: StateTaskModel
): StateTaskModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK:
      return state;
    case TaskActionTypes.INTERRUPT_TASK:
      return state;
    case TaskActionTypes.RESET_TASK:
      return state;
  }
}
