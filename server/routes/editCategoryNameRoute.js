import express from 'express';
import bodyParser from 'body-parser';
import { Category } from '../models/Category.js';

const editCategoryName = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

editCategoryName.get('/category-name', urlencodedParser, () => {
});

editCategoryName.post('/category-name', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Category.findOne({ where: { id: req.body.data.id } })) {
    Category.findOne({ where: { id: req.body.data.id } })
      .then((existingCategory) => {
        if (existingCategory instanceof Category) {
          Category.update({
            category: req.body.data.category,
          }, {
            where: { id: req.body.data.id },
          });
          res.send(req.body.data);
        }
      });
  }
  return null;
});

export default editCategoryName;
