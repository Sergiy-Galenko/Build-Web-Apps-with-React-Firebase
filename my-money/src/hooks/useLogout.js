import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { projectAuth } from '../firebase/config';
import { useAutheContext } from '../context/AuthContext';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAutheContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      // Sign the user out
      await signOut(projectAuth);

      // Dispatch logout action
      dispatch({ type: 'LOGOUT' });

      // Reset the state
      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, logout };
};
