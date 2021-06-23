import React from 'react';
import { Redirect, Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import history from './config/history';
import Layout from './components/layout';
import { isAuthenticated } from './config/auth';

// Views
import Home from './views/home';
import Login from './views/login';
import NewCustomer from './views/customer';
import UserList from './views/userlist';

const PrivateRoute = ({ ...data }) => {
  if (!isAuthenticated()) {
    return <Redirect to="/login" />;
  }

  const hasAdmin = Object.keys(data).includes('admin') && !(data.profile === 1);

  if (hasAdmin) {
    return <Redirect to="/" />;
  }

  return <Route {...data} />;
};

// Profiles
// 1 - Admin
// 2 - Supplier
// 3 - Customer

const Routers = () => {
  const userProfile = useSelector((state) => state.auth.user?.userType);

  return (
    <Router history={history}>
      <Layout page="iPet">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new_customer" component={NewCustomer} />
          {/* <Route exact path="/categoria/:id" component={Detalhes} /> */}

          {/* Private Routes */}
          <PrivateRoute
            exact
            path="/userlist"
            profile={userProfile}
            admin
            component={UserList}
          />

          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routers;
