import { Navigate } from 'react-router-dom';
import { useAutheContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, isAuthReady } = useAutheContext();

  if (!isAuthReady) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
