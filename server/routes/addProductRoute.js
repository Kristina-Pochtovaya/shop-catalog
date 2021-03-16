import express from 'express';
import bodyParser from 'body-parser';
import { Products } from '../models/Products.js';

const addProduct = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

addProduct.get('/add-product', urlencodedParser, () => {
});

addProduct.post('/add-product', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  const response = req.body.payload.data;
  Products.create({
    categoryId: response.categoryId,
    category: response.category,
    description: response.description,
    imgAlt: response.imgAlt,
    imgTitle: response.imgTitle,
    image: response.image,
    price: response.price,
    counter: response.counter,
    inStock: response.inStock,
  }).catch(() => {
    res.status(404).end();
    res.send(false);
  });
  res.send(true);
  return true;
});

export default addProduct;
