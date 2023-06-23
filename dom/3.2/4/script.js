const btn = document.querySelector('button');
const body = document.querySelector('body');
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('blacktheme')) {
    btn.classList.remove('btn-black');
    body.classList.remove('body-black');
    localStorage.removeItem('blacktheme');
  } else {
    btn.classList.add('btn-black');
    body.classList.add('body-black');
    localStorage.setItem('blacktheme', true);
  }
});
btn.addEventListener('click', (e) => {
  if (localStorage.getItem('blacktheme')) {
    e.target.classList.remove('btn-black');
    body.classList.remove('body-black');
    localStorage.removeItem('blacktheme');
  } else {
    e.target.classList.add('btn-black');
    body.classList.add('body-black');
    localStorage.setItem('blacktheme', true);
  }
  console.log(localStorage.getItem('blacktheme'));
});
