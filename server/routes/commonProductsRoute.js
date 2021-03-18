import express from 'express';
import product from './products/productsRoute.js';
import editProducts from './products/editProductsRoute.js';
import addProduct from './products/addProductRoute.js';
import deleteProduct from './products/deleteProductRoute.js';

const commonProducts = express.Router();

commonProducts.get('/products', product);

commonProducts.post('/products-edit', editProducts);

commonProducts.post('/add-product', addProduct);

commonProducts.post('/delete-product', deleteProduct);

export default commonProducts;
