import { useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { serverTimestamp } from 'firebase/firestore'; // Додайте цей імпорт
import styles from './TransactionForm.module.css';

export default function TransactionForm({ uid }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addDocument, response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount: parseFloat(amount), // Ensure amount is a number
      createdAt: serverTimestamp(), // Використовуйте serverTimestamp
    });
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles['transaction-form']}>
      <h3>Add a new transaction</h3>
      <label>
        <span>Transaction name:</span>
        <input 
          type="text" 
          required 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
        />
      </label>
      <label>
        <span>Amount ($):</span>
        <input 
          type="number" 
          required 
          onChange={(e) => setAmount(e.target.value)} 
          value={amount} 
        />
      </label>
      <button className="btn">Add Transaction</button>
      {response.error && <p className="error">{response.error}</p>}
    </form>
  );
}
