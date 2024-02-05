const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
const data = fs.readFileSync('./index.json', 'utf-8');
const result = JSON.parse(data.trim())
res.send(`<h1>${result.title}</h1><p>${result.content}</p>`);
});

app.get('/:file', (req, res) => {
  let data;
  try {
    data = fs.readFileSync(`${req.params.file}.json`, 'utf-8');
  } catch (error) {
    console.log(error);
    res.send(`<h1>404 Not Found</h1>`);
  }
  const result = JSON.parse(data.trim());
  res.send(`<h1>${result.title}</h1><p>${result.content}</p>`);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
