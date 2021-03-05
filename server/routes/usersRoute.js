import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../models/Users.js';

const users = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

users.get('/users', urlencodedParser, () => {
});

users.post('/users', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  res.send(JSON.stringify(req.body));
  const response = req.body.data;
  Users.create({
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email,
    password: response.password,
    phoneNumber: response.phoneNumber,
    address: response.address,
    role: 'authorized',
  }).catch(() => {
    res.status(404).end();
  });

  return null;
});

export default users;
