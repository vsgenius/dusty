const container = document.querySelector('.container');
let text;

function addItem(target) {
  if (target.classList.contains('list-group-item')) {
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
    divOk.addEventListener('click', (event) => {
      const item = event.target.parentElement;
      item.textContent =
        event.target.parentElement.querySelector('.form-control').value;
    });
  }
}
container.addEventListener('click', (event) => {
  event.preventDefault;
  const target = event.target;
  addItem(target);
});
