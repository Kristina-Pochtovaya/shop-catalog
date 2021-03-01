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

const BasketOrders = sequelize.define('Products', {
  productId: {
    type: Sequelize.DataTypes.INTEGER,
  },
  category: {
    type: Sequelize.DataTypes.STRING,
  },
  description: {
    type: Sequelize.DataTypes.STRING,
  },
  counter: {
    type: Sequelize.DataTypes.INTEGER,
  },
  sum: {
    type: Sequelize.DataTypes.DECIMAL(10, 2),
  },
  clientName: {
    type: Sequelize.DataTypes.STRING,
  },
  clientPhone: {
    type: Sequelize.DataTypes.STRING,
  },
  clientAddress: {
    type: Sequelize.DataTypes.STRING,
  },
  clientNotes: {
    type: Sequelize.DataTypes.STRING,
  },
},
{
  tableName: 'BasketOrders',
});

sequelize.sync();

export default BasketOrders;
