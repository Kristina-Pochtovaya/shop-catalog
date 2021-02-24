module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      firstName: {
        type: Sequelize.DataTypes.STRING
      },
      lastName: {
        type: Sequelize.DataTypes.STRING
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING
      },
      phoneNumber: {
        type: Sequelize.DataTypes.STRING
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
    return queryInterface.dropTable('Users');
  }
};
