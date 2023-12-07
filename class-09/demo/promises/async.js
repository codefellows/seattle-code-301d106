/*
Bunch of functions demonstrating async-await
*/

async function main() {
  console.log('prior line');
  await awaitSuccess();
  console.log('following line');
}
main();

async function awaitSuccess() {
  const result = await later(1000, 'awaitSuccess complete');
  console.log(result);
}

async function awaitFailure() {
  try {
    const result = await later(1000, 'awaitFailure complete', false);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

function promiseSuccess() {
  later(1000, 'a')
    .then(result => console.log(result,'complete'));
}

function promiseFailure() {
  later(1000, 'a', false)
    .then(console.log)
    .catch(error => console.error(error));
}

async function awaitForgotten() {
  const result = later(1000, 'awaitForgotten complete');
  console.log(result);
}

// a lot of folks find async/await to be easier to read and reason about


async function awaitMultiple() {
  const start = Date.now();

  await later(1000, 'a');
  await later(1000, 'b');
  await later(1000, 'c');
  await later(1000, 'd');
  await later(1000, 'e');
  await later(1000, 'f');
  await later(1000, 'g');
  await later(1000, 'h');

  const end = Date.now();
  const elapsed = end - start;

  console.log('All complete', elapsed, 'milliseconds');
}

async function awaitAll() {

  const start = Date.now();

  await Promise.all([
    later(1000, 'a'),
    later(1000, 'b'),
    later(1000, 'c'),
    later(1000, 'd'),
    later(1000, 'e'),
    later(1000, 'f'),
    later(1000, 'g'),
    later(1000, 'h'),
  ]);

  const end = Date.now();
  const elapsed = end - start;

  console.log('All complete', elapsed, 'milliseconds');
}

async function awaitAllFailure() {

  try {
    const results = await Promise.all([
      later(1000, () => console.log('a'), false),
      later(1000, () => console.log('b'), 'b'),
      later(1000, () => console.log('c'), 'c'),
    ]);

    console.log('All complete', results);
  } catch (error) {
    console.error(error);
  }
}

async function awaitAllSettled() {

  try {
    const results = await Promise.allSettled([
      later(1000, () => console.log('a'), false),
      later(1000, () => console.log('b'), 'b'),
      later(1000, () => console.log('c'), 'c'),
    ]);

    console.log('All complete', results);
  } catch (error) {
    console.error(error);
  }
}

async function awaitInternally() {
  console.log('awaitInternally start');
  await later(1000, () => console.log('a'));
  await later(1000, () => console.log('b'));
  await later(1000, () => console.log('c'));
  console.log('awaitInternally end');
}

// helper function that waits a given amount of milliseconds
// then asynchronously resolves to payload
// or rejects immediately
function later(ms, payload, succeed = true) {
  return new Promise((resolve, reject) => {
    if (succeed) {
      setTimeout(() => {
        if(typeof payload === 'function') {
          resolve(payload());
        } else {
          resolve(payload);
        }
      }, ms);
    } else {
      reject('So sorry :(');
    }
  });
}
