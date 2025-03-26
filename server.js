const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require("D:/22b81a05du/fsdlab/lab2l/ab9/server.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/sms", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});