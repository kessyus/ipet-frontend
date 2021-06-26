import http from '../config/http';

const AuthService = (data) => http.post('/auth', data);

export default AuthService;
