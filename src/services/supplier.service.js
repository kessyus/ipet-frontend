import http from '../config/http';

const getAllUsers = () => http.get('/supplier');
const createUsers = (data) => http.post('/supplier', data);
const approveUsers = (id, data) => http.post(`/supplier/${id}`, data);

export { 
  getAllUsers,
  createUsers,
  approveUsers,
};