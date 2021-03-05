const rolesList = [
  {
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    role: 'authorized',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    role: 'unauthorized',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Roles', rolesList, {}),
  down: (queryInterface) => queryInterface.bulkDelete('Roles', null, {}),
};
