const text = document.querySelector('.text')
const checkPassword = document.querySelector('.checkPassword')

function strong(text) {
    return text.match(/^.*(?=.{10,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[+_!#$%&? "]).*$/)
}
function good(text) {
    return text.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/)
}
function okay(text) {
    return text.match(/^.*(?=.{5,})(?=.*[a-zA-Z])(?=.*\d).*$/)
}
function weak(text) {
    return text.match(/^.*(?=.{5,})(?=.*[a-z]).*$/)
}


text.addEventListener('keyup',(e) => {
    console.log(text.value)
    checkPassword.textContent=''
    if (strong(text.value)) {
        checkPassword.textContent='Отличный';
        return
    }
    if (good(text.value)) {
        checkPassword.textContent='Хороший';
        return
    }
    if (okay(text.value)) {
        checkPassword.textContent='Нормальный';
        return
    }
    if (weak(text.value)) {
        checkPassword.textContent='Слабый';
        return
    }
    if (text.value.length<5 && text.value.length>0) checkPassword.textContent='Короткий';
})
