const btns = document.querySelectorAll('button')
const bug = document.querySelector('.bug')
btns.forEach((btn) => {
    btn.addEventListener('click',(e)=> {
        let rect = bug.getBoundingClientRect()
        bug.style[e.target.classList[0]]=rect[e.target.classList[0]]+10+'px';
        bug.style[e.target.classList[1]]=rect[e.target.classList[1]]-10+'px';
        console.log(e.target.classList[0])
    })
})