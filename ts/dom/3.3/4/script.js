const image = document.querySelector('.image');
const imagesBlock = document.querySelector('.images-block');
let lastImage;

imagesBlock.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.classList.contains('image')) {
    return;
  }
  console.log(lastImage === target);
  if (lastImage && lastImage !== target) {
    lastImage.classList.remove('image-click');
    target.classList.add('image-click');
  } else if (lastImage) {
    lastImage.classList.remove('image-click');
  } else {
    target.classList.add('image-click');
  }
  lastImage = target;
});
