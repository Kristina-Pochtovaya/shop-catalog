import express from 'express';
import path from 'path';
import { requestTime, logger } from './middleware.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const router = express.Router()
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 8080;
const app = express();

app.use(cors()) 
app.use(express.json());
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static','index.html'))
}); 

app.get('/features', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static','features.html'))
});

app.get('/download', (req, res) => {
    console.log(req.requestTime);
    res.download(path.resolve(__dirname, 'static','index.html'))
});

app.post('/', function (req, res) {
    res.send('POST request to the homepage');

  });
 
app.get("/data", urlencodedParser, function (req, res) {
    res.sendFile(path.resolve(__dirname, 'static','data.html'));
});

  app.post('/data', urlencodedParser,function (req, res) {
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

app.use(router);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
});



