console.log('Задание 5');
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
      alert('совпадение у ' + key);
    }
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
