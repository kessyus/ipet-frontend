import axios from 'axios'
import { getToken } from './storage'
import history from './history'
import store from '../store'
import { logoutAction } from '../store/auth/auth.action'

// API's URL
const urlApi = process.env.REACT_APP_API

// HTTP client
const http = axios.create({
  baseURL: urlApi,
})

// App default header
http.defaults.headers['content-type'] = 'application/json'
if (getToken()) {
  http.defaults.headers.token = getToken()
}

http.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        store.dispatch(logoutAction())
        history.push('/signin')
        break
      default:
        break
    }
  }
)

export default http
