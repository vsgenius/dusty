const clickButton = document.querySelector('.click-button');


function monoClick() {
    return new Promise((resolve,reject)=>{
        clickButton.addEventListener('click',()=>{
            resolve('click')
        })
    })
}
monoClick().then(result=>console.log(result));