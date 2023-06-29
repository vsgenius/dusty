const blockDigits = document.querySelector('.block-digits');
const text = document.querySelector('#text');

function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);

  let newString = firstPart + replaceChar + lastPart;
  return newString;
}
let i = 0;
let countChar = 0;
let lastTarget = undefined;
var lastClick = 0;

blockDigits.addEventListener('click', (event) => {
  const target = event.target;
  var date = new Date();
  var time = date.getTime();
  if (
    (lastTarget !== undefined && time - lastClick > 1000) ||
    (lastTarget !== undefined && lastTarget !== target.parentElement)
  ) {
    ++countChar;
    i = 0;
  }
  const value = text.value;
  const lishChar = target.parentElement.dataset.text;
  text.value = replaceChar(value, lishChar[i], countChar);
  lastClick = time;
  ++i;
  lastTarget = target.parentElement;
  if (lishChar.length == i) i = 0;
});
