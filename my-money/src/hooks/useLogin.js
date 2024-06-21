import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { projectAuth } from '../firebase/config';
import { useAutheContext } from '../context/AuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAutheContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // Sign the user in
      const response = await signInWithEmailAndPassword(projectAuth, email, password);

      // Dispatch login action
      dispatch({ type: 'LOGIN', payload: response.user });

      // Reset the state
      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, login };
};
