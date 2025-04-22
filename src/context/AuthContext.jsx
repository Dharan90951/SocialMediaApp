import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext({
  user: null,
  isFetching: false,
  error: null,
  dispatch: () => {
    throw new Error('AuthContext: Cannot dispatch actions before AuthProvider initialization. Make sure your component is wrapped in AuthProvider.');
  }
});

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: null
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: action.payload
      };
    case 'LOGOUT':
      return {
        user: null,
        isFetching: false,
        error: false
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ 
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth hook must be used within an AuthProvider component. Please check your component hierarchy.');
  }
  return context;
};