module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BasketOrders', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      type: {
        type: Sequelize.DataTypes.STRING
      },
      description: {
        type: Sequelize.DataTypes.STRING
      },
      imgAlt: {
        type: Sequelize.DataTypes.STRING,
      },
      imgTitle: {
        type: Sequelize.DataTypes.STRING
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL(10, 2) 
      },
      counter: {
        type: Sequelize.DataTypes.INTEGER
      },
      sum: {
        type: Sequelize.DataTypes.DECIMAL(10, 2) 
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BasketOrders');
  }
};