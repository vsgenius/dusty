const input = document.querySelector('.form-control');
const blockItems = document.querySelector('.block-items');
const error = document.querySelector('.error');

blockItems.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.classList.contains('btn-close')) return;
  const item = target.closest('.item');
  const block = item.closest('.block-items');
  block.removeChild(item);
});

function addItem(text) {
  const div = document.createElement('div');
  div.classList.add('item');
  const divText = document.createElement('div');
  divText.classList.add('text');
  divText.textContent = text;
  const btnClose = document.createElement('button');
  btnClose.classList.add('btn-close');
  div.appendChild(divText);
  div.appendChild(btnClose);
  return div;
}

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const value = event.target.value;
    if (!value) return;
    const texts = document.querySelectorAll('.text');
    let checkRepeat = false;
    texts.forEach((text) => {
      if (value === text.textContent) checkRepeat = true;
    });
    if (checkRepeat) {
      error.classList.remove('hidden');
      setInterval(() => {
        error.classList.add('hidden');
      }, 2000);
      return;
    }
    blockItems.appendChild(addItem(value));
    event.target.value = '';
  }
});
