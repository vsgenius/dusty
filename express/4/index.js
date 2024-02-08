const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const port = 3000;

const data = {
  water: {
    freez_point: 0,
    boil_point: 100,
  },
  // mercury: {
  //     freez_point:-39,
  //     boil_point:357
  // },
  // alcohol: {
  //     freez_point:-115,
  //     boil_point:78
  // }
};

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const query = req.query;
  if (!data[query.stuff]) {
    res.json({ status: "stuff does't exist" });
    return;
  }
  const stuff = data[query.stuff];
  res.json({
    status:
      query.temp < stuff.freez_point
        ? 'ice'
        : query.temp > stuff.boil_point
        ? 'gas'
        : 'liquid',
  });
});

app.post('/', (req, res) => {
  const stuff = req.body.stuff;
  data[stuff.name] = {
    freez_point: stuff.freez_point,
    boil_point: stuff.boil_point,
  };
  res.json({ status: 'stuff add' });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
