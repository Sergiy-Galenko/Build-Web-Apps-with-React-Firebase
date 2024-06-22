import React from 'react';
import TransactionForm from '../../components/TransactionForm';
import { useAutheContext } from '../../context/AuthContext';

function Dashboard() {
  const { user } = useAutheContext();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <TransactionForm uid={user.uid} />
    </div>
  );
}

export default Dashboard;
