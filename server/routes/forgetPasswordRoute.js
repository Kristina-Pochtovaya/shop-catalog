import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../models/Users.js';

const forgetPassword = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

forgetPassword.get('/forget-password', urlencodedParser, () => {
});

forgetPassword.post('/forget-password', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Users.findOne({ where: { email: req.body.data.email } })) {
    Users.findOne({ where: { email: req.body.data.email } })
      .then((existingUser) => {
        if (existingUser instanceof Users) {
          res.send(true);
        } else res.send('incorrectUserOrPassword');
      });
  }
  return null;
});

export default forgetPassword;
