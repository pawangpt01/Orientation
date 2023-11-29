const express = require('express');
const UserController = require('../controllers/UserController');
const  { apiAuthMiddleware }  = require('../middlewares/auth.middleware');
const userRouter = express.Router();
const userController = new UserController()

// NEW USER CREATE ROUTE
userRouter.post('/register', userController.create);
//USER LOGIN
userRouter.post('/login', userController.userLogin);
// UAer LOGOUT
userRouter.post('/logout',apiAuthMiddleware, userController.userLogout)


module.exports = userRouter;