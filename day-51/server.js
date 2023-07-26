// // const http = require('http');

// import http from 'http';
// import fs from 'fs';

// import { randomNumber } from './app/modules/functions.js';

// const number = randomNumber();

// console.log(number);

// const about = fs.readFileSync('./app/pages/about.html');
// // console.log(about);

// const server = http.createServer((req, res) => {
//     if (req.url === '/') { res.end(`Random number is ${number}`) }
//     else if (req.url === '/about') { res.end(about) }
//     else if (req.url === '/contact') { res.end('contact page') }
//     else { res.end('page not found') }
// })

// server.listen(5000, () => {
//     console.log('Server is listening on port 5000...');
// });


// using express
import express from 'express';
import path from 'path'

const app = express();

// setting up static folder
const staticFile = express.static(path.join(path.resolve(), "public"));

app.use(staticFile);


// setting up view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Hello world');
    // res.sendStatus(200);
    // res.sendStatus(404);

    // res.status(200).send('Ok tested');

    // res.json({
    //     name: 'John',
    //     age: 30,
    //     city: 'New York',
    //     country: 'USA',
    //     skills: ['HTML', 'CSS', 'JS', 'React'],
    // })

    // const loc = path.resolve();
    // console.log(loc);
    // res.sendFile(path.join(loc, 'app', 'view', 'index.html'));

    res.render("index", {name:'Abhishek'});

});

app.listen(5500, () => {
    console.log('Server is listening on port 5500...');
});