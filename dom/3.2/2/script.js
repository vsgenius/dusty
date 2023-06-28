const btn = document.querySelector('.btn');
const inputAlert = document.querySelector('.warning');

btn.addEventListener('click', (e) => {
  let value = document.querySelector('#text').value;

  if (!value) return;
  if (value === 'назад') {
    value = '';
    history.back();
    return;
  }
  if (value === 'вперед') {
    value = '';
    history.forward();
    return;
  }
  if (value.startsWith('скопируй')) {
    navigator.clipboard.writeText(value.slice(9));
    value = '';
    return;
  }
  if (value === 'обнови') {
    value = '';
    location.reload();
    return;
  }
  if (value.startsWith('переадресуй на')) {
    location.assign(value.slice(14));
    value = '';
    return;
  }
  inputAlert.classList.remove('hidden');
  setTimeout(() => {
    inputAlert.classList.add('hidden');
  }, 1000);
});
