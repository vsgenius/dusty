const bug = document.querySelector('.bug');

function bugRun(key) {
  const { top, bottom, right, left } = bug.getBoundingClientRect();
  if (key === 'ArrowUp' || key === 'up') {
    bug.style.top = top - 10 + 'px';
    bug.style.bottom = bottom + 10 + 'px';
  } else if (key === 'ArrowDown' || key === 'down') {
    bug.style.top = top + 10 + 'px';
    bug.style.bottom = bottom - 10 + 'px';
  } else if (key === 'ArrowLeft' || key === 'left') {
    bug.style.right = right + 10 + 'px';
    bug.style.left = left - 10 + 'px';
  } else {
    bug.style.right = right - 10 + 'px';
    bug.style.left = left + 10 + 'px';
  }
}
const btnsGroup = document.querySelector('.btn-group');
btnsGroup.addEventListener('click', (event) => {
  const target = event.target;
  bugRun(target.dataset.run);
});

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
    return;
  }
  bugRun(key);
});
