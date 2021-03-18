import express from 'express';
import bodyParser from 'body-parser';
import { Users } from '../../models/Users.js';

const avatar = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

avatar.get('/avatar', urlencodedParser, (req, res) => {
  Users.findAll()
    .then((users) => res.send(users));
});

avatar.post('/avatar', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (Users.findOne({ where: { email: req.body.payload.data.email } })) {
    Users.findOne({ where: { email: req.body.payload.data.email } })
      .then((existingUser) => {
        if (existingUser instanceof Users) {
          Users.update({
            photo: req.body.payload.data.avatar,
          }, {
            where: { email: req.body.payload.data.email },
          });
          res.send(req.body.payload.data.avatar);
        }
      });
  }
  return res.send(false);
});

export default avatar;
