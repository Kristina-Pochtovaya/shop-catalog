import express from 'express';
import basket from './basket/basketRoute.js';
import ordersHistory from './basket/ordersHistoryRoute.js';

const commonBasket = express.Router();

commonBasket.post('/basket', basket);

commonBasket.post('/orders-history', ordersHistory);

export default commonBasket;
