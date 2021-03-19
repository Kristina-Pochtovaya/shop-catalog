import express from 'express';
import path from 'path';
import fs from 'fs';
import multer from 'multer';

const imageTest = express.Router();

const storage = multer.diskStorage({
  destination(req, res, cb) {
    cb(null, 'uploads');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage });

imageTest.get('/', uploads.single('image'), async (req, res) => {
  const uploadsDirectory = path.join('uploads');
  fs.readdir(uploadsDirectory, (err, files) => {
    if (err) {
      return res.json({ msg: err });
    }
    if (files.length === 0) {
      return res.json({ msg: 'No Images Uploaded!' });
    }
    return res.json({ files });
  });
});

imageTest.post('/', uploads.single('image'), async (req, res) => {
  const image = req.file.path;
  res.json({ msg: 'image successfully created' });
});

export default imageTest;
