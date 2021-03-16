import express from 'express';
import bodyParser from 'body-parser';
import { Products } from '../models/Products.js';

const deleteProduct = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

deleteProduct.get('/delete-product', urlencodedParser, () => {
});

deleteProduct.post('/delete-product', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Products.findOne({ where: { id: req.body.data.id } })) {
    Products.findOne({ where: { id: req.body.data.id } })
      .then((existingProduct) => {
        if (existingProduct instanceof Products) {
          Products.destroy({
            where: { id: req.body.data.id },
          });

          res.send(true);
        }
      });
  }
  return null;
});

export default deleteProduct;
