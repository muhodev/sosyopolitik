import { useContext, useReducer } from "react";

import { SET_AUTH, SET_TOKEN, SET_USER, authReducer } from "./reducer";
import AuthContext from "./authContext";

export function AuthProvider(props) {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuth: false,
    token: null,
    user: null,
  });

  const setAuth = (isAuth) => {
    dispatch({ type: SET_AUTH, payload: isAuth });
  };
  const setToken = (token) => {
    dispatch({ type: SET_TOKEN, payload: token });
  };

  const setUser = (user) => {
    dispatch({ type: SET_USER, payload: user });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: authState.isAuth,
        token: authState.token,
        user: authState.user,
        setAuth,
        setToken,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
