import { IAction } from ".";
import { USER, USERS } from "../action-types";

const initialUsersState: {users: any[], user: any} = {
    users: [],
    user: {}
}

export const usersReducer = ( state: any = initialUsersState, { type, payload }: IAction ) => {
    switch (type) {
        case USER: {
          return {
            users: state.users,
            user: {...payload},
          }
        }
        case USERS: {
            return {
                user: state.user,
                users: [...payload],
            }
          }
        default:
          return state;
    }
}