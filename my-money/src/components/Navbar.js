import { Link } from "react-router-dom";
import { useAutheContext } from '../context/AuthContext';
import { useLogout } from '../hooks/useLogout';

// styles
import styles from './Navbar.module.css';

export default function Navbar() {
  const { user } = useAutheContext();
  const { logout, error, isPending } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {user && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>
              <button onClick={logout} disabled={isPending}>
                {isPending ? 'Logging out...' : 'Logout'}
              </button>
            </li>
          </>
        )}
      </ul>
      {error && <p className="error">{error}</p>}
    </nav>
  );
}
