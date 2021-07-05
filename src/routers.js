import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout';
import { isAuthenticated } from './config/auth';
import { useSelector } from 'react-redux';
import history from './config/history';

// Views
import Home from './views/home';
import Login from './views/login';
import UserList from './views/userlist';
import NewCustomer from './views/customer';
import SupplierList from './views/supplierlist';
import SupplierUnderApproval from './views/supplierUnderApproval';
import NewSupplier from './views/supplier';
import Category from './views/category';
import NewCategory from './views/categoryNew';
import Product from './views/product';
import ProductList from './views/productlist';
import ProductCategory from './views/productCategory';
import NewProduct from './views/productNew';
import AdminProductList from './views/productlistadm';

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
          <Route exact path="/product/:id" component={ProductCategory} />

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
            path="/productlist"
            supplier={isSupplier}
            component={ProductList}
          />
          <PrivateRoute
            exact
            path="/new_product"
            supplier={isSupplier}
            component={NewProduct}
          />
          <PrivateRoute
            exact
            path="/productlistadm"
            admin={isAdmin}
            component={AdminProductList}
          />

          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routers;
