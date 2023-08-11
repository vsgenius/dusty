const clickButton = document.querySelector('.click-button');

let count = 0;

function pinkClick() {
  return new Promise((resolve, reject) => {
    clickButton.addEventListener('click', () => {
      count++;
      if (count > 10) {
        resolve('click');
      }
    });
  });
}
pinkClick().then((result) => {
  console.log('удалена кнопка');
  clickButton.parentElement.remove(clickButton);
});
