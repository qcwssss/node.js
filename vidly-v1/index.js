const express = require('express');
const mongoose = require('mongoose');
const app = express();

const genres = require('./routes/genres');

app.use(express.json()); // body parser
app.use('/api/genres', genres);

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((error) => console.error('Could not connect to MongoDB...', error));

const port = 3000 || process.env.PORT;
app.listen(port, ()=> {
    console.log('Listening on port 3000...');
})