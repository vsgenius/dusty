const input = document.querySelector('.form-control');
const blockItems = document.querySelector('.block-items');

function addItem(text) {
  const div = document.createElement('div');
  div.classList.add('item');
  const divText = document.createElement('div');
  divText.classList.add('text');
  divText.textContent = text;
  const btnClose = document.createElement('button');
  btnClose.classList.add('btn-close');
  btnClose.addEventListener('click', (event) => {
    const item = event.target.parentElement;
    item.parentElement.removeChild(item);
  });
  div.appendChild(divText);
  div.appendChild(btnClose);
  return div;
}

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    blockItems.appendChild(addItem(event.target.value));
    event.target.value = '';
  }
});
