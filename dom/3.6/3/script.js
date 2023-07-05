const btns = document.querySelectorAll('.form-check-input');
const img = document.querySelector('.image');
let image = [];

function getImageFile(target) {
  if (['dog', 'cat'].includes(target.classList[1])) {
    if (target.checked) image[0] = target.classList[1];
  }
  if (['white', 'black', 'brown'].includes(target.classList[1])) {
    if (target.checked) image[1] = target.classList[1];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  btns.forEach((target) => {
    getImageFile(target);
  });
  img.src = './img/' + image.join('-') + '.jpg';
});
btns.forEach((btn) => {
  btn.addEventListener('change', (event) => {
    const target = event.target;
    getImageFile(target);
    img.src = './img/' + image.join('-') + '.jpg';
  });
});
