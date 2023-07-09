const formCheck = document.querySelector('.form-check');
const selectForm = document.querySelector('.select-form');
const form = document.querySelector('.form');
const errorSeat = document.querySelector('.error-seat');
const errorEat = document.querySelector('.error-eat');
const container = document.querySelector('.container');
const formData = {};

function checkSeat(seats) {
  if (
    seats &&
    'abcdef'.includes(seats.slice(-1)) &&
    seats.slice(0, -1) >= 1 &&
    seats.slice(0, -1) <= 32
  ) {
    return seats;
  }
  errorSeat.classList.toggle('hidden');
  setTimeout(() => {
    errorSeat.classList.toggle('hidden');
  }, 1000);
}

function checkEat(eat) {
  if (eat && eat !== '...') {
    return eat;
  }

  errorEat.classList.toggle('hidden');
  setTimeout(() => {
    errorEat.classList.toggle('hidden');
  }, 1000);
}
formCheck.addEventListener('change', () => {
  selectForm.classList.toggle('hidden');
});

form.addEventListener('change', (event) => {
  const target = event.target;
  formData[target.name] = target.name !== 'eat' ? target.value : target.checked;
});

form.addEventListener('submit', (event) => {
  console.log(formData);
  event.preventDefault();
  if (!checkSeat(formData.seat) || (formData.eat && !checkEat(formData.select)))
    return;
  container.removeChild(form);
  const h2 = document.createElement('h2');
  h2.textContent = 'Регистрация прошла успешно!';
  container.appendChild(h2);
});
