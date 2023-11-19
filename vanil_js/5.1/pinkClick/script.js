const clickButton = document.querySelector('.click-button');



function pinkClick() {
  let count = 0;
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
