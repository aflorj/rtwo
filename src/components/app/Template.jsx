import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Template({ children }) {
  const { logout } = useAuth();
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <div className="template-main">
      <div className="header">
        <div className="navbar-links">
          <Link to="/landing-page">Articles</Link>
          <Link to="/data">Data</Link>
        </div>
        <div className="navbar-user">
          <div className="user-info">
            Logged in as{' '}
            <span className="user-decoration">{user.username}</span>
          </div>
          <button onClick={() => logout()}>Log out</button>
        </div>
      </div>
      {children}
    </div>
  );
}
