import http from '../config/http';

const getAllUsers = () => http.get('/customer');
const createUsers = (data) => http.post('/customer', data);
const changeUsersById = (id, data) => http.put(`/customer/${id}`, data);
const deleteUsersById = (id) => http.delete(`/customer/${id}`);

export { 
  getAllUsers, 
  createUsers, 
  changeUsersById, 
  deleteUsersById
};