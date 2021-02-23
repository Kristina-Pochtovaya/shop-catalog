'use strict';
const {​​​​​​​ userIDs }​​​​​​​​​​​​​​ = require('../../config/keys');
const userList = [
  {​​​​​​​​​​​​​​   
    firstName: 'Sonja',   
lastName: 'Van Hummel',   
email: 'sonja@shootsta.com',  
password: '$2a$10$rjhseBqgq8f7wSAuEjM40uzhwoi1UiODhS8PCc1sO4C1vUjYNHlOq',   
imageUrl: '',   
userId: userIDs[0],   
officeLocation: 'AU',   
department: 'Sydney',   
jobTitle: 'Account Manager',  
initialSetup: true,   
createdAt: new Date(),  
updatedAt: new Date()   
  }​​​​​​​​​​​​​​,  
{​​​​​​​​​​​​​​   
    firstName: 'Harvey',  
lastName: 'Dixon',  
email: 'harvey@shootsta.com',   
password: '$2a$10$rjhseBqgq8f7wSAuEjM40uzhwoi1UiODhS8PCc1sO4C1vUjYNHlOq',   
imageUrl: '',   
userId: userIDs[1],   
officeLocation: 'AU',   
department: 'Sydney',   
jobTitle: 'Business Development Manager',   
initialSetup: true,   
createdAt: new Date(),  
updatedAt: new Date()   
  }​​​​​​​​​​​​​​,  
{​​​​​​​​​​​​​​   
    firstName: 'Tom',   
lastName: 'Summers',  
email: 'tom@shootsta.com',  
password: '$2a$10$rjhseBqgq8f7wSAuEjM40uzhwoi1UiODhS8PCc1sO4C1vUjYNHlOq',   
imageUrl: '',   
userId: userIDs[2],   
officeLocation: 'AU',   
department: 'Sydney',   
jobTitle: 'Editor',   
initialSetup: true,   
createdAt: new Date(),  
updatedAt: new Date()   
  }​​​​​​​​​​​​​​,  
{​​​​​​​​​​​​​​   
    firstName: 'Luke',  
lastName: 'Jovanovich',   
email: 'ljovanovich@shootsta.com',  
password: '$2a$10$rjhseBqgq8f7wSAuEjM40uzhwoi1UiODhS8PCc1sO4C1vUjYNHlOq',   
imageUrl: '',   
userId: userIDs[3],   
officeLocation: 'AU',   
department: 'Sydney',   
jobTitle: 'Senior Editor',  
initialSetup: true,   
createdAt: new Date(),  
updatedAt: new Date()   
  }​​​​​​​​​​​​​​,  
{​​​​​​​​​​​​​​
    firstName: 'Test',
lastName: 'User',
email: 'test@shootsta.com',
password: '$2a$10$Ow/hQxv7/e8bJoA9A3ZOUOWsIo/ibAl01n.DpfiEiLhJRKjPTTdeG',
imageUrl: '',
userId: userIDs[9],
officeLocation: 'AU',
department: 'Sydney',
jobTitle: 'Test User',
initialSetup: true,
createdAt: new Date(),
updatedAt: new Date()
  }​​​​​​​​​​​​​​
]
module.exports = {​​​​​​​​​​​​​​
  up: async (queryInterface) => {​​​​​​​​​​​​​​
    return queryInterface.bulkInsert('Users', userList, {​​​​​​​​​​​​​​ ignoreDuplicates: true }​​​​​​​​​​​​​​);
}​​​​​​​​​​​​​​,
down: async () => {​​​​​​​​​​​​​​}​​​​​​​​​​​​​​
}​​​​​​​​​​​​​​;



Edited