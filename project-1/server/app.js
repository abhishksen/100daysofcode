import express from 'express';
import { config } from 'dotenv';
import ErrorMiddlerware from './middlewares/Error.js';
import cookieParser from 'cookie-parser';

config({
    path: './config/config.env',
});
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// importing and using routes
import course from './routes/courseRoutes.js';
import user from './routes/userRoutes.js';
app.use('/api/v1', course);
app.use('/api/v1', user);



app.use(ErrorMiddlerware);
export default app;