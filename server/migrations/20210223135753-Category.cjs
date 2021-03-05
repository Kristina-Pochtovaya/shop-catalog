module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Category', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    category: {
      type: Sequelize.DataTypes.STRING,
    },
    link: {
      type: Sequelize.DataTypes.STRING,
    },
    className: {
      type: Sequelize.DataTypes.STRING,
    },
    imgAlt: {
      type: Sequelize.DataTypes.STRING,
    },
    imgTitle: {
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
  down: (queryInterface) => queryInterface.dropTable('Category'),
};
