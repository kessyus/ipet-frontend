import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Layout from './components/layout'
import Inicio from './views/inicio'
import history from './config/history'

const Routers = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path='/' component={Inicio} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routers
