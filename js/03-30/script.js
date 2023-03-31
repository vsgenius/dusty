//задание 1
function calculate(firstNumber, secondNumber, sign) {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      if (secondNumber != 0) {
        return firstNumber / secondNumber;
      } else {
        return 'Делить на ноль нельзя.';
      }
    default:
      return 'Такого знака операций не существует.';
  }
}
//задание 2
function isOnOneLine(
  firstPointX,
  firstPointY,
  secondPointX,
  secondPointY,
  thirdPointX,
  thirdPointY
) {
  return (
    (thirdPointX - firstPointX) / (secondPointX - firstPointX) ==
    (thirdPointY - firstPointY) / (secondPointY - firstPointY)
  );
}

//задание 3

function isExistTriangle(firstSide, secondSide, thirdSide) {
  return (
    firstSide + secondSide > thirdSide ||
    secondSide + thirdSide > firstSide ||
    thirdSide + firstSide > secondSide
  );
}
function isIsoscelesTriangle(firstSide, secondSide, thirdSide) {
  return (
    (firstSide === secondSide && secondSide !== thirdSide) ||
    (secondSide === thirdSide && thirdSide !== firstSide)
  );
}
function isEquilateralTriangle(firstSide, secondSide, thirdSide) {
  return firstSide === secondSide && secondSide === thirdSide;
}
function isRectangularTringle(firstSide, secondSide, thirdSide) {
  return (
    firstSide === (secondSide ** 2 + thirdSide ** 2) ** (1 / 2) ||
    secondSide === (firstSide ** 2 + thirdSide ** 2) ** (1 / 2) ||
    thirdSide === (firstSide ** 2 + secondSide ** 2) ** (1 / 2)
  );
}
function checkTringle(firstSide, secondSide, thirdSide) {
  console.log(
    'существует ли треуегольник - ' +
      isExistTriangle(firstSide, secondSide, thirdSide)
  );
  console.log(
    'является ли треугольник равнобедренным - ' +
      isIsoscelesTriangle(firstSide, secondSide, thirdSide)
  );
  console.log(
    'является ли треугольник равносторонним - ' +
      isEquilateralTriangle(firstSide, secondSide, thirdSide)
  );
  console.log(
    'является ли треугольник прямоугольным - ' +
      isExistTriangle(firstSide, secondSide, thirdSide)
  );
}
// задание 4 Допросник
function isNumber(input) {
  return Number(input);
}
function isOverThousand(input) {
  return input > 1000;
}
function isFiveChar(input) {
  return input.length > 5;
}
function funcwithCb(input, cb) {
  if (cb(input)) return true;
  return false;
}
function checkInt() {
  let check = true;
  while (check) {
    let inputNumber = prompt('Введите число более 1000');
    if (
      funcwithCb(inputNumber, isNumber) &&
      funcwithCb(inputNumber, isOverThousand)
    ) {
      alert('Вы ввели верное число, поздравляю)');
      check = false;
    } else {
      alert('Ошибка ввода числа.');
    }
  }
  check = true;
  while (check) {
    let inputText = prompt('Введите текст более 5 знаков');
    console.log(isFiveChar(inputText));
    if (funcwithCb(inputText, isFiveChar)) {
      alert('Вы ввели верный текст, поздравляю)');
      check = false;
    } else {
      alert('Ошибка ввода текста.');
    }
  }
}
//задание 5
function generateNumber(from,to=0) {
  return Math.random()*from;
}
let number = 1;
function getCount(cb) {
  number = cb(number);
  return number;
}
