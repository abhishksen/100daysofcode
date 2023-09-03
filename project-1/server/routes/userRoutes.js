import express from 'express';
import { register } from '../controllers/userController.js';

const router = express.Router();

// register user
router.route('/register').post(register);

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