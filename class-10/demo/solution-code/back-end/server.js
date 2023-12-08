require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getRecipes = require('./handlers/recipes');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/recipes', getRecipes);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
