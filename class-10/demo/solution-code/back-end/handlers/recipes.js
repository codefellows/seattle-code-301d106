const axios = require('axios');
const db = require('../db');

module.exports = async function getRecipes(request, response) {

  const ingredient = request.query.ingredient;
  const url = `https://api.edamam.com/api/recipes/v2?app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}&q=${ingredient}&type=public`;

  if (db[ingredient] === undefined) {

    console.log('fetching from api');

    const recipesResponse = await axios.get(url);

    try {
      const recipeArr = recipesResponse.data.hits.map(recipe => new Recipe(recipe.recipe));
      db[ingredient] = {content: recipeArr, expiration: Date.now() + (30 * 1000)};
      response.status(200).json(recipeArr);

    } catch (err) {
      console.error('error', err);
      response.status(500).send('error', err);
    }

  } else {

    console.log('fetching from db');

    // to notice is data is "stale" then Date.now() might help

    response.status(200).json(db[ingredient].content);
  }
};


class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}
