import { IAction } from ".";
import { TASK, TASKS } from "../action-types";

const initialTasksState: {tasks: any[], task: any} = {
    tasks: [],
    task: {}
}


export const tasksReducer = (state: any = initialTasksState, {type, payload}: IAction) => {
    switch (type) {
        case TASK: {
            return {
                tasks: state.tasks,
                task: {...payload},
            }
        }
        case TASKS: {
            return {
                task: state.task,
                tasks: [...payload],
            }
        }
        default:
          return state;
      }
}