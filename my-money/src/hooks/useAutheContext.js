import { useAutheContext } from '../context/AuthContext';
const SomeComponent = () => {
  const { user, dispatch } = useAutheContext();

  const login = (userData) => {
    dispatch({ type: 'LOGIN', payload: userData });
  };

  return (
    <div>
      {user ? <p>Welcome, {user.displayName}</p> : <p>Please log in</p>}
      <button onClick={() => login({ displayName: 'John Doe' })}>Log In</button>
    </div>
  );
};
