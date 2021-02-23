'use strict';
module.exports = {​​​​​​​​
  up: (queryInterface, Sequelize) => {​​​​​​​​
    return queryInterface.createTable('Users', {​​​​​​​​
      id: {​​​​​​​​
        allowNull: false,
autoIncrement: true,
primaryKey: true,
type: Sequelize.INTEGER
}​​​​​​​​,
userId: {​​​​​​​​
        type: Sequelize.UUID,
allowNull: false,
defaultValue: Sequelize.UUIDV4,
unique: true
}​​​​​​​​,
firstName: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
lastName: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
email: {​​​​​​​​
        type: Sequelize.STRING,
unique: true
}​​​​​​​​,
password: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
role: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
phoneNumber: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
workNumber: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
linkedInUrl: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
officeLocation: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
department: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
jobTitle: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
imageUrl: {​​​​​​​​
        type: Sequelize.STRING
}​​​​​​​​,
teamId: {​​​​​​​​
        foreignKey: true,
type: Sequelize.UUID
}​​​​​​​​,
clientId: {​​​​​​​​
        foreignKey: true,
type: Sequelize.UUID
}​​​​​​​​,
createdAt: {​​​​​​​​
        allowNull: false,
type: Sequelize.DATE
}​​​​​​​​,
updatedAt: {​​​​​​​​
        allowNull: false,
type: Sequelize.DATE
}​​​​​​​​
    }​​​​​​​​)
    .then(async () => {​​​​​​​​
      await queryInterface.addConstraint('Users', ['teamId'], {​​​​​​​​
        type: 'FOREIGN KEY',
name: `FK_user-team`,
references: {​​​​​​​​
          table: 'Teams',
field: 'teamId',
}​​​​​​​​,
onDelete: 'no action',
onUpdate: 'no action',
}​​​​​​​​);
}​​​​​​​​);
}​​​​​​​​,
down: (queryInterface, Sequelize) => {​​​​​​​​
    return queryInterface.dropTable('Users');
}​​​​​​​​
}​​​​​​​​;


