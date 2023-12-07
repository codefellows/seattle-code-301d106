# Warm-Up Exercise

Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

Read through this code as if you are the interpreter. Find each of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```js
// imports
const axios = import('axios');
const cors = import('cors');
const express = import('express');

// constants
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(cors);

// routes
app.get(getBooks, '/books');

// handlers
async function getBooks(result, response) {
  const response = axios.get(url);
  response.status(400).send(response.data);
}
```
