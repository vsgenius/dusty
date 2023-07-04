const container = document.querySelector('.container');
let text;
let lastTarget;

function addItem(target) {
  if (!target.classList.contains('list-group-item')) {
    return;
  }
  text = target.textContent;
  target.textContent = '';

  const input = document.createElement('input');
  input.classList.add('form-small', 'form-control');
  input.value = text;
  target.appendChild(input);

  const divClear = document.createElement('div');
  divClear.classList.add('clear');
  divClear.innerHTML = '&#10006';

  const divOk = document.createElement('div');
  divOk.classList.add('ok');
  divOk.innerHTML = '&#10004';
  target.appendChild(divClear);
  target.appendChild(divOk);

  divClear.addEventListener('click', (event) => {
    const item = event.target.parentElement;
    item.textContent = text;
  });

  divOk.addEventListener('click', () => {
    const item = target.closest('.list-group-item');
    text = item.querySelector('.form-control').value;
    item.textContent = item.querySelector('.form-control').value;
  });
}
container.addEventListener('click', (event) => {
  const target = event.target;

  if (!lastTarget) {
    console.log('1');
    text = target.textContent;
    addItem(target);
    lastTarget = target;
    return;
  }
  if (target.querySelector('.form-control')) {
    return;
  }
  if (lastTarget.dataset.id !== target.dataset.id && target.dataset.id) {
    console.log(text);
    lastTarget.textContent = text;
    text = target.textContent;
    addItem(target);
    lastTarget = target;
  }
});
