import express from 'express';
import bodyParser from 'body-parser';
import { Products } from '../models/Products.js';

const product = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

product.get('/products', urlencodedParser, (req, res) => {
  Products.findAll()
    .then((products) => res.send(products));
});

export default product;
