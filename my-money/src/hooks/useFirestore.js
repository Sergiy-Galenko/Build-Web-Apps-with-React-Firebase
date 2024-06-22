import { useReducer, useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: false
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null };
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null };
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload };
    default:
      return state;
  }
};

export const useFirestore = (collectionName) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const ref = collection(projectFirestore, collectionName);

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const addedDocument = await addDoc(ref, { ...doc, createdAt: serverTimestamp() });
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, response };
};
