import express from 'express';
import userRouter from './routes/user.js';
import { config } from "dotenv"

export const app = express();

config({
    path: "./data/config.env",
});

// using middleware
app.use(express.json());

// using router for user apis
app.use("/users", userRouter);

app.get('/', (req, res) => {
    res.send("Hello World");
});
