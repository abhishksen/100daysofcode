import express from 'express';
import { createCourse, getAllCourses } from '../controllers/courseController.js';

const router = express.Router();

// get all courses
router.route('/courses').get(getAllCourses);

// create new course only admin
router.route('/createcourse').post(createCourse);

// add lecture to course , delete course , get course details

// delete lecture from course only admin


export default router;