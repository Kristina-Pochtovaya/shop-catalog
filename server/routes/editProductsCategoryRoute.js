import express from 'express';
import bodyParser from 'body-parser';
import { Products } from '../models/Products.js';

const editProductsCategory = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

editProductsCategory.get('/products-category', urlencodedParser, () => {
});

editProductsCategory.post('/products-category', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Products.findOne({ where: { id: req.body.data.id } })) {
    Products.findOne({ where: { id: req.body.data.id } })
      .then((existingCategory) => {
        if (existingCategory instanceof Products) {
          Products.update({
            category: req.body.data.category,
            categoryId: req.body.data.categoryId,
          }, {
            where: { id: req.body.data.id },
          });
          res.send(req.body.data);
        }
      });
  }
  return null;
});

export default editProductsCategory;
