console.log('Задание 3');
function isCityList(enterCity, listWords) {
  if (!enterCity || listWords.indexOf(enterCity) !== -1) return false;
  if (
    listWords.length === 0 ||
    (listWords.indexOf(enterCity) === -1 &&
      enterCity[0] === listWords.at(-1).at(-1))
  ) {
    listWords.push(enterCity);
    return true;
  }
  if (enterCity[0] !== listWords.at(-1).at(-1)) {
    alert(
      'Первая буква города ' +
        enterCity +
        ' не " ' +
        listWords.at(-1).at(-1) +
        '", повторите попытку.'
    );
    return true;
  }
  return false;
}

function game() {
  let listWords = [];
  while (true) {
    if (!isCityList(prompt('Введите город'), listWords)) {
      alert('проиграли');
      return;
    }
  }
}
game();
