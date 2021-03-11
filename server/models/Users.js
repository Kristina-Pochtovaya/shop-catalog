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

export const Users = sequelize.define('Users', {
  firstName: {
    type: Sequelize.DataTypes.STRING,
  },
  lastName: {
    type: Sequelize.DataTypes.STRING,
  },
  email: {
    type: Sequelize.DataTypes.STRING,
  },
  password: {
    type: Sequelize.DataTypes.STRING,
  },
  phoneNumber: {
    type: Sequelize.DataTypes.STRING,
  },
  address: {
    type: Sequelize.DataTypes.STRING,
  },
  role: {
    type: Sequelize.DataTypes.STRING,
  },
  photo: {
    type: Sequelize.DataTypes.TEXT('long'),
  },
},
{
  tableName: 'Users',
});

sequelize.sync();

export default Users;
