import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../models/Users.js';

const userInformation = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

userInformation.get('/user-information', urlencodedParser, () => {
});

userInformation.post('/user-information', urlencodedParser, (req, res) => {
/*   if (!req.body) {
    return res.sendStatus(500);
  } */
  /*   Users.findOne({ where: { email: req.body.data.email } })
    .then((user) => {
      if (user instanceof Users) {
        res.send(user);
        console.log(req.body);
      }
    });
  return null; */
  console.log(req.body.data);
});

export default userInformation;
