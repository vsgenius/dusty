const btn = document.querySelector('.btn');
const blockResult = document.querySelector('.block-result');

btn.addEventListener('click', (event) => {
  const target = event.target;
  const firstNumber = target
    .closest('.form-group')
    .querySelector('.first-number').value;
  const secondNumber = target
    .closest('.form-group')
    .querySelector('.second-number').value;
  if (!firstNumber && !secondNumber) return;
  fetch(`http://localhost:3000/?first=${firstNumber}&second=${secondNumber}`)
    .then((response) => response.json())
    .then((result) => {
      blockResult.innerHTML = '';
      blockResult.textContent = result.result;
    });
});
