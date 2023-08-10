const startButton = document.querySelector('.start-button');
const container = document.querySelector('.container');
function timer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 10));
    }, Math.floor(Math.random() * 10 * 1000));
  });
}
startButton.addEventListener('click', () => {
  let arrPromise = [];
  const countTimer = document.querySelector('.count-timer');
  if (!Number(countTimer.value)) return;
  for (let i = 0; i < countTimer.value; i++) {
    arrPromise.push(timer());
  }
  Promise.all(arrPromise).then((results) => {
    console.log(results);
    let max = results[0];
    let min = results[0];
    let sum = 0;
    results.forEach((res) => {
      if (res > max) max = res;
      if (res < min) min = res;
      sum += res;
    });
    const maxElem = document.createElement('p');
    maxElem.textContent = 'самое большое число - ' + max;
    container.appendChild(maxElem);
    const minElem = document.createElement('p');
    minElem.textContent = 'самое маленькое число - ' + min;
    container.appendChild(minElem);
    const avgElem = document.createElement('p');
    avgElem.textContent = 'среднее арифметическое - ' + sum / results.length;
    container.appendChild(avgElem);
  });
});
