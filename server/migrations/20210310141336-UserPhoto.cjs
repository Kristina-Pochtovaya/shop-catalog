module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users',
      'photo',
      {
        type: Sequelize.TEXT('long'),
        after: 'address',
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Users', 'photo');
  },
};
