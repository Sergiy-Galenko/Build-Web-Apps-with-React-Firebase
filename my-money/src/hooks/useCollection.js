import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collectionName, _query = [], _orderBy = []) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(projectFirestore, collectionName);

    if (_query.length > 0 && _orderBy.length > 0) {
      ref = query(ref, where(..._query), orderBy(..._orderBy));
    } else if (_query.length > 0) {
      ref = query(ref, where(..._query));
    } else if (_orderBy.length > 0) {
      ref = query(ref, orderBy(..._orderBy));
    }

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push({ id: doc.id, ...doc.data() });
      });

      setDocuments(results);
      setError(null);
    }, (error) => {
      console.log(error);
      setError('Could not fetch the data');
    });

    // Cleanup function to unsubscribe from the collection when the component unmounts
    return () => unsubscribe();
  }, [collectionName, _query, _orderBy]);

  return { documents, error };
};
