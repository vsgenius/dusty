const listItems = document.querySelector('.list-items');
const editableItems = document.querySelectorAll('.editable');
let oldText;
let oldItem;
editableItems.forEach((item) => {
  item.addEventListener('dblclick', (event) => {
    const target = event.target;
    if (oldItem && target !== oldItem) oldItem.textContent = oldText;
    if (!target.classList.contains('editable')) return;
    oldText = target.textContent;
    target.textContent = '';
    const input = document.createElement('input');
    input.value = oldText;
    input.classList.add('input-editable');
    const btnOk = document.createElement('button');
    btnOk.classList.add('btn-ok');
    btnOk.innerHTML = '&#10004';
    btnOk.addEventListener('click', (event) => {
      const item = event.target.closest('.item');
      const input = item.querySelector('.input-editable');
      item.textContent = input.value;
      oldText = input.value;
    });
    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-cancel');
    btnCancel.innerHTML = '	&#10006';
    btnCancel.addEventListener('click', (event) => {
      const item = event.target.closest('.item');
      item.textContent = oldText;
    });
    target.appendChild(input);
    target.appendChild(btnOk);
    target.appendChild(btnCancel);
    oldItem = target;
  });
});
