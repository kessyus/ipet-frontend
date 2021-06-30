import http from '../config/http';

const getAllUsers = () => http.get('/supplier');
const createUsers = (data) => http.post('/supplier', data);
const approveUsers = (id, data) => http.post(`/supplier/${id}`, data);
const changeUsersById = (id, data) => http.put(`/supplier/${id}`, data);
const deleteUsersById = (id) => http.delete(`/supplier/${id}`);

export { 
  getAllUsers,
  createUsers,
  approveUsers,
  changeUsersById,
  deleteUsersById
};