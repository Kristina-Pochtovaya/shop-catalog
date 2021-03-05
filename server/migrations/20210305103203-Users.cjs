module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users',
      'role',
      {
        type: Sequelize.STRING,
        after: 'phoneNumber',
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Users', 'role');
  },
};
