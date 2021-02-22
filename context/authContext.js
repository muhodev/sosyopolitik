import { createContext } from "react";

export default createContext({
  isAuth: false,
  token: null,
  user: null,
  setAuth: (isAuth) => {},
  setToken: (token) => {},
  setUser: (user) => {},
});
