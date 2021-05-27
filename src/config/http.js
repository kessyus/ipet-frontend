import axios from 'axios';
import store from '../store';
import { getToken } from './auth';
import history from './history';
import { logoutAction } from '../store/actions/auth';

const urlApi = process.env.REACT_APP_API;

const http = axios.create({
  baseURL: urlApi
});

http.defaults.headers['content-type'] = 'application/json';
if (getToken()) {
  http.defaults.headers.token = getToken();
}

http.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        store.dispatch(logoutAction());
        history.push('/login');
        break;
      case 404:
        history.push('/');
        break;
      default:
        break;
    }
  }
);

export default http;
