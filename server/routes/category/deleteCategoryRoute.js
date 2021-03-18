import express from 'express';
import bodyParser from 'body-parser';
import { Category } from '../../models/Category.js';

const deleteCategory = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

deleteCategory.get('/delete-category', urlencodedParser, () => {
});

deleteCategory.post('/delete-category', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Category.findOne({ where: { id: req.body.data.id } })) {
    Category.findOne({ where: { id: req.body.data.id } })
      .then((existingCategory) => {
        if (existingCategory instanceof Category) {
          Category.destroy({
            where: { id: req.body.data.id },
          });

          res.send(true);
        }
      });
  }
  return null;
});

export default deleteCategory;
