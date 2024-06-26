import { Route, Routes } from 'react-router-dom';
import { useAutheContext } from './context/AuthContext';

// pages & components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard'; // Додайте цей імпорт
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute'; // Додайте цей імпорт

function App() {
  const { user, isAuthReady } = useAutheContext();

  // Wait until the authentication state is ready
  if (!isAuthReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {!user && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
        {user && (
          <>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
