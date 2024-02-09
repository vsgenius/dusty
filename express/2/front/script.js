const input = document.querySelector('.input');
const numbers = document.querySelector('.numbers');
const actions = document.querySelector('.actions');

let currentAction = '';

async function getData() {
  const response = await fetch('http://localhost:3000/value');
  const result = await response.json();
  input.value = result;
}

async function calculate(action, number) {
  const response = await fetch(`http://localhost:3000/${action}`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({number}),
  });
  const result = await response.json();
  input.value = result;
}

function numberHandler(event) {
  if (currentAction === '') return;
  const target = event.target;
  calculate(currentAction, target.textContent);
}

function actionHandler(event) {
  currentAction = event.target.dataset.action;
}

window.onload = getData;

numbers.addEventListener('click', numberHandler);
actions.addEventListener('click', actionHandler);
