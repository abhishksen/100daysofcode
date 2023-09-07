import express from 'express';
import { changePassword, forgetPassword, getMyProfile, login, logout, register, resetPassword, updateProfile, updateProfilePicture } from '../controllers/userController.js';
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
router.route('/forgetpassword').post(forgetPassword);
// reset password
router.route('/resetpassword/:token').put(resetPassword);

// add to playlist
// remove from playlist

export default router;