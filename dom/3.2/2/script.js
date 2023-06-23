const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  const input = document.querySelector('#text');
  if (!input.value) return;
  else if (input.value === 'назад') {
    input.value = '';
    history.back();
    return;
  } else if (input.value === 'вперед') {
    input.value = '';
    history.forward();
    return;
  } else if (input.value.split(' ')[0] === 'скопируй') {
    navigator.clipboard.writeText(input.value.split(' ')[1]);
    input.value = '';
    return;
  } else if (input.value === 'обнови') {
    input.value = '';
    location.reload();
    return;
  } else if (
    input.value.split(' ')[0] === 'переадресуй' &&
    input.value.split(' ')[1] === 'на'
  ) {
    location.assign(input.value.split(' ')[2]);
    input.value = '';
    return;
  } else alert('такого не умею');
});
