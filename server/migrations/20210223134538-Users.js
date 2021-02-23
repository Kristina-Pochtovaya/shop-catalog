'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {​​​​​​​​
      id: {​​​​​​​​
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        }​​​​​​​​,
      userId: {​​​​​​​​
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        unique: true
        }​​​​​​​​,
      firstName: {​​​​​​​​
        type: Sequelize.STRING
        }​​​​​​​​,
      lastName: {​​​​​​​​
        type: Sequelize.STRING
        }​​​​​​​​,
      email: {​​​​​​​​
        type: Sequelize.STRING,
        unique: true
        }​​​​​​​​,
      password: {​​​​​​​​
        type: Sequelize.STRING
        }​​​​​​​​,
      phoneNumber: {​​​​​​​​
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
    return queryInterface.dropTable('Users');
  }
};
