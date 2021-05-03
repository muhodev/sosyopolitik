import { TOGGLE_AUTH_MODAL } from "context";

export function authReducer(state, action) {
  switch (action.type) {
    case TOGGLE_AUTH_MODAL:
      return state;

    default:
      return state;
  }
}
