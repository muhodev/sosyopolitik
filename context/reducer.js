export const SET_AUTH = "SET_AUTH";
export const SET_TOKEN = "SET_TOKEN";
export const SET_USER = "SET_USER";

export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
