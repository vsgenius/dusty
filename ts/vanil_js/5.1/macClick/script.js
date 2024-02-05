const clickButton = document.querySelector('.click-button');

let lastTime;

function macClick() {
  return new Promise((resolve, reject) => {
    clickButton.addEventListener('click', () => {
      let curTime = Date.now();
      if (curTime - lastTime < 2000) {
        lastTime = curTime;
        resolve('click');
      }
      lastTime = curTime;
    });
  });
}

macClick().then((result) => {
  clickButton.parentElement.remove(clickButton);
});
