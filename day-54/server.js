// using express
import express from 'express';
import path from 'path'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

mongoose.connect("mongodb://localhost:27017", {
    dbName: 'backend',
}).then(c => console.log("Connected to DB")).catch(e => console.log(e));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model("User", userSchema);

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
const isAuthenticated = (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        res.render("index");
        next();
    } else {
        res.render("login");
    }
}

app.get('/', isAuthenticated, (req, res) => {
    res.render("index");
});

app.post('/login', (req, res) => {
    res.cookie("token", "1234567890", {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
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
    res.render("success");
});

app.get('/add', isAuthenticated, (req, res) => {
    res.redirect("/");
});


app.post('/contact', async (req, res) => {
    const { name, email } = req.body;
    const user = { name, email }
    await User.create(user);
    res.redirect('/success');
})

app.get('/users', (req, res) => {
    res.json({
        User,
    })
})

app.listen(5500, () => {
    console.log('Server is listening on port 5500...');
});