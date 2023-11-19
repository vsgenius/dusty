const exponat = document.querySelector('.exponat');
const btn = document.querySelector('.btn');

let currentExponat = 1;

function createExponat(exponat,parent) {
    const frag = document.createDocumentFragment();
    const h3 = document.createElement('h3');
    h3.textContent = exponat.name;
    frag.appendChild(h3);
    const h4 = document.createElement('h4');
    h4.textContent = exponat.descripion;
    frag.appendChild(h4);
    const img = document.createElement('img');
    img.src = exponat.photo;
    frag.appendChild(img);
    parent.appendChild(frag);
}

function getExponat() {
    fetch(`./museum/${currentExponat}.json`)
    .then((response) => response.json())
    .then(result=>createExponat(result,exponat))
    .catch(()=>{
      exponat.textContent = 'конец экспозиции';
      currentExponat = 0;
    });
}


window.onload = getExponat;

btn.addEventListener('click',()=>{
    currentExponat++;
    exponat.innerHTML = '';
    console.log(currentExponat)
    getExponat();
})
