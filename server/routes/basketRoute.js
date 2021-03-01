import express from 'express';
import bodyParser from 'body-parser';
import BasketOrders from '../models/BasketOrders.js';

const basket = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

basket.get('/basket', urlencodedParser, () => {
});

basket.post('/basket', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  res.send(JSON.stringify(req.body));
  const response = req.body.data;
  let i = 1;
  for (1; i <= response.length; i += 1) {
    BasketOrders.create({
      productId: response[i - 1].id,
      category: response[i - 1].category,
      description: response[i - 1].description,
      counter: response[i - 1].counter,
      sum: response[i - 1].sum,
      clientName: response[i - 1].clientName,
      clientPhone: response[i - 1].clientPhone,
      clientAddress: response[i - 1].clientAddress,
      clientNotes: response[i - 1].clientMessage,
    }).catch(() => {
      res.status(404).end();
    });
  }
  return null;
});

export default basket;
