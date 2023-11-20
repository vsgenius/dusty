const currentRate = document.querySelector('.current-rate');

function getMoney() {
  fetch('http://api.exchangeratesapi.io/v1/latest?access_key=' + API_KEY)
    .then((response) => response.json())
    .then((result) => {
      currentRate.textContent = result.rates.RUB;
    });
}

window.onload = () => {
  getMoney();
  setInterval(() => {
    getMoney();
  }, 10000);
};
