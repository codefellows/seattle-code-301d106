require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();
app.use(cors());
app.use(express.json());

const jwtCheck = auth({
  audience: process.env.AUTH_AUDIENCE,
  issuerBaseURL: process.env.AUTH_ISSUER_BASE_URL,
  tokenSigningAlg: process.env.AUTH_TOKEN_SIGNING_ALG,
});

// enforce on all endpoints
app.use(jwtCheck);


const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
