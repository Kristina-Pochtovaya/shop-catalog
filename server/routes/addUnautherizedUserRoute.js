import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../models/Users.js';

const addUnautherizedUserRoute = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

addUnautherizedUserRoute.get('/add-unautherizedUser', urlencodedParser, () => {
});

addUnautherizedUserRoute.post('/add-unautherizedUser', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  res.send(JSON.stringify(req.body));
  const response = req.body.data;
  Users.create({
    firstName: response.firstName,
    phoneNumber: response.phoneNumber,
    address: response.address,
    role: 'unauthorized',
  }).catch(() => {
    res.status(404).end();
  });
  return null;
});

export default addUnautherizedUserRoute;
