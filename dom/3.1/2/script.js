const bug = document.querySelector('.bug');

const btnsGroup = document.querySelector('.btn-group');
btnsGroup.addEventListener('click', (event) => {
    const target = event.target;
    let {top, bottom,right,left} = bug.getBoundingClientRect();
    bug.style.top = top + Number(target.dataset.top) + 'px';
    bug.style.bottom = bottom + Number(target.dataset.bottom) + 'px';
    bug.style.right = right + Number(target.dataset.right) + 'px';
    bug.style.left = left + Number(target.dataset.left) + 'px';
    // bug.style[e.target.classList[0]] = rect[e.target.classList[0]] + 10 + 'px';
    // bug.style[e.target.classList[1]] = rect[e.target.classList[1]] - 10 + 'px';
  });
