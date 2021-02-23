import express from 'express';
import path from 'path';
import { requestTime, logger } from './middleware.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';

const router = express.Router()
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 8080;
const app = express();

app.use(cors()) 
app.use(express.json());
const urlencodedParser = bodyParser.urlencoded({extended: false});

const sequelize = new Sequelize("catalogItemsDB", "Kristina Pochtovaya", "28Kris2021", {
  dialect: "mysql",
  host: "localhost"
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static','index.html'))
}); 

app.post('/', function (req, res) {
  res.send('POST request to the homepage');

});

app.get('/features', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static','features.html'))
});

app.get('/download', (req, res) => {
    console.log(req.requestTime);
    res.download(path.resolve(__dirname, 'static','index.html'))
});
 
app.get("/basket", urlencodedParser, function (req, res) {
    res.sendFile(path.resolve(__dirname, 'static','basket.html'));
});

  app.post('/basket', urlencodedParser,function (req, res) {
    if(!req.body) return res.sendStatus(500);
    console.log(req.body)
    res.send(`
    id: ${req.body.id}
    description:${req.body.description}
    price:${req.body.price}
    counter:${req.body.counter}
    `
    );
  });

  app.get("/image", urlencodedParser, function (req, res) {
    res.sendFile(path.resolve(__dirname, 'static','garden1.jpg'));
});

app.use(router);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
});



