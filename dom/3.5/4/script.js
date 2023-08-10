const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;
  if (!target.classList.contains('triangle')) return;
  const element = target.closest('.block').querySelector('.element');
  console.log(element)
  console.log(target)
  if (target.classList.contains('rotate')) {
    target.classList.remove('rotate');
    element.style.height = '';
  } else {
    target.classList.add('rotate');
    element.style.height = `${target.offsetHeight * 3}px`;
  }
});
