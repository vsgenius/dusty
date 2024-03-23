const currentRate = document.querySelector('.current-rate');
const loading = document.querySelector('.loading');
const error = document.querySelector('.error');

function getMoney() {
  loading.classList.remove('hidden');
  error.classList.add('hidden');
  fetch('http://api.exchangeratesapi.io/v1/latest?access_key=' + API_KEY)
    .then((response) => response.json())
    .then((result) => {
      loading.classList.add('hidden');
      currentRate.textContent = result.rates.RUB;
    })
    .catch(() => {
      loading.classList.add('hidden');
      error.classList.remove('hidden');
    });
}

window.addEventListener('DOMContentLoaded', () => {
  getMoney();
  setInterval(() => {
    getMoney();
  }, 5000);
});
