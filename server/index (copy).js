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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static','index.html'))
}); 

app.get('/features', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static','features.html'))
});

/* app.use(express.static(path.resolve(__dirname, 'static'))); */
/* app.use(requestTime);
app.use(logger); */

app.get('/download', (req, res) => {
    console.log(req.requestTime);
    res.download(path.resolve(__dirname, 'static','index.html'))
});

app.post('/', function (req, res) {
    res.send('POST request to the homepage');

  });

/* router.get('/data', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'static','data.json'))
   console.log(router.get('content-type') )
  });
 */
  

router.post('/data', function (req, res) {
    console.log(req.body)
    res.send( `This is what you sent me: ${
        (req.body)
    }`,);
  });


app.use(router);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
});



