// using express
import express from 'express';
import path from 'path'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

mongoose.connect("mongodb://localhost:27017", {
    dbName: 'backend',
}).then(c => console.log("Connected to DB")).catch(e => console.log(e));

const logedUserSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model("LogedUser", logedUserSchema);

const app = express();


// setting up static folder

// using middleware 
const staticFile = express.static(path.join(path.resolve(), "public"));
app.use(staticFile);

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// setting up view engine
app.set('view engine', 'ejs');

// middleware for checking authenticationS
const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {

        const decoded = jwt.verify(token, "this is my secret key");
        //    console.log(decoded);

        req.user = await User.findById(decoded._id);

        res.render("success");
        next();
    } else {
        res.render("login");
    }
}

app.get('/', isAuthenticated, (req, res) => {
    // console.log(req.user);
    res.render("success", { email: req.user.email });
});

app.post('/login', async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    const user = await User.create({ email, password });

    const token = jwt.sign({ _id: user._id }, "this is my secret key");
    // console.log(token);

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
    });
    res.redirect('/');
})

app.get('/logout', (req, res) => {
    res.cookie("token", null, {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.redirect('/');
})


app.get('/success', (req, res) => {
    res.render("success", { email: req.user.email });
});


app.listen(5500, () => {
    console.log('Server is listening on port 5500...');
});