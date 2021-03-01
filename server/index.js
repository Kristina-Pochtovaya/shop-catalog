import express from 'express';
import cors from 'cors';
import Sequelize from 'sequelize';
import category from './routes/categoryRoute.js';
import product from './routes/productsRoute.js';
import features from './routes/featuresRoute.js';
import root from './routes/rootRoute.js';
import basket from './routes/basketRoute.js';
import image from './routes/imageRoute.js';
import download from './routes/downloadRoute.js';

const router = express.Router();
const PORT = process.env.PORT ?? 8080;
const app = express();

app.use(cors());
app.use(express.json());

export const sequelize = new Sequelize('catalogItemsDB', 'Kristina Pochtovaya', '28Kris2021', {
  dialect: 'mysql',
  host: 'localhost',
});

async function Authicate() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

Authicate();

app.all('/', root);

app.all('/basket', basket);

app.get('/category', category);

app.get('/products', product);

app.get('/features', features);

app.get('/download', download);

app.get('/image', image);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});

export default sequelize;
