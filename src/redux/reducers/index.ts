import { combineReducers } from "redux";
import { authReducer } from "./auth";
import {tasksReducer} from './tasks'
import { usersReducer } from "./users";
import { loading } from './loading'

export interface IAction {
    type: string
    payload: any
}

export default combineReducers({
    tasks: tasksReducer,
    auth: authReducer,
    users: usersReducer,
    loading
})