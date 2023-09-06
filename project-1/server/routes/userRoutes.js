import express from 'express';
import { changePassword, getMyProfile, login, logout, register, updateProfile, updateProfilePicture } from '../controllers/userController.js';
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
// update password
router.route('/changepassword').put(isAuthenticated, changePassword);
// update profile
router.route('/updateprofile').put(isAuthenticated, updateProfile);
// update profile picture
router.route('/updateprofilepicture').put(isAuthenticated, updateProfilePicture);

// forgot password
// reset password

// add to playlist
// remove from playlist

export default router;