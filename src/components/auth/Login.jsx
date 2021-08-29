import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState('jnovak');
  const [password, setPassword] = useState('test123');

  function handleSubmit(e) {
    e.preventDefault();
    login(username, password);
    history.push('/landing-page');
  }

  function handleUsernameInputChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handlePasswordInputChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <div className="main">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              spellCheck="false"
              autoFocus
              className="login-input"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => handleUsernameInputChange(e)}
              required
            />
            <input
              type="password"
              className="login-input"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => handlePasswordInputChange(e)}
              required
            />
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}
