const btn = document.querySelector('.btn');
const facts = document.querySelector('.facts');

btn.addEventListener('click', () => {
  const number = document.querySelector('.number').value;
  if (!number) return;
  fetch(`https://dog-api.kinduff.com/api/facts?number=${number}`)
    .then((response) => response.json())
    .then((result) => {
      facts.textContent = '';
      console.log(result);
      result.facts.forEach((element) => {
        const p = document.createElement('p');
        p.textContent = element;
        facts.appendChild(p);
      });
    });
});
