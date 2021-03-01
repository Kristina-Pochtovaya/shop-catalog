import express from 'express';
import path from 'path';

const features = express.Router();

const dirname = path.resolve();

features.get('/features', (req, res) => {
  res.sendFile(path.resolve(dirname, 'static', 'features.html'));
});

export default features;
