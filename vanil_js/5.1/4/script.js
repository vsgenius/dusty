function getCharge() {
  return navigator.getBattery().then((result) => {
    const elem = document.createElement('p');
    elem.textContent =
      'Заряд вашего устройства - ' + Math.floor(result.level * 100) + '%';
    document.body.appendChild(elem);
  });
}


document.querySelector('.charge').addEventListener('click', () => getCharge());
