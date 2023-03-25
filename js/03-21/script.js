// Первое задание
const countSecond = +prompt('Количество секунд?');
let result = '';
if (countSecond < 100 && countSecond > 0) {
  result = countSecond;
} else if (countSecond > 100 && countSecond < 120) {
  result = '100';
} else {
  result = '0';
}
alert(result + ' баллов');
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
let move = 0;
if (firstOne != secondOne) {
  ++move;
  console.log(firstOne + firstTwo + '-' + secondOne + firstTwo);
}
if (firstTwo != secondTwo) {
  ++move;
  console.log(secondOne + firstTwo + '-' + secondOne + secondTwo);
}
console.log('Шагов ' + move);
//пятое
const speedAhiles = prompt('Скорость Ахилесса (м/с)?');
const speedTurtle = prompt('Скорость черепахи (м/с)?');
let dist = prompt('Расстояние? (в метрах)');
const newDist = prompt('Надо приблизится на (также в метрах)?');
let step = -1;
if (speedAhiles > speedTurtle) {
  step++;
  while (dist > newDist) {
    dist = (dist / speedAhiles) * speedTurtle;
    console.log(dist);
    step++;
  }
  alert(step + ' шага');
} else {
  alert('Никогда');
}
