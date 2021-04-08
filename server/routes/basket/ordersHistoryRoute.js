import express from 'express';
import bodyParser from 'body-parser';
import BasketOrders from '../../models/BasketOrders.js';

const ordersHistory = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

ordersHistory.post('/orders-history', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  if (BasketOrders.findAll({ where: { clientId: req.body.data.id } })) {
    BasketOrders.findAll({ where: { clientId: req.body.data.id } })
      .then((existingOrders) => {
        res.send(existingOrders);
      }).catch(() => res.send(null));
  }
  return null;
});

export default ordersHistory;
