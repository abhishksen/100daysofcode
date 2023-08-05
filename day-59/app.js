import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb://localhost:27017", { dbName: "backendApi", })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model("User", schema);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users/all', async (req, res) => {
    const users = await User.find({});

    res.json({
        success: true,
        message: "All users",
        users
    })
});

app.post('/users/new', async (req, res) => {
    await User.create({
        name: "John Doe",
        email: "john@gmail.com",
        password: "123456"
    })

    res.json({
        success: true,
        message: "Registered successfuly",
    })
});





app.listen(5000, "localhost", () => {
    console.log("Server is running on port 5000");
})