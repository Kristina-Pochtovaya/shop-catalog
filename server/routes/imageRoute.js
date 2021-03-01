import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const image = express.Router();

const dirname = path.resolve();

image.get('/image', urlencodedParser, (req, res) => {
  res.sendFile(path.resolve(dirname, 'static', 'garden1.jpg'));
});

export default image;
