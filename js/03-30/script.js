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
      (thirdPointY - firstPointY) / (secondPointY - firstPointY) ||
    (thirdPointX == secondPointX && firstPointX == secondPointX) ||
    (thirdPointY == firstPointY && secondPointY == firstPointY)
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
function checkInt(input) {
  if (Number(input) && input > 1000) return true;
  return false;
}
function checkStr(input) {
    if (input.length > 5) return true;
    return false;
}

function getAnswer(question, cb) {
  while(true) {
    const ans = prompt(question);
    if (cb(ans)) return ans;
    alert('Ввод не корректный')
  }
}
//задание 5
// function generateNumber(from, to = 0) {
//   return Math.random() * from;
// }
// let number = 1;
// function getCount(cb) {
//   number = cb(number);
//   return number;
// }
