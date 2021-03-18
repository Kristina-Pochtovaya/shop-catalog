import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../../models/Users.js';

const login = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

login.get('/login', urlencodedParser, () => {
});

login.post('/login', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Users.findOne({ where: { email: req.body.data.email, password: req.body.data.password } })) {
    Users.findOne({ where: { email: req.body.data.email, password: req.body.data.password } })
      .then((existingUser) => {
        if (existingUser instanceof Users) {
          res.send(existingUser);
        } else res.send('incorrectUserOrPassword');
      });
  }
  return null;
});

export default login;
