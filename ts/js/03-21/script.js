"use strict";
// Первое задание
function firstTask() {
    var countSecond = prompt('Количество секунд?');
    var result = '';
    if (countSecond === null)
        return;
    if (+countSecond < 100 && +countSecond > 0) {
        result = countSecond;
    }
    else if (+countSecond > 100 && +countSecond < 120) {
        result = '100';
    }
    else {
        result = '0';
    }
    alert(result + ' баллов');
}
// Второе задание
function secondTask() {
    var pointsPlayer = 100;
    var pointsComp = 100;
    while (pointsPlayer >= 0 && pointsComp >= 0) {
        var bet = prompt('Ставка?');
        if (bet === null)
            return;
        var side = prompt('Орел или решка?');
        if (side === null)
            return;
        var monet = Math.floor(Math.random() * 2) === 0 ? 'орел' : 'решка';
        if (monet !== side) {
            pointsPlayer -= +bet;
            pointsComp += +bet;
            alert(monet +
                ' -  проигрыш, ' +
                'вы ' +
                pointsPlayer +
                ' компьютер ' +
                pointsComp);
        }
        else {
            pointsComp -= +bet;
            pointsPlayer += +bet;
            alert(monet +
                ' -  выигрыш, ' +
                'вы ' +
                pointsPlayer +
                ' компьютер ' +
                pointsComp);
        }
    }
    alert('Выиграл ' + (pointsPlayer > pointsComp ? 'человек' : 'компьютер'));
}
// Четвертое задание
function forthTask() {
    var year = 0;
    var number = prompt('Число?');
    if (number === null)
        return;
    var pred = 1;
    var countRabbit = 2;
    while (+number > countRabbit) {
        var temp = pred;
        pred = countRabbit;
        countRabbit += temp;
        ++year;
    }
    alert('Через ' + year);
}
//третье
function thirdTask() {
    var firstOne = prompt('Начальная клетка горизонталь?');
    var firstTwo = prompt('Начальная клетка вертикаль?');
    var secondOne = prompt('Конечная клетка горизонталь?');
    var secondTwo = prompt('Конечная клетка вертикаль?');
    if (firstOne === null ||
        firstTwo === null ||
        secondOne === null ||
        secondTwo === null)
        return;
    var move = 0;
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
function fifthTask() {
    var speedAhiles = Number(prompt('Скорость Ахилесса (м/с)?'));
    var speedTurtle = Number(prompt('Скорость черепахи (м/с)?'));
    var dist = Number(prompt('Расстояние? (в метрах)'));
    var newDist = Number(prompt('Надо приблизится на (также в метрах)?'));
    if (speedAhiles === null ||
        speedTurtle === null ||
        dist === null ||
        newDist === null)
        return;
    var step = -1;
    if (speedAhiles > speedTurtle) {
        step++;
        while (dist > newDist) {
            dist = (dist / speedAhiles) * speedTurtle;
            step++;
        }
        alert(step + ' шага');
    }
    else {
        alert('Никогда');
    }
}
//# sourceMappingURL=script.js.map