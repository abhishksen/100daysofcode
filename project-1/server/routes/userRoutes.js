import express from 'express';
import { getMyProfile, login, logout, register } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

// register user
router.route('/register').post(register);
// login user 
router.route('/login').post(login);
// logout user
router.route('/logout').get(logout);
// get my profile
router.route('/me').get(isAuthenticated, getMyProfile);

// login
// logout
// get my profile
// update password
// update profile
// update profile picture
// forgot password
// reset password
// add to playlist
// remove from playlist

export default router;