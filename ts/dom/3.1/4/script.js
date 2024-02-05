const colors = ['red', 'orange', 'yellow', 'blue', 'cyan', 'purple'];
let i = 0;
const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
  e.target.style.backgroundColor = colors[i];
  ++i;
  if (i == colors.length) i = 0;
});
