import express from 'express';
import path from 'path';
import { requestTime, logger } from './middleware.js';

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 8080;
const app = express();

/* app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static','index.html'))
});

app.get('/features', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static','features.html'))
}); */

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(requestTime);
app.use(logger);

app.get('/download', (req, res) => {
    console.log(req.requestTime);
    res.download(path.resolve(__dirname, 'static','index.html'))
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
});



