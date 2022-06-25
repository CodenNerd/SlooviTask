import { IAction } from ".";
import { LOADING } from "../action-types";

const initialLoadingState = false;

export const loading = (state: any = initialLoadingState, {type, payload}: IAction) => {
    switch (type) {
        case LOADING: {
          return payload
        }
        default:
          return state;
      }
}