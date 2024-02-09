const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const port = 3000;

let value = 0;

app.use(cors());
app.use(bodyParser.json());

app.get('/value', (req, res) => {
  res.json(value);
});

app.post('/:action', (req, res) => {
  const action = req.params.action;
  const number = +req.body.number;
  if (action === 'plus') {
    value = number + value;
    res.json(value);
  } else if (action === 'minus') {
    value = value - number;
    res.json(value);
  } else if (action === 'multiply') {
    value = number * value;
    res.json(value);
  } else if (action === 'divide') {
    value = value/number ;
    res.json(value);
  } else {
    res.json({status:'no action'});
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
