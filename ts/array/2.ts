console.log('Задание 2');
function isPolindrom(word: string | null): string {
  if (!word) return 'Палиндром';
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return 'Не палиндром';
    }
  }
  return 'Палиндром';
}
console.log(isPolindrom(prompt('Введите слово')));
