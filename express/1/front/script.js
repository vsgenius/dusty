const btn = document.querySelector('.btn');

async function getData() {
  const response = await fetch('http://localhost:3000/');
  const result = await response.json();
  btn.textContent = result;
}

async function btnHandler() {
  const response = await fetch('http://localhost:3000/plus', {
    method: 'POST',
  });
  const result = await response.json();
  btn.textContent = result;
}

window.onload = getData;

btn.addEventListener('click', btnHandler);
