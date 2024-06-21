import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { projectAuth, projectFirestore } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { useAutheContext } from '../context/AuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAutheContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // Create a new user with email and password
      const response = await createUserWithEmailAndPassword(projectAuth, email, password);

      if (!response) {
        throw new Error('Could not complete signup');
      }

      // Add display name to the user profile
      await updateProfile(response.user, { displayName });

      // Add user data to Firestore
      await setDoc(doc(projectFirestore, 'users', response.user.uid), {
        displayName,
        email,
        createdAt: new Date()
      });

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

  return { error, isPending, signup };
};
