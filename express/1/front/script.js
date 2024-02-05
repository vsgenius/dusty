
const btn = document.querySelector('.btn');

async function getData() {
    const response = await fetch('http://localhost:3000/');
    const result = await response.json()
    btn.textContent = result;
}

async function btnHandler() {
    await fetch('http://localhost:3000/plus');
    await getData();
}

window.onload = getData;

btn.addEventListener('click',btnHandler)