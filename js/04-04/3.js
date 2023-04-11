console.log('Задание 3');
function isCityList(city, listWord) {
  if (!city) return false;
  if (listWord.length === 0) {
    listWord.push(city);
    return true;
  }
  if (listWord.indexOf(city) == -1 && city[0] === listWord.at(-1).at(-1)) {
    listWord.push(city);
    return true;
  }
  return false;
}

function game() {
  let listWord = [];
  while (true) {
    if (!isCityList(prompt('Введите город'), listWord)) {
      alert('проиграли');
      return;
    }
  }
}
game();
