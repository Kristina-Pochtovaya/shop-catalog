import express from 'express';
import changePassword from './login/changePasswordRoute.js';
import forgetPassword from './login/forgetPasswordRoute.js';
import login from './login/loginRoute.js';

const commonLogin = express.Router();

commonLogin.post('/change-password', changePassword);

commonLogin.post('/forget-password', forgetPassword);

commonLogin.post('/login', login);

export default commonLogin;
