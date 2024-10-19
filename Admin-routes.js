 const express = require('express');
const { adminsignUp, adminlogIn, adminforgotpassword } = require('../controller/Admin-controller');

 
const AdminRouter = express.Router();

 AdminRouter.post('/signup',adminsignUp);
 AdminRouter.post('/login',adminlogIn);
 AdminRouter.put('/forgotpassword',adminforgotpassword );
module.exports = AdminRouter;
 