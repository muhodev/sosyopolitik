import { SET_USER } from "context";

export function authReducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
