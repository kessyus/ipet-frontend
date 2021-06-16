import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Layout from './components/layout';
// import { isAuthenticated } from './config/auth';
import history from './config/history';

// Views
import Home from './views/home';
import Login from './views/login';
import Logout from './views/logout';

// const AdminRoute = ({ ...data }) => {
//   if (!isAuthenticated()) {
//     return <Redirect to="/login" />;
//   }

//   const hasAdmin = Object.keys(data).includes('admin') && !data.admin;

//   if (hasAdmin) {
//     return <Redirect to="/" />;
//   }

//   return <Route {...data} />;
// };

const Routers = () => {
  // const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <Router history={history}>
      <Layout page="iPet">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          {/* <Route exact path="/categoria/:id" component={Detalhes} /> */}

          {/* ADMIN */}
          {/* <AdminRoute
            exact
            path="/cadastro"
            admin={isAdmin}
            component={Cadastro}
          /> */}

          {/* <Redirect from="*" to="/" /> */}
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routers;
