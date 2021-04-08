module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'BasketOrders',
      'image',
      {
        type: Sequelize.TEXT('long'),
        after: 'description',
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('BasketOrders', 'image');
  },
};
