import * as actionTypes from "./types";

export const initialState = {
    toasts: ["toast1", "toast2", "toast3", "toast4"],
};


export function contextReducer(state, action) {
  console.log(action)
    switch (action.type) {
      case actionTypes.Add:
        return {
          toasts: [action.payload, ...state.toasts],
        };
      case actionTypes.Remove:
        const copy = [...state.toasts];
        copy.pop();
        return {
          toasts: copy,
        };
      case actionTypes.RemoveByIndex:
        const newarr = [...state.toasts];
        newarr.splice(action.payload, 1);
        return {
          toasts: newarr,
        };
      default:
        return {
          toasts: state.toasts,
        };
    }
  }