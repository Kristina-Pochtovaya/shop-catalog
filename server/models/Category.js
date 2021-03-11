import { Sequelize } from 'sequelize';

const opts = {
  define: {
    freezeTableName: true,
  },
};
const sequelize = new Sequelize('catalogItemsDB', 'Kristina Pochtovaya', '28Kris2021', {
  dialect: 'mysql',
  host: 'localhost',
}, opts);

export const Category = sequelize.define('Category', {
  category: {
    type: Sequelize.DataTypes.STRING,
  },
  link: {
    type: Sequelize.DataTypes.STRING,
  },
  className: {
    type: Sequelize.DataTypes.STRING,
  },
  imgAlt: {
    type: Sequelize.DataTypes.STRING,
  },
  imgTitle: {
    type: Sequelize.DataTypes.STRING,
  },
  image: {
    type: Sequelize.DataTypes.TEXT('long'),
  },
},
{
  tableName: 'Category',
});

sequelize.sync();

export default Category;
