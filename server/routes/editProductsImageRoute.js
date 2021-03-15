import express from 'express';
import bodyParser from 'body-parser';
import { Products } from '../models/Products.js';

const productsImage = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

productsImage.get('/products-image', urlencodedParser, (req, res) => {
  Products.findAll()
    .then((categories) => res.send(categories));
});

productsImage.post('/products-image', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  /*   console.log(req.body.data.id); */
  if (Products.findOne({ where: { id: req.body.payload.data.id } })) {
    Products.findOne({ where: { id: req.body.payload.data.id } })
      .then((existingProducts) => {
        if (existingProducts instanceof Products) {
          Products.update({
            image: req.body.payload.data.image,
          }, {
            where: { id: req.body.payload.data.id },
          });
          res.send(req.body.payload.data.image);
        }
      });
  }
  return res.send(false);
});

export default productsImage;
