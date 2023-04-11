console.log('Задание 4');
function check(str) {
  const Br = ['(', ')'];
  const figBr = ['{', '}'];
  const sqBr = ['[', ']'];
  let temp = [];
  for (let ch of str) {
    if (temp.length == 0) temp.push(ch);
    else if (
      (ch === '(' || ch === '[' || ch === '{') &&
      (temp.at(-1) === '{' || temp.at(-1) === '(' || temp.at(-1) === '[')
    )
      temp.push(ch);
    else if (ch === ')' && temp.at(-1) === Br.at(0)) temp.pop();
    else if (ch === '}' && temp.at(-1) === figBr.at(0)) temp.pop();
    else if (ch === ']' && temp.at(-1) === sqBr.at(0)) temp.pop();
    else temp.push(ch);
  }
  return temp.length == 0 ? 'корректно' : 'некорректно';
}
console.log(check(prompt('Введите текст')));
