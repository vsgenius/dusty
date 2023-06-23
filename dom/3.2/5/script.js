let btn_list = document.querySelectorAll('.btn')
let timeout = 5000;
function generateNumber() {
    number1 = Math.floor(Math.random() * 8)+2
    number2 = Math.floor(Math.random() * 8)+2
    document.getElementById('firstNumber').textContent = number1
    document.getElementById('secondNumber').textContent = number2
    let btnList = arrayBtn()
    btn_list[btnList[0]].textContent = number1*number2-2
    btn_list[btnList[1]].textContent = number1*number2+2
    btn_list[btnList[2]].textContent = number1*number2
    btn_list[btnList[3]].textContent = number1*number2+3
}

generateNumber();
for (i=0;i<btn_list.length;i++) {
btn_list[i].onclick = (e) => {
    setInterval(()=> {
        if (e.srcElement.textContent==number1*number2) {
            document.querySelector('.status__wins').textContent++
            document.getElementById(e.target.id).classList.add('win__active')
            setInterval(()=>{document.getElementById(e.target.id).classList.remove('win__active')},300)
        }
        else {
            document.querySelector('.status__loss').textContent++
            document.getElementById(e.target.id).classList.add('loss__active')
            setInterval(()=>{document.getElementById(e.target.id).classList.remove('loss__active')},300)
        }
    generateNumber();
    }, 1000); 
}}
function arrayBtn() {
    let array = []
    let num = 0 
    while (array.length<=3) {
        num = Math.floor(Math.random() * 4)
        if (array.indexOf(num)==-1) {
            array.push(num)
        }

    }
    return array
    
}

