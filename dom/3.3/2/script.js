const blocks = document.querySelectorAll('.block');
const text = document.querySelector('#text');
let flag = false;
let i = 0;
let countChar = 0;
function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);

  let newString = firstPart + replaceChar + lastPart;
  return newString;
}
let lastTarget = undefined;
var lastClick = 0;
blocks.forEach((block) => {
  block.addEventListener('click', (e) => {
    e.preventDefault;
    var d = new Date();
    var t = d.getTime();
    if (
      (lastTarget !== undefined && t - lastClick > 1000) ||
      (lastTarget !== undefined && lastTarget !== e.target.parentElement)
    ) {
      ++countChar;
    }
    const value = text.value;
    const lishChar =
      e.target.parentElement.querySelector('.chars').textContent +
      e.target.parentElement.querySelector('.digit').textContent;
    console.log(lishChar[i]);
    text.value = replaceChar(value, lishChar[i], countChar);
    lastClick = t;
    ++i;
    lastTarget = e.target.parentElement;
    if (lishChar.length == i) i = 0;
  });
});
