import express from 'express';
import { deleteUser, getAllUsers, getUserWithID, registerNewUser, specialUser, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/all', getAllUsers);

router.post('/new', registerNewUser);

router.get("/userid/special", specialUser);


// alternate way to do this by chaining all the routes together
// router.get("/userid/:id", getUserWithID);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);
router.route("/userid/:id").get(getUserWithID).put(updateUser).delete(deleteUser);

export default router;