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

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
    return;
  }
  const { top, bottom, right, left } = bug.getBoundingClientRect();
  if (key === 'ArrowUp') {
    bug.style.top = top - 10 + 'px';
    bug.style.bottom = bottom + 10 + 'px';
  } else if (key === 'ArrowDown') {
    bug.style.top = top + 10 + 'px';
    bug.style.bottom = bottom - 10 + 'px';
  } else if (key === 'ArrowLeft') {
    bug.style.right = right + 10 + 'px';
    bug.style.left = left - 10 + 'px';
  } else {
    bug.style.right = right - 10 + 'px';
    bug.style.left = left + 10 + 'px';
  }
});
