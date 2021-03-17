import express from 'express';
import bodyParser from 'body-parser';
import { Category } from '../models/Category.js';

const editCategory = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

editCategory.get('/category-edit', urlencodedParser, (req, res) => {
  Category.findAll()
    .then((categories) => res.send(categories));
});

editCategory.post('/category-edit', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }

  if (Category.findOne({ where: { id: req.body.payload.data.id } })) {
    Category.findOne({ where: { id: req.body.payload.data.id } })
      .then((existingCategory) => {
        if (existingCategory instanceof Category) {
          Category.update({
            category: req.body.payload.data.category,
            image: req.body.payload.data.image,
          }, {
            where: { id: req.body.payload.data.id },
          });
          res.send(req.body.payload.data.image);
        }
      });
  }
  return res.send(req.body.payload.data);
});

export default editCategory;
