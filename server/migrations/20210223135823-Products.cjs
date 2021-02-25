module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      categoryId: {
        foreignKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      category: {
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
      inStock: {
        type: Sequelize.DataTypes.BOOLEAN
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
    return queryInterface.dropTable('Products');
  }
};