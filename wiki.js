const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.send('Wiki home');
});

route.get('/about', (req, res) => {
  res.send('Wiki about')
});

module.exports = route;
