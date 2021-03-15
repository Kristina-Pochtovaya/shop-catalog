import express from 'express';
import bodyParser from 'body-parser';
import { Products } from '../models/Products.js';

const editProductsPrice = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

editProductsPrice.get('/products-price', urlencodedParser, () => {
});

editProductsPrice.post('/products-price', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Products.findOne({ where: { id: req.body.data.id } })) {
    Products.findOne({ where: { id: req.body.data.id } })
      .then((existingProducts) => {
        if (existingProducts instanceof Products) {
          Products.update({
            price: req.body.data.price,
          }, {
            where: { id: req.body.data.id },
          });
          res.send(req.body.data);
        }
      });
  }
  return null;
});

export default editProductsPrice;
