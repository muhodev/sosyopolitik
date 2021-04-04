import { useReducer } from "react";
import AuthContext from "./context";
import { authReducer } from "../authReducer";
import { SET_USER } from "../constants";

export function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, {});
  const setUser = (user) => {
    dispatch({ type: SET_USER, payload: user });
  };

  return (
    <AuthContext.Provider value={{ state, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
