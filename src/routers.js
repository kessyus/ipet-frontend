import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout';
import { isAuthenticated } from './config/auth';
import { useSelector } from 'react-redux';
import history from './config/history';

// Views
import Home from './views/home';
import Login from './views/login';
import NewCustomer from './views/customer';
import UserList from './views/userlist';
import SupplierList from './views/supplierlist';
import Category from './views/category';
import NewSupplier from './views/supplier';
import SupplierUnderApproval from './views/supplierUnderApproval';
import NewCategory from './views/categoryNew';
import Product from './views/product';

const PrivateRoute = ({ ...data }) => {
  if (!isAuthenticated()) {
    return <Redirect to="/login" />;
  }

  const hasAdmin = Object.keys(data).includes('admin') && !data.admin;
  const hasCustomer = Object.keys(data).includes('customer') && !data.customer;
  const hasSupplier = Object.keys(data).includes('supplier') && !data.supplier;

  if (hasAdmin || hasCustomer || hasSupplier) {
    return <Redirect to="/" />;
  }


  return <Route {...data} />;
};

const Routers = () => {
  const isAdmin = (useSelector((state) => state.auth.user?.userType) === 'admin');
  const isSupplier = (useSelector((state) => state.auth.user?.userType) === 'supplier');
  // const isCustomer = (useSelector((state) => state.auth.user?.userType) === 'customer');

  return (
    <Router history={history}>
      <Layout page="iPet">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new_customer" component={NewCustomer} />
          <Route exact path="/new_supplier" component={NewSupplier} />
          <Route exact path="/supplierapproval" component={SupplierUnderApproval} />
          <Route exact path="/product" component={Product} />
          {/* <Route exact path="/categoria/:id" component={Detalhes} /> */}

          {/* Private Routes */}
          <PrivateRoute
            exact
            path="/userlist"
            admin={isAdmin}
            component={UserList}
          />
          <PrivateRoute
            exact
            path="/supplierlist"
            admin={isAdmin}
            component={SupplierList}
          />
          <PrivateRoute
            exact
            path="/category"
            admin={isAdmin}
            component={Category}
          />
          <PrivateRoute
            exact
            path="/new_category"
            admin={isAdmin}
            component={NewCategory}
          />
          <PrivateRoute
            exact
            path="/product"
            supplier={isSupplier}
            component={UserList}
          />
          
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routers;
