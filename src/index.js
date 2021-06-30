import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routers from './routers';
import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import ReduxToastr from './components/redux-toastr';

ReactDOM.render(
  <Provider store={store}>
    <ReduxToastr />
    <Routers />
  </Provider>,
  document.getElementById('root')
);
