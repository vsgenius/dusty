// Первое задание
function firstTask(): void {
  const countSecond: string | null = prompt('Количество секунд?');
  let result: string = '';
  if (countSecond === null) return;
  if (+countSecond < 100 && +countSecond > 0) {
    result = countSecond;
  } else if (+countSecond > 100 && +countSecond < 120) {
    result = '100';
  } else {
    result = '0';
  }
  alert(result + ' баллов');
}

// Второе задание
function secondTask(): void {
  let pointsPlayer: number = 100;
  let pointsComp: number = 100;
  while (pointsPlayer >= 0 && pointsComp >= 0) {
    const bet: string | null = prompt('Ставка?');
    if (bet === null) return;
    const side: string | null = prompt('Орел или решка?');
    if (side === null) return;
    const monet = Math.floor(Math.random() * 2) === 0 ? 'орел' : 'решка';
    if (monet !== side) {
      pointsPlayer -= +bet;
      pointsComp += +bet;
      alert(
        monet +
          ' -  проигрыш, ' +
          'вы ' +
          pointsPlayer +
          ' компьютер ' +
          pointsComp
      );
    } else {
      pointsComp -= +bet;
      pointsPlayer += +bet;
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
}

// Четвертое задание
function forthTask(): void {
  let year: number = 0;
  const number: string | null = prompt('Число?');
  if (number === null) return;
  let pred: number = 1;
  let countRabbit: number = 2;
  while (+number > countRabbit) {
    let temp = pred;
    pred = countRabbit;
    countRabbit += temp;
    ++year;
  }
  alert('Через ' + year);
}
//третье
function thirdTask(): void {
  const firstOne: string | null = prompt('Начальная клетка горизонталь?');
  const firstTwo: string | null = prompt('Начальная клетка вертикаль?');
  const secondOne: string | null = prompt('Конечная клетка горизонталь?');
  const secondTwo: string | null = prompt('Конечная клетка вертикаль?');
  if (
    firstOne === null ||
    firstTwo === null ||
    secondOne === null ||
    secondTwo === null
  )
    return;
  let move: number = 0;
  if (firstOne != secondOne) {
    ++move;
    console.log(firstOne + firstTwo + '-' + secondOne + firstTwo);
  }
  if (firstTwo != secondTwo) {
    ++move;
    console.log(secondOne + firstTwo + '-' + secondOne + secondTwo);
  }
  console.log('Шагов ' + move);
}

//пятое

function fifthTask(): void {
  const speedAhiles: number | null = Number(prompt('Скорость Ахилесса (м/с)?'));
  const speedTurtle: number | null = Number(prompt('Скорость черепахи (м/с)?'));
  let dist: number | null = Number(prompt('Расстояние? (в метрах)'));
  const newDist: number | null = Number(prompt(
    'Надо приблизится на (также в метрах)?'
  ));
  if (
    speedAhiles === null ||
    speedTurtle === null ||
    dist === null ||
    newDist === null
  )
    return;
  let step: number = -1;
  if (speedAhiles > speedTurtle) {
    step++;
    while (dist > newDist) {
      dist = (dist / speedAhiles) * speedTurtle;
      step++;
    }
    alert(step + ' шага');
  } else {
    alert('Никогда');
  }
}
