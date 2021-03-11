const adminUser = [
  {
    firstName: 'Kristina',
    lastName: 'Pochtovaya',
    email: 'pochtovaya.kr@gmail.com',
    password: '7',
    phoneNumber: '+375292094942',
    address: 'Minsk, ul.Matusevicha, 61/67',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', adminUser, {}),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
