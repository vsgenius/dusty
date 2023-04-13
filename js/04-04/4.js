console.log('Задание 4');
function check(str) {
  let iter = [];
  for (let ch of str) {
    if (iter.length == 0) {
      iter.push(ch);
    } else {
      switch (ch) {
        case '{':
          iter.push(ch);
          break;
        case '[':
          iter.push(ch);
          break;
        case '(':
          iter.push(ch);
          break;
        case ']':
          if (iter.at(-1) == '[') {
            iter.pop();
            break;
          } else {
            return 'некорректно';
          }
        case ')':
          if (iter.at(-1) == '(') {
            iter.pop();
            break;
          } else {
            return 'некорректно';
          }
        case '}':
          if (iter.at(-1) == '{') {
            iter.pop();
            break;
          } else {
            return 'некорректно';
          }
      }
    }
  }
  return iter.length ? 'некорректно' : 'корректно';
}
console.log(check(prompt('Введите текст')));
