import http from '../config/http';

const getAllProduct = () => http.get(`/product`);
const getAllProductByCategory = (id) => http.get(`/product/category/${id}`);
const getAllProductBySupplier = (id) => http.get(`/product/supplier/${id}`);
const createProduct = (data) => http.post('/product', data);

export {
  getAllProduct,
  getAllProductByCategory,
  getAllProductBySupplier,
  createProduct
};