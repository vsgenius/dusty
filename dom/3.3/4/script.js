const image = document.querySelector('.image');
const imagesBlock = document.querySelector('.images-block');
let lastImage;
imagesBlock.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('image')) {
    // console.log(target)
    if (lastImage) {
      lastImage.classList.toggle('image-click');
    }
    target.classList.toggle('image-click');
    lastImage = target;
  }
});
