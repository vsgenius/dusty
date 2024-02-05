"use strict";
var user = { login: 'user', password: 'user' };
var form = document.querySelector('.form');
;
var alert = document.querySelector('.alert');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var login = e.target.querySelector('#login').value;
    var password = e.target.querySelector('#password').value;
    if (user.login === login && user.password === password) {
        var h1 = document.createElement('h1');
        h1.textContent = 'Привет,' + login;
        form.parentElement.appendChild(h1);
        form.parentElement.removeChild(form);
    }
    else {
        alert.classList.remove('hidden');
        setTimeout(function () {
            alert.classList.add('hidden');
        }, 1000);
    }
});

document.querySelector('.btn').addEventListener('click',(e)=>{
    console.log(e)
})  