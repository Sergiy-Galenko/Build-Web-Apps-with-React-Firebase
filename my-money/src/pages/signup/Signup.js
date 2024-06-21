import React from 'react';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { useAutheContext } from '../../context/AuthContext';
import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup, error, isPending } = useSignup();
  const { user } = useAutheContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, displayName);
  };

  if (user) {
    return <p>You are already signed up and logged in!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input 
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <button className="btn" disabled={isPending}>
        {isPending ? 'Loading...' : 'Sign Up'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
