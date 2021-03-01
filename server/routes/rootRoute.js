import express from 'express';
import path from 'path';

const root = express.Router();

const dirname = path.resolve();

root.get('/', (req, res) => {
  res.sendFile(path.resolve(dirname, 'static', 'index.html'));
});

root.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

export default root;
