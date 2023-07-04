const itemsBlock = document.querySelector('.items-block');

function changeStar(count) {
  const items = document.querySelectorAll('.item-image');
  items.forEach((element) => {
    element.src = './svg/black.svg';
  });
  for (let i = 0; i < count; i++) {
    items[i].src = './svg/yellow.svg';
  }
}

const handleMouseOver = function (event) {
  const target = event.target;
  if (!target.classList.contains('item-image')) {
    return;
  }
  changeStar(target.dataset.id);
};

const handleMouseOut = function () {
  changeStar(0);
};

itemsBlock.addEventListener('mouseover', handleMouseOver);
itemsBlock.addEventListener('mouseleave', handleMouseOut);

const handleClick = function () {
  itemsBlock.removeEventListener('mouseover', handleMouseOver);
  itemsBlock.removeEventListener('click', handleClick);
  itemsBlock.removeEventListener('mouseleave', handleMouseOut);
};
itemsBlock.addEventListener('click', handleClick);
