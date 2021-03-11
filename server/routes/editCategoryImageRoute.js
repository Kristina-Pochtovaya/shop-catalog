import express from 'express';
import bodyParser from 'body-parser';
import { Category } from '../models/Category.js';

const categoryImage = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

categoryImage.get('/category-image', urlencodedParser, (req, res) => {
  Category.findAll()
    .then((categories) => res.send(categories));
});

categoryImage.post('/category-image', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  /*   console.log(req.body.data.id); */
  if (Category.findOne({ where: { id: req.body.payload.data.id } })) {
    Category.findOne({ where: { id: req.body.payload.data.id } })
      .then((existingCategory) => {
        if (existingCategory instanceof Category) {
          Category.update({
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

export default categoryImage;
