import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../models/Users.js';

const userInformation = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

userInformation.get('/user-information', urlencodedParser, () => {
});

userInformation.post('/user-information', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  Users.findOne({ where: { email: req.body.data.email } })
    .then((user) => {
      if (user instanceof Users) {
        const firstNameNew = (user.firstName === req.body.data.firstName)
          ? user.firstName : req.body.firstName;
        Users.update({
          firstName: req.body.data.firstName,
          lastName: req.body.data.lastName,
          /*          email: user.email === req.body.data.email ? user.email : req.body.email, */
          password: req.body.data.password,
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
        }, {
          where: { email: req.body.data.email },
        });

        console.log(user.firstName, req.body.data.firstName,
          user.firstName === req.body.data.firstName);
      }
    });
  return null;
});

export default userInformation;
