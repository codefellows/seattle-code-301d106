const Cat = require('./models/cat');

async function readCats(request, response) {
  const filterQuery = {};

  if (request.query.location) {
    filterQuery.location = request.query.location;
  }

  if (request.query.color) {
    filterQuery.color = request.query.color;
  }

  const cats = await Cat.find(filterQuery);

  response.send(cats);
}

// createCat
async function createCat(request, response) {
  try {
    const newCat = await Cat.create(request.body); // NOTE: works as is because the request body is the EXACT same shape as cat data
    response.send(newCat);
  } catch (error) {
    console.error(error);
    response.status(500).send('Error creating cat');
  }
}

// deleteCat
async function deleteCat(request, response) {
  const id = request.params.id;

  try {
    await Cat.findByIdAndDelete(id);
    response.status(204).send('success');
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete cat with id ${id}`);
  }
}

async function updateCat(request, response) {
  const id = request.params.id;

  try {
    await Cat.findByIdAndUpdate(id, request.body); // NOTE: works as is because the request body is the EXACT same shape as cat data
    response.status(200).send('success');
  } catch (error) {
    response.status(500).send(error.message);
  }
}

module.exports = { readCats, createCat, updateCat, deleteCat };
