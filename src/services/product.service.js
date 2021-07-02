import http from '../config/http';

const getAllProductByCategory = (id) => http.get(`/product/category/${id}`);
const getAllProductBySupplier = (id) => http.get(`/product/supplier/${id}`);
const createProduct = (data) => http.post('/product', data);

export {
  getAllProductByCategory,
  getAllProductBySupplier,
  createProduct
};