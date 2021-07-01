import http from '../config/http';

const getAllUsers = () => http.get('/customer');
const createUsers = (data) => http.post('/customer', data);

export { 
  getAllUsers, 
  createUsers
};