const bug = document.querySelector('.bug');

const btnsGroup = document.querySelector('.btn-group');
btnsGroup.addEventListener('click', (event) => {
  const target = event.target;
  const { top, bottom, right, left } = bug.getBoundingClientRect();
  bug.style.top = top + Number(target.dataset.top) + 'px';
  bug.style.bottom = bottom + Number(target.dataset.bottom) + 'px';
  bug.style.right = right + Number(target.dataset.right) + 'px';
  bug.style.left = left + Number(target.dataset.left) + 'px';
});
