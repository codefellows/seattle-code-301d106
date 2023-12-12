const Cat = require('./models/cat');

async function readCats(request, response) {

  const filterQuery = {};

  if (request.query.location) {
    filterQuery.location = request.query.location;
  }

  const cats = await Cat.find(filterQuery);

  response.send(cats);
}

async function createCat(request, response) {

  try {

    // if request.body has everything you need in the right shape
    // then you can pass it straight to Model
    // But often you'll need to massage the data a bit

    const newCat = await Cat.create(request.body);
    response.send(newCat);

  } catch (error) {

    console.error(error);
    response.status(500).send('Error creating cat');
  }

}

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

module.exports = {readCats, createCat, deleteCat};
