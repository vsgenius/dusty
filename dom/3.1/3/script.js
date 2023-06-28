const triangle = document.querySelector('.triangle');

triangle.addEventListener('click', (event) => {
  const target = event.target;
  console.log(target.classList.contains('rotate'));
  if (target.classList.contains('rotate')) {
    target.classList.remove('rotate');
    const element =
      target.parentElement.parentElement.querySelector('.element');
    target.parentElement.parentElement.removeChild(element);
  } else {
    target.classList.add('rotate');
    const div = document.createElement('div');
    div.classList.add('element');
    div.textContent =
      'Хинка́ли (груз. ხინკალი) — блюдо грузинской кухни из горных областей Пшави, Мтиулети и Хевсурети в Грузии, получившее распространение в других районах Кавказа и по всему бывшему СССР. Разновидность дамплингов.';
    target.parentElement.parentElement.appendChild(div);
  }
});
