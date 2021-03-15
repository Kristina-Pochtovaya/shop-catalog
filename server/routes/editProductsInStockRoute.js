import express from 'express';
import bodyParser from 'body-parser';
import { Products } from '../models/Products.js';

const editProductsInStock = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

editProductsInStock.get('/products-instock', urlencodedParser, () => {
});

editProductsInStock.post('/products-instock', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Products.findOne({ where: { id: req.body.data.id } })) {
    Products.findOne({ where: { id: req.body.data.id } })
      .then((existingProducts) => {
        if (existingProducts instanceof Products) {
          Products.update({
            inStock: req.body.data.inStock,
          }, {
            where: { id: req.body.data.id },
          });
          res.send(req.body.data);
        }
      });
  }
  return null;
});

export default editProductsInStock;
