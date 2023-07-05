const triangles = document.querySelectorAll('.triangle');

triangles.forEach((triangle) => {
  triangle.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    const element = target.closest('.block').querySelector('.element');
    if (target.classList.contains('rotate')) {
      target.classList.remove('rotate');
      element.style.height = '';
    } else {
      target.classList.add('rotate');
      element.style.height = `${target.offsetHeight * 3}px`;
    }
  });
});
