const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const movies  = require('./routes/api/movies');

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//mongodb config
const db = require('./config').mongoURI;

//mongodb connection
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('mongodb connected...'))
  .catch(err => console.log(err));

//api routes
app.use('/api/movies', movies);

//port
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port ${port}`));

