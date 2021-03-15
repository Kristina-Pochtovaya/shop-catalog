import express from 'express';
import cors from 'cors';
import Sequelize from 'sequelize';
import category from './routes/categoryRoute.js';
import product from './routes/productsRoute.js';
import features from './routes/featuresRoute.js';
import root from './routes/rootRoute.js';
import basket from './routes/basketRoute.js';
import users from './routes/usersRoute.js';
/* import { Users } from './models/Users.js'; */
import addUnautherizedUserRoute from './routes/addUnautherizedUserRoute.js';
import userInformation from './routes/usersInformationRoute.js';
import forgetPassword from './routes/forgetPasswordRoute.js';
import changePassword from './routes/changePasswordRoute.js';
import login from './routes/loginRoute.js';
import userRole from './routes/userRoleRoute.js';
import avatar from './routes/avatarRoute.js';
import image from './routes/imageRoute.js';
import editCategoryName from './routes/editCategoryNameRoute.js';
import editProductsName from './routes/editProductsNameRoute.js';
import editProductsPrice from './routes/editProductsPriceRoute.js';
import editProductsInStock from './routes/editProductsInStockRoute.js';
import editProductsCategory from './routes/editProductsCategoryRoute.js';
import addCategory from './routes/addCategoryRoute.js';
import deleteCategory from './routes/deleteCategoryRoute.js';
import categoryImage from './routes/editCategoryImageRoute.js';
import productsImage from './routes/editProductsImageRoute.js';
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

app.all('/users', users);

app.all('/avatar', avatar);

app.all('/user-role', userRole);

app.all('/add-unautherizedUser', addUnautherizedUserRoute);

app.all('/user-information', userInformation);

app.all('/login', login);

app.all('/change-password', changePassword);

app.all('/forget-password', forgetPassword);

app.get('/category', category);

app.all('/category-name', editCategoryName);

app.all('/products-name', editProductsName);

app.all('/products-instock', editProductsInStock);

app.all('/products-price', editProductsPrice);

app.all('/products-category', editProductsCategory);

app.all('/add-category', addCategory);

app.all('/delete-category', deleteCategory);

app.all('/category-image', categoryImage);

app.all('/products-image', productsImage);

app.get('/products', product);

app.get('/features', features);

app.get('/download', download);

app.get('/image', image);

/* Category.destroy({
  truncate: true,
}); */

app.use(router);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});

export default sequelize;
