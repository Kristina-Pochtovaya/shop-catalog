'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Catalog', {​​​​​​​​
      id: {​​​​​​​​
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        }​​​​​​​​,
      type: {​​​​​​​​
        type: Sequelize.STRING
        }​​​​​​​​,
      createdAt: {​​​​​​​​
        allowNull: false,
        type: Sequelize.DATE
        }​​​​​​​​,
      updatedAt: {​​​​​​​​
        allowNull: false,
        type: Sequelize.DATE
          },
        }​​​​​​​​)
          },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Catalog');
  }
};
