const btn = document.querySelector('.btn');
const answer = document.querySelector('.answer');

btn.addEventListener('click', async (event) => {
  const target = event.target;
  const textFind = target
    .closest('.form-group')
    .querySelector('#find-text').value;
  if (!textFind) return;
  fetch(`./data/${textFind}.json`)
    .then((response) => response.json())
    .then((result) => (answer.textContent = result.result))
    .catch(() => {
      answer.textContent = 'ничего найти не удалось';
    });
});
