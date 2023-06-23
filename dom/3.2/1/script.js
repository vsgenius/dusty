const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

if (btn1) {
btn1.addEventListener('click',()=> {
    location.assign('./1.html');
})}
if (btn2) {
btn2.addEventListener('click',()=> {
    location.assign('./2.html');
})}
if (btn3) {
btn3.addEventListener('click',()=> {
    location.assign('./3.html');
})}
if (btn4) {
btn4.addEventListener('click',()=> {
    location.assign('./index.html');
})}

