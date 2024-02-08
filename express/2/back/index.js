const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

let value = 0;

app.use(cors());

app.get('/value', (req, res) => {
  res.json(String(value));
});

app.get('/plus/:number', (req, res) => {
  console.log(req.params.number);
  value = +req.params.number + value;
  res.json(String(value));
});
app.get('/minus/:number', (req, res) => {
  value = value - +req.params.number;
  res.json(String(value));
});
app.get('/multiply/:number', (req, res) => {
  value = value * +req.params.number;
  res.json(String(value));
});
app.get('/divide/:number', (req, res) => {
  value = value / +req.params.number;
  res.json(String(value));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
