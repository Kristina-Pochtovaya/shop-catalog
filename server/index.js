import express from 'express';
import cors from 'cors';
import Sequelize from 'sequelize';
import commonCategory from './routes/commonCategoryRoute.js';
import commonProducts from './routes/commonProductsRoute.js';
import commonUsers from './routes/commonUsersRoute.js';
import commonLogin from './routes/commonLoginRoute.js';
import commonBasket from './routes/commonBasketRoute.js';
import features from './routes/featuresRoute.js';
import image from './routes/imageRoute.js';
import download from './routes/downloadRoute.js';
import imageTest from './routes/imageTestRoute.js';

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

app.use(express.static('uploads'));

app.all('/', imageTest);

app.use(commonBasket);

app.use(commonCategory);

app.use(commonProducts);

app.use(commonUsers);

app.use(commonLogin);

app.get('/features', features);

app.get('/download', download);

app.get('/image', image);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});

export default sequelize;
