// Первое задание
const countSecond = +prompt('Количество секунд?');
const wordPoints = ' баллов';
let result = '';
if (countSecond < 100 && countSecond > 0) {
  result = countSecond + wordPoints;
} else if (countSecond > 100 && countSecond < 120) {
  result = '100' + wordPoints;
} else {
  result = '0' + wordPoints;
}
alert(result);
// Второе задание
let pointsPlayer = 100;
let pointsComp = 100;
while (pointsPlayer >= 0 && pointsComp >= 0) {
  const bet = +prompt('Ставка?');
  const side = +prompt('Орел или решка?');
  const monet = Math.floor(Math.random() * 2) === 0 ? 'орел' : 'решка';
  if (monet !== side) {
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
let pred = 1;
let countRabbit = 2;
while (number > countRabbit) {
  let temp = pred;
  pred = countRabbit;
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
if (beginHorizont != endHorizont) {
  console.log(
    abc[beginHorizont] + beginVertical + '-' + abc[endHorizont] + beginVertical
  );
}
if (beginVertical != endVertical) {
  console.log(
    abc[endHorizont] + beginVertical + '-' + abc[endHorizont] + endVertical
  );
}
//пятое
const speedAhiles = prompt('Скорость Ахилесса (м/с)?');
const speedTurtle = prompt('Скорость черепахи (м/с)?');
let dist = prompt('Расстояние? (в метрах)');
const newDist = prompt('Надо приблизится на (также в метрах)?');
let step = 0;
while (dist > newDist) {
  dist = (dist / speedAhiles) * speedTurtle;
  console.log(dist);
  if (speedAhiles <= speedTurtle) {
    step = -1;
    break;
  }
  step++;
}
if (step === -1) alert('Никогда');
else alert(step + ' шага');
