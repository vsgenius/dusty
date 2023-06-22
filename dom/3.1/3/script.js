const triangle = document.querySelector('.triangle');

triangle.addEventListener('click',(e) => {
     if (e.target.style.transform === 'rotate(90deg)') {
        e.target.style.transform = 'rotate(1800deg)';
        const element = e.target.parentElement.parentElement.querySelector('.element') ;
        e.target.parentElement.parentElement.removeChild(element);
    } else {
        e.target.style.transform = 'rotate(90deg)';
        const div = document.createElement('div');
        div.classList.add('element')
        div.textContent = 'Хинка́ли (груз. ხინკალი) — блюдо грузинской кухни из горных областей Пшави, Мтиулети и Хевсурети в Грузии, получившее распространение в других районах Кавказа и по всему бывшему СССР. Разновидность дамплингов.'
        e.target.parentElement.parentElement.appendChild(div);
    }
})