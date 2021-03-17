import express from 'express';
import bodyParser from 'body-parser';
import { Products } from '../models/Products.js';

const editProducts = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

editProducts.get('/products-edit', urlencodedParser, () => {
});

editProducts.post('/products-edit', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Products.findOne({ where: { id: req.body.payload.data.id } })) {
    Products.findOne({ where: { id: req.body.payload.data.id } })
      .then((existingProduct) => {
        if (existingProduct instanceof Products) {
          Products.update({
            categoryId: req.body.payload.data.categoryId,
            category: req.body.payload.data.category,
            description: req.body.payload.data.description,
            image: req.body.payload.data.image,
            price: req.body.payload.data.price,
            inStock: req.body.payload.data.inStock,
          }, {
            where: { id: req.body.payload.data.id },
          });
          res.send(req.body.payload.data);
        }
      });
  }
  return null;
});

export default editProducts;
