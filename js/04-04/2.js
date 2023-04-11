console.log('Задание 2');
function isPolindrom(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}
if (isPolindrom(prompt('Введите слово'))) {
  console.log('Полиндром');
} else {
  console.log('Не полиндром');
}
