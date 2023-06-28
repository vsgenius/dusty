const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    location.assign(event.target.dataset.href);
  });
});
