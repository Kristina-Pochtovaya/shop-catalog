'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('CatalogItems', {​​​​​​​​
      id: {​​​​​​​​
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        }​​​​​​​​,
        type: {
          type: Sequelize.DataTypes.STRING,
          references: {
            model: 'Catalog',
            key: 'id'
          },
          allowNull: false
        },
      description: {​​​​​​​​
        type: Sequelize.STRING
        }​​​​​​​​,
      price: {​​​​​​​​
        type: Sequelize.DECIMAL(10, 2) 
        }​​​​​​​​,    
      price: {​​​​​​​​
          counter: Sequelize.INTEGER
        }​​​​​​​​,    
      price: {​​​​​​​​
          counter: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('CatalogItems');
  }
};
