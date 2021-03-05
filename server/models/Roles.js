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

export const Roles = sequelize.define('Roles', {
  role: {
    type: Sequelize.DataTypes.STRING,
  },
},
{
  tableName: 'Roles',
});

sequelize.sync();

/* Users.findAll().then((customers) => {
  console.log('customers are:-', customers);
});
 */
export default Roles;
