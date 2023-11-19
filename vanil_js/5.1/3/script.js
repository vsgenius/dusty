const container = document.querySelector('.container');

function getUserName(parent) {
  return new Promise((resolve, reject) => {
    if (!localStorage.getItem('greeting')) {
      const inputName = document.createElement('input');
      inputName.placeholder = 'введите ваше имя';
      parent.appendChild(inputName);
      const submitButton = document.createElement('button');
      submitButton.textContent = 'сохранить';
      submitButton.addEventListener('click', (event) => {
        localStorage.setItem('greeting', inputName.value);
        parent.innerHTML = '';
        resolve(localStorage.getItem('greeting'));
      });
      parent.appendChild(submitButton);
    } else {
      resolve(localStorage.getItem('greeting'));
    }
  });
}
getUserName(container).then((result) => {
  container.innerHTML = '';
  const greeting = document.createElement('p');
  greeting.textContent = 'Привет ' + result + '!';
  container.appendChild(greeting);
});
