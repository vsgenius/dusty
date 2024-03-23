const btn = document.querySelector('.btn');
const blockResult = document.querySelector('.block-result');
const loading = document.querySelector('.loading');
const error = document.querySelector('.error');

btn.addEventListener('click', (event) => {
  const target = event.target;
  const firstNumber = target
    .closest('.form-group')
    .querySelector('.first-number').value;
  const secondNumber = target
    .closest('.form-group')
    .querySelector('.second-number').value;
  if (!firstNumber && !secondNumber) return;
  loading.classList.toggle('hidden');
  error.classList.add('hidden');
  fetch(`http://localhost:3000/?first=${firstNumber}&second=${secondNumber}`)
    .then((response) => response.json())
    .then((result) => {
      blockResult.innerHTML = '';
      loading.classList.add('hidden');
      blockResult.textContent = result.result;
    })
    .catch(() => {
      loading.classList.add('hidden');
      error.classList.remove('hidden');
    });
});
