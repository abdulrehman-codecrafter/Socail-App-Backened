const express = require('express');
const { registerUser, loginUser, updateProfile, fetchUserProfile } = require('../controllers/userControllers');
const authVerify = require('../middlewares/auth');
const userRouter = express.Router();


userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile/:id', fetchUserProfile);
userRouter.put('/updateProfile',authVerify, updateProfile);

module.exports = userRouter;