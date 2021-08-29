import Login from './components/auth/Login';
import LandingPage from './components/app/LandingPage';
import Data from './components/app/Data';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import './stylesheets/main.scss';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/landing-page" component={LandingPage} />
          <PrivateRoute exact path="/data" component={Data} />
          <Route path="/login" component={Login} />
          <Route>
            <Redirect to="/landing-page" />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
