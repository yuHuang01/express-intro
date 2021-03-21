const express = require('express');
const app = express();
const wiki = require('./wiki');



app.listen(8080, () => {
  console.log('Listening on port 8080')
});

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/wiki', wiki);
