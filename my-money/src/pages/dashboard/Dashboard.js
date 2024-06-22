import React from 'react';
import TransactionForm from '../../components/TransactionForm';
import TransactionList from '../../components/TransactionList';
import { useAutheContext } from '../../context/AuthContext';

function Dashboard() {
  const { user } = useAutheContext();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <TransactionForm uid={user.uid} />
      <TransactionList uid={user.uid} />
    </div>
  );
}

export default Dashboard;
