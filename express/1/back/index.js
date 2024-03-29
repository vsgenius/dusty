const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

let counter = 0;

app.use(cors());

app.get('/', (req, res) => {
  res.json(String(counter));
});

app.post('/plus', (req, res) => {
  res.json(String(++counter));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
