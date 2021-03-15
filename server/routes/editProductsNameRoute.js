import express from 'express';
import bodyParser from 'body-parser';
import { Products } from '../models/Products.js';

const editProductsName = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

editProductsName.get('/products-name', urlencodedParser, () => {
});

editProductsName.post('/products-name', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Products.findOne({ where: { id: req.body.data.id } })) {
    Products.findOne({ where: { id: req.body.data.id } })
      .then((existingProducts) => {
        if (existingProducts instanceof Products) {
          Products.update({
            description: req.body.data.description,
          }, {
            where: { id: req.body.data.id },
          });
          res.send(req.body.data);
        }
      });
  }
  return null;
});

export default editProductsName;
