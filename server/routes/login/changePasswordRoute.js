import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../../models/Users.js';

const changePassword = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

changePassword.get('/change-password', urlencodedParser, () => {
});

changePassword.post('/change-password', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Users.findOne({ where: { email: req.body.data.email } })) {
    Users.findOne({ where: { email: req.body.data.email } })
      .then((existingUser) => {
        if (existingUser instanceof Users) {
          Users.update({
            password: req.body.data.password,
          }, {
            where: { email: req.body.data.email },
          });

          res.send(true);
        } else res.send('incorrectUserOrPassword');
      });
  }
  return null;
});

export default changePassword;
