async function dinnerParty() {
  try {

    const burger = await orderBurger(true);
    console.log('recieved', burger);
    beginMeal();
  } catch (error) {
    console.error(error);
  }
}
dinnerParty();


orderBurger(true)
  .then(burger => console.log('Time to eat', burger))
  .catch(error => console.error(error));


// requires .mjs extension
// const anotherBurger = await orderBurger();

function beginMeal() {
  console.log('Lets eat');
}

function orderBurger(fail = false) {

  const promise = new Promise((resolve, reject) => {
    if (fail) {
      reject('No burgers today!');
    }

    setTimeout(() => {
      resolve('One yummy burger');
    }, 1000);
  });
  return promise;
}
