import http from '../config/http';

const listUsers = () => http.get('/customer');
const createUsers = (data) => http.post('/customer', data);
const changeUsersById = (id, data) => http.put(`/customer/${id}`, data);
const deleteUsersById = (id) => http.delete(`/customer/${id}`);

export { listUsers, createUsers, changeUsersById, deleteUsersById };