import express from 'express';
import path from 'path';

const download = express.Router();

const dirname = path.resolve();

download.get('/download', (req, res) => {
  res.download(path.resolve(dirname, 'static', 'index.html'));
});

export default download;
