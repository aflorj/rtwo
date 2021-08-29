import React, { useContext } from 'react';
import { useHistory } from 'react-router';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const history = useHistory();
  const user = sessionStorage.getItem('user');

  function login(username, password) {
    if (username === 'jnovak' && password === 'test123') {
      sessionStorage.setItem(
        'user',
        JSON.stringify({ username: 'jnovak', password: 'test123' })
      );
    }
  }

  function logout() {
    sessionStorage.removeItem('user');
    history.push('/login');
  }

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
