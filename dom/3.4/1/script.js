const itemsBlock = document.querySelector('.items-block');

const handleMouseOver = function (event) {
  const target = event.target;
  if (target.classList.contains('item-image')) {
    // console.log(event)
    if (target.attributes.src.nodeValue === './svg/yellow.svg') {
      target.attributes.src.nodeValue = './svg/black.svg';
    } else {
      target.attributes.src.nodeValue = './svg/yellow.svg';
    }
  }
};

itemsBlock.addEventListener('mouseover', handleMouseOver);
const handleClick = function () {
  itemsBlock.removeEventListener('mouseover', handleMouseOver);
  itemsBlock.removeEventListener('click', handleClick);
};
itemsBlock.addEventListener('click', handleClick);
