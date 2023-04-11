// Лотерейный билет состоит из пяти случайных чисел от 1 до 99.
// Дайте возможность нескольким пользователям поиграть в лотерею – спрашивайте их имена,
// и в ответ выводите какие числа на лотерейном билете у этого пользователя.

// Как только в ответ на запрос имени пользователь нажал Cancel,
// начинается розыгрыш. Розыгрыш заключается в том, что из лототрона по одному выпадают числа.
// Участники лотереи “вычеркивают” выпадающие числа из лотерейного билета. Побеждает тот,
// кто первый вычеркнет все числа на своем билете. Каждое число выводится с помощью alert.
// Если это число находится у кого-то на лотерейном билете, система также сообщает имена всех,
// на чьем лотерейном билете есть такой номер. Если кому-то до выигрыша (закрытия всех чисел)
// осталось закрыть последний номер в билете, система сообщает об этом (выводит имена всех потенциальных победителей).

// Как только на чьём-то билете будут закрыты все числа, розыгрыш заканчивается.
// Обратите внимание, что победителя может быть два (на разных билетах могут быть одинаковые числа).
// В свою очередь, при розыгрыше лотереи уже выпавшее число не может выпасть дважды
console.log('Задание 5')
function getTicket(count = 5, to = 99) {
  let ticket = [];
  for (let i = 0; i < count; i++) {
    let temp = Math.floor(Math.random() * to);
    if (!ticket.includes(temp)) ticket.push(temp);
  }
  return ticket;
}
function addUsers(listUser) {
  while (true) {
    let name = prompt('Введите ваше имя');
    if (name === null) return;
    listUser[name] = getTicket();
    alert('Ваш билет: ' + listUser[name].join(', '));
  }
}
function getNumber() {
  return Math.floor(Math.random() * 99);
}
function checkUsers(listUser, number, winer) {
  for (const [key, value] of Object.entries(listUser)) {
    if (value.indexOf(number) != -1) {
        value.splice(value.indexOf(number), 1);
        alert('совпадение у '+key)}
    if (value.length == 1) console.log('Билет ', key, '- осталась одна цифра');
    if (value.length == 0) winer.push(key);
  }
  return winer.length == 0 ? false : true;
}
function lottery(listUser) {
  let lotteryNumber = [];
  let winer = [];
  while (true) {
    let number = getNumber();
    if (!lotteryNumber.includes(number)) {
      lotteryNumber.push(number);
      alert(number);
      if (checkUsers(listUser, number, winer)) {
        alert('победители:' + winer.join(','));
        console.log('победители:' + winer.join(','));
        return;
      }
    }
  }
}
function game() {
  let listUser = {};
  addUsers(listUser);
  if (Object.keys(listUser).length > 0) lottery(listUser);
}
game();
