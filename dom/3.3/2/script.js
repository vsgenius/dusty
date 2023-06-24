const blocks = document.querySelectorAll('.block')
const text = document.querySelector('#text')
let flag = false;
let i = 0;
let countChar = 0;
function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
      
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}
blocks.forEach((block) => {
    block.addEventListener('click',(e)=>{
        const value = text.value;
        const lishChar = e.target.parentElement.querySelector('.chars').textContent;
        console.log(lishChar[i])
        e.preventDefault;
        text.value = replaceChar(value,lishChar[i],countChar);
        ++i;
        if (lishChar.length==i) i=0;
        setInterval(()=>{
            
        }        ,2000)
    })
})