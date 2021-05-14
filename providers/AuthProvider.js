import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

function authReducer(state, action) {
  switch (action.type) {
    case 'setAuth': {
      const copyState = { ...state };

      const { token, user } = action.payload;

      copyState.user = user;
      copyState.isLoggedIn = true;
      copyState.token = token;

      if (window?.localStorage) {
        localStorage.setItem('auth_token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
      }
      return copyState;
    }
    case 'checkAuth': {
      const copyState = { ...state };
      if (window?.localStorage) {
        const authToken = localStorage.getItem('auth_token');
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const user = localStorage.getItem('user');

        if (authToken && isLoggedIn && user) {
          copyState.token = JSON.parse(authToken);
          copyState.isLoggedIn = JSON.parse(isLoggedIn);
          copyState.user = JSON.parse(user);
        }
      }
      return copyState;
    }
    case 'logout': {
      if (window?.localStorage) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        return {
          isLoggedIn: false,
          token: null,
          user: null
        };
      }
      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    token: null,
    user: null
  });

  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  const { state, dispatch } = context;

  const setAuth = payload => dispatch({ type: 'setAuth', payload });
  const checkAuth = () => dispatch({ type: 'checkAuth' });
  const logout = () => dispatch({ type: 'logout' });

  return { state, setAuth, checkAuth, logout };
}
