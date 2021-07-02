import http from '../config/http';

const getAllCategories = () => http.get('/category');
const getCategoryById = (id) => http.get(`/category/${id}`);
const createCategories = (data) => http.post('/category', data);
const deleteCategoryById = (id) => http.delete(`/category/${id}`);
const changeCategoryById = (id, data, config = {}) => http.put(`/category/${id}`, data, config);

export { 
  getAllCategories,
  getCategoryById,
  createCategories,
  changeCategoryById,
  deleteCategoryById
};