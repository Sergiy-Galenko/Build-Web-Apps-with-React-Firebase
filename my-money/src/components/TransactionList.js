import React from 'react';
import { useCollection } from '../hooks/useCollection';
import { useFirestore } from '../hooks/useFirestore';
import styles from './TransactionList.module.css';

const TransactionList = ({ uid }) => {
  const { documents, error } = useCollection('transactions', ['uid', '==', uid], ['createdAt', 'desc']);
  const { deleteDocument } = useFirestore('transactions');

  return (
    <div className={styles['transaction-list']}>
      <h2>Transaction List</h2>
      {error && <p className="error">{error}</p>}
      {documents && documents.map(doc => (
        <div key={doc.id} className={styles['transaction-item']}>
          <p className={styles['transaction-name']}>{doc.name}</p>
          <p className={styles['transaction-amount']}>${doc.amount}</p>
          <button onClick={() => deleteDocument(doc.id)} className={styles['delete-button']}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
