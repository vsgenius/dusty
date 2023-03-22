// let number = prompt("Число?");
// alert("Ваше число четное: " + String(number % 2 === 0));
// alert(
//   "Ваше число счастливое: " +
//     String(number % 3 === 0 && number % 5 === 0 && number % 7 === 0)
// );
// alert(
//   "Ваше число содержит больше одной цифр: " + String(parseInt(number / 10) > 0)
// );
// alert(
//   "Ваше число содержит больше двух цифры:" + String(parseInt(number / 100) > 0)
// );
// alert(
//   "Ваше число содержит больше трех цифр: " + String(parseInt(number / 1000) > 0)
// );
// let hours = prompt("Часов?");
// let minites = prompt("Минут?");
// alert("Прошло с начала дня: " + (hours * 3600 + minites * 60) + " сек");

// let bilet = prompt("Номер билета?");
// let b1 = bilet - (bilet % 100000);
// let b2 = bilet - b1 - (bilet % 10000);
// let b3 = bilet - b1 - b2 - (bilet % 1000);
// let b4 = bilet - b1 - b2 - b3 - (bilet % 100);
// let b5 = bilet - b1 - b2 - b3 - b4 - (bilet % 10);
// let b6 = bilet - b1 - b2 - b3 - b4 - b5;
// alert(
//   "Московкая система - " +
//     String(b1 / 100000 + b2 / 10000 + b3 / 1000 == b4 / 100 + b5 / 10 + b6)
// );
// alert(
//   "Питерская система - " +
//     String(b1 / 100000 + b3 / 1000 + b5 / 10 == b2 / 10000 + b4 / 100 + b6)
// );
// i = 0;
// while (true) {
//     if (!isFinite(i)) break;
//     i+=1.7976812229821701e+308;
//     console.log(i);
// }
// console.log('конец')
// let color = prompt('введите цвет hex')
// let n = 0;
// if (color[0]=='#') n++;
// let r = String(parseInt(color.substr(n,2), 16))
// let g = String(parseInt(color.substr(n+2,2), 16))
// let b = String(parseInt(color.substr(n+4,2), 16))
// alert('rgb: '+r+', '+g+', '+b)

let color = prompt("введите цвет hex");
let n = 0;
if (color[0] == "#") n++;
let parseColor = parseInt(color, 16);
let r = parseColor - (parseColor % 65536);
let g = parseColor - r - (parseColor % 256);
let b = parseColor - r - g;
alert(r / 65536 + ", " + g / 256 + ", " + b);
