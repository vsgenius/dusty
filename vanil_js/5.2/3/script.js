const btn = document.querySelector('.btn');
const facts = document.querySelector('.facts');
const loading = document.querySelector('.loading');
const error = document.querySelector('.error');

btn.addEventListener('click', (event) => {
  const target = event.target;
  target.setAttribute('disabled', '');
  error.classList.add('hidden');
  loading.classList.remove('hidden');
  facts.textContent = '';
  const number = document.querySelector('.number').value;
  if (!number) return;
  fetch(`https://dog-api.kinduff.сom/api/facts?number=${number}`)
    .then((response) => response.json())
    .then((result) => {
      loading.classList.add('hidden');
      target.removeAttribute('disabled');
      result.facts.forEach((element) => {
        const p = document.createElement('p');
        p.textContent = element;
        facts.appendChild(p);
      });
    })
    .catch(() => {
      loading.classList.add('hidden');
      error.classList.remove('hidden');
      target.removeAttribute('disabled');
    });
});
