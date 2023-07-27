// using express
import express from 'express';
import path from 'path'
import mongoose from 'mongoose';

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


// setting up view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
});

// app.get('/add', async (req, res) => {
//     await User.create({
//         name: "Abhishek2",
//         email: "abhishek2@gmail.com"
//     });
//     res.send("User added");
// });


app.get('/success', (req, res) => {
    res.render("success");
});


app.post('/contact', async (req, res) => {
    const { name, email } = req.body;
    const user = { name, email }
    await User.create(user);
    res.redirect('/success');
})

app.get('/users', (req, res) => {
    res.json({
        data,
    })
})

app.listen(5500, () => {
    console.log('Server is listening on port 5500...');
});