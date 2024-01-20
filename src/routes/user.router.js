const { getAll, create, getOne, remove, update, login, verifyCode, getLoggedUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/users')
    .get(getAll)
    .post(create);

userRouter.route('/users/login')
    .post(login) 
    
userRouter.route('/users/me')
    .get(getLoggedUser)    

userRouter.route('/users/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

userRouter.route('/users/verify/:code')
    .get(verifyCode)    

module.exports = userRouter;