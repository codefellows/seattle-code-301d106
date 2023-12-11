require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// TODO: get from environment
mongoose.connect('mongodb://127.0.0.1:27017/cats');

const PORT = process.env.PORT || 3005;
const Cat = require('./models/cat');

const app = express();

// middleware
app.use(cors());

app.get('/cats', async (request, response) => {

  const filterQuery = {};

  if (request.query.location) {
    filterQuery.location = request.query.location;
  }

  const cats = await Cat.find(filterQuery);

  response.json(cats);
});

app.listen(PORT, () => console.log('Listening on PORT:', PORT));
