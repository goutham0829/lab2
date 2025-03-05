const express = require('express');
const app = express();
const data = require('./emp.json');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Ensure views directory is set

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send('This is root');
});

app.get('/home', (req, res) => {
    res.status(200).send('This is home page');
});

app.listen(3000, (req, err) => {
    if (err) {
        console.error('Error starting server', err);
    } else {
        console.log('Server connected at port http://localhost:3000');
    }
});

app.get('/emp', (req, res) => {
    res.render('emp', { message: "Employees can be accessed", data: data });
});