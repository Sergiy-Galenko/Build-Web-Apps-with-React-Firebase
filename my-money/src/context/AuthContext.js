import { createContext, useReducer, useEffect, useContext } from 'react';
import { projectAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

// Create the context
export const AutheContext = createContext();

// Define the initial state
const initialState = {
  user: null,
  isAuthReady: false,
};

// Define the reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

// Create the provider component
export const AutheContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(projectAuth, (user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AutheContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AutheContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAutheContext = () => {
  const context = useContext(AutheContext);
  if (context === undefined) {
    throw new Error('useAutheContext must be used within an AutheContextProvider');
  }
  return context;
};
