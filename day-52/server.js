// using express
import express from 'express';
import path from 'path'

const app = express();

const data = [];

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

app.get('/success', (req, res) => {
    res.render("success");
});


app.post('/contact', (req, res) => {
    data.push(req.body);
    // res.render("success", { data: data });
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