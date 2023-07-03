const text = document.querySelector('.text');
const checkPassword = document.querySelector('.checkPassword');

function strong(text) {
  return text.match(/^.*(?=.{10,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[+_!#$%&? "]).*$/);
}
function good(text) {
  return text.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/);
}
function okay(text) {
  return text.match(/^.*(?=.{5,})(?=.*[a-zA-Z])(?=.*\d).*$/);
}
function weak(text) {
  return text.match(/^.*(?=.{5,})(?=.*[a-z]).*$/);
}

text.addEventListener('input', (e) => {
  checkPassword.textContent = '';
  if (!text.value) {
    return;
  }
  if (strong(text.value)) {
    checkPassword.textContent = 'Отличный';
    return;
  } else if (good(text.value)) {
    checkPassword.textContent = 'Хороший';
    return;
  } else if (okay(text.value)) {
    checkPassword.textContent = 'Нормальный';
    return;
  } else if (weak(text.value)) {
    checkPassword.textContent = 'Слабый';
    return;
  } else text.value.length < 5 && text.value.length > 0;
  checkPassword.textContent = 'Короткий';
});
