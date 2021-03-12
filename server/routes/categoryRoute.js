import express from 'express';
import bodyParser from 'body-parser';
import { Category } from '../models/Category.js';

const category = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

category.get('/category', urlencodedParser, (req, res) => {
  Category.findAll()
    .then((categories) => res.send(categories));
});

export default category;
/*
Category.destroy({
  where: {},
  truncate: true,
});
 */
