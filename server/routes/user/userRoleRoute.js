import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../../models/Users.js';

const userRole = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

userRole.get('/user-role', urlencodedParser, () => {
});

userRole.post('/user-role', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Users.findOne({ where: { email: req.body.data.email } })) {
    Users.findOne({ where: { email: req.body.data.email } })
      .then((existingUser) => {
        if (existingUser instanceof Users) {
          res.send(existingUser.role);
        }
      });
  }
  return null;
});

export default userRole;
