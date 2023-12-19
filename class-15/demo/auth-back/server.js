require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const jwtCheck = auth({
  audience: process.env.AUTH_AUDIENCE,
  issuerBaseURL: process.env.AUTH_ISSUER_BASE_URL,
  tokenSigningAlg: process.env.AUTH_TOKEN_SIGNING_ALG,
});

const jwtUser = async (req, res, next) => {
  const response = await axios.get(req.auth.payload.aud[1], { headers: { 'Authorization': req.headers.authorization } });
  req.user = response.data;
  next();
};

// enforce on all endpoints
app.use(jwtCheck);
app.use(jwtUser);


const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  console.log('Hello', req.user.name);
  res.send('pong');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
