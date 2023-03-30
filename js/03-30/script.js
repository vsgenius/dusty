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
