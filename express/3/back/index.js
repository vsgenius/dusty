const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const cors = require('cors');
const port = 3000

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const data = req.body.list;
    const i = Math.round(Math.random()*(data.length-1));
    res.send(JSON.stringify(data[i]));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})