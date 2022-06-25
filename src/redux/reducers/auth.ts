import { IAction } from ".";
import { AUTH } from "../action-types";

const initialAuthState: any = {
    isAuthenticated: false
}


export const authReducer = (state: any = initialAuthState, {type, payload}: IAction) => {
    switch (type) {
        case AUTH: {

          return {
              ...payload
          }
        }
        default:
          return state;
      }
}