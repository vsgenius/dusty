const predator = document.querySelector('.predator');

predator.addEventListener('click', (event) => {
  const target = event.target;
  const victim = target.nextElementSibling;
  if (victim.textContent) {
    target.textContent += victim.textContent[0];
    victim.textContent = victim.textContent.slice(1);
  } else if (victim) {
    target.parentElement.removeChild(victim);
  }
});
