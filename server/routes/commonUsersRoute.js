import express from 'express';
import addUnautherizedUserRoute from './user/addUnautherizedUserRoute.js';
import avatar from './user/avatarRoute.js';
import userRole from './user/userRoleRoute.js';
import userInformation from './user/usersInformationRoute.js';
import users from './user/usersRoute.js';

const commonUsers = express.Router();

commonUsers.all('/add-unautherizedUser', addUnautherizedUserRoute);

commonUsers.all('/avatar', avatar);

commonUsers.all('/user-role', userRole);

commonUsers.all('/user-information', userInformation);

commonUsers.all('/users', users);

export default commonUsers;
