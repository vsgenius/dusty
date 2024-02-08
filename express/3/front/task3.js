const btn = document.querySelector('#btn-submit');
const warning = document.querySelector('.warning');

btn.addEventListener('click',async ()=>{
    const items = document.querySelectorAll('.item');
    if (!items.length) return;
    const data = Array.from(items).map(item=>item.textContent);
    const response = await fetch('http://localhost:3000/',{
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({list:data})
    });
    const result = await response.json();
    console.log(result)
    warning.textContent = result;
    warning.classList.remove('hidden');
    setTimeout(() => {
        warning.classList.add('hidden');
    }, 2000);
    return;
})


