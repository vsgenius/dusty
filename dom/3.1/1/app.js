const user = { login: 'user', password: 'user' };
const form = document.querySelector('.form');
const alert = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const login = e.target.querySelector('#login').value;
  const password = e.target.querySelector('#password').value;
  if (user.login === login && user.password === password) {
    const h1 = document.createElement('h1');
    h1.textContent = 'Привет,' + login;
    form.parentElement.appendChild(h1);
    form.parentElement.removeChild(form);
  } else {
    alert.classList.remove('hidden');
    setTimeout(() => {
      alert.classList.add('hidden');
    }, 1000);
  }
});
