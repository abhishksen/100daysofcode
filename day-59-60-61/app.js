import express from 'express';
import mongoose from 'mongoose';

const app = express();

// using middleware
app.use(express.json());

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

    console.log(req.query.cat);

    res.json({
        success: true,
        message: "All users",
        users
    })
});

app.post('/users/new', async (req, res) => {

    const { name, email, password } = req.body;

    console.log(req.body)

    await User.create({
        name, email, password
    })

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Registered successfuly",
    })
});


app.get("/userid/special", async (req, res) => {
    res.json({
        success: true,
        message:"just joking",
    });
});

app.get("/userid/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    // console.log(user);
    res.json({
        success: true,
        user,
    });
});


app.listen(5000, "localhost", () => {
    console.log("Server is running on port 5000");
})