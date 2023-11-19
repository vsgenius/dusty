const clickButton = document.querySelector('.click-button');

let lastTime;

function toClickOrNotToClick() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('reject');
    }, 10000);
    clickButton.addEventListener('click', () => {
      resolve('click');
    });
  });
}

toClickOrNotToClick()
  .then(() => {
    clickButton.parentElement.remove(clickButton);
  })
  .catch(() => {
    clickButton.disabled = true;
  });
