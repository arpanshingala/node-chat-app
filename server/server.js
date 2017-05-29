const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');

const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});