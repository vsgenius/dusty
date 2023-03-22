// Первое задание
const countSecond = +prompt('Количество секунд?');
if (countSecond < 100 && countSecond > 0) {
  alert(countSecond + ' баллов');
} else if (countSecond > 100 && countSecond < 120) {
  alert('100 баллов');
} else {
  alert('0 баллов');
}
// Второе задание
let pointsPlayer = 100;
let pointsComp = 100;
while (pointsPlayer > 0 && pointsComp > 0) {
  const bet = +prompt('Ставка?');
  const monet = Math.floor(Math.random() * 2) === 0 ? 'орел' : 'решка';
  console.log(monet);
  if (monet == 'орел') {
    pointsPlayer -= bet;
    pointsComp += bet;
    alert(
      monet +
        ' -  проигрыш, ' +
        'вы ' +
        pointsPlayer +
        ' компьютер ' +
        pointsComp
    );
  } else {
    pointsComp -= bet;
    pointsPlayer += bet;
    alert(
      monet +
        ' -  выигрыш, ' +
        'вы ' +
        pointsPlayer +
        ' компьютер ' +
        pointsComp
    );
  }
}
alert('Выиграл ' + (pointsPlayer > pointsComp ? 'человек' : 'компьютер'));

// Четвертое задание
let year = 0;
const number = +prompt('Число?');
let n1 = 1;
let n2 = 1;
let countRabbit = 2;
while (number > countRabbit) {
  let temp = n2;
  n1 = n2;
  n2 = countRabbit;
  countRabbit += temp;
  ++year;
}
alert('Через ' + year);

//третье

const firstOne = prompt('Начальная клетка горизонталь?');
const firstTwo = prompt('Начальная клетка вертикаль?');
const secondOne = prompt('Конечная клетка горизонталь?');
const secondTwo = prompt('Конечная клетка вертикаль?');
let beginHorizont, endHorizont, beginVertical, endVertical;
const abc = 'abcdefgh';
beginHorizont = abc.search(firstOne);
endHorizont = abc.search(secondOne);
beginVertical = firstTwo;
endVertical = secondTwo;
let pred = beginHorizont;
for (let i = beginHorizont + 1; i <= endHorizont; i++) {
  console.log(abc[pred] + beginVertical + '-' + abc[i] + beginVertical);
  pred = i;
}
pred = beginVertical;
for (let i = +beginVertical + 1; i <= endVertical; i++) {
  console.log(abc[endHorizont] + pred + '-' + abc[endHorizont] + i);
  pred = i;
}
