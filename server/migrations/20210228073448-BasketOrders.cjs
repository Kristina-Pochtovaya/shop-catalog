module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BasketOrders', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
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
    createdAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('BasketOrders'),
};
