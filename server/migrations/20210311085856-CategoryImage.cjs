module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Category',
      'image',
      {
        type: Sequelize.TEXT('long'),
        after: 'imgTitle',
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Category', 'image');
  },
};
