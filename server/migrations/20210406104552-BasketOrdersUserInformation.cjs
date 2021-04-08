module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'BasketOrders',
      'clientEmail',
      {
        type: Sequelize.TEXT,
        after: 'sum',
      },
    );
    await queryInterface.addColumn(
      'BasketOrders',
      'clientId',
      {
        type: Sequelize.INTEGER,
        after: 'clientEmail',
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('BasketOrders', 'clientEmail');
    await queryInterface.removeColumn('BasketOrders', 'clientId');
  },
};
