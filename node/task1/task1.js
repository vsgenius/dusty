const { AsciiTable3, AlignmentEnum } = require('ascii-table3');
const fs = require('fs');


const data = fs.readFileSync('sample1.csv', 'utf-8');
const result = data.split('\n');

let head = [];
const body = [];
for (const iterator of result) {
  if (iterator==='') continue;
  if (iterator.split(', ')[0]==='"Month"') {
    head = iterator.replaceAll('"','').split(',');
    continue;
  }
  body.push(iterator.replaceAll('"','').split(','));
}
var table = 
    new AsciiTable3()
    .setHeading(...head)
    .setAlign(3, AlignmentEnum.CENTER)
    .addRowMatrix(body);

console.log(table.toString());