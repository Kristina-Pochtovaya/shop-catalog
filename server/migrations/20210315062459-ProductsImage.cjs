module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Products',
      'image',
      {
        type: Sequelize.TEXT('long'),
        after: 'imgTitle',
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Products', 'image');
  },
};
