import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../../models/Users.js';

const userInformation = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

userInformation.get('/user-information', urlencodedParser, () => {
});

userInformation.post('/user-information', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  Users.findOne({ where: { id: req.body.data.id } })
    .then((user) => {
      if (user instanceof Users) {
        Users.update({
          firstName: req.body.data.firstName,
          lastName: req.body.data.lastName,
          password: req.body.data.passwordNew,
          email: req.body.data.email,
          phoneNumber: req.body.data.phoneNumber,
          address: req.body.data.address,
        }, {
          where: { id: req.body.data.id },
        });
        res.send(req.body.data);
      } else res.send(null);
    });
  return null;
});

export default userInformation;
