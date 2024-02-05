const breeds = document.querySelector('.breeds');
const images = document.querySelector('.images');

function getBreeds() {
  fetch('https://api.thecatapi.com/v1/breeds')
    .then((response) => response.json())
    .then((result) => {
      result.forEach((elem) => {
        const option = document.createElement('option');
        option.id = elem.id;
        option.value = elem.id;
        option.textContent = elem.name;
        breeds.appendChild(option);
      });
    });
}

window.onload = getBreeds;

breeds.addEventListener('change', (event) => {
  const breedIds = event.target.selectedOptions[0].id;
  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedIds}&api_key=REPLACE_ME`
  )
    .then((response) => response.json())
    .then((result) => {
      images.innerHTML = '';
      result.forEach((elem) => {
        const img = document.createElement('img');
        img.id = elem.id;
        img.value = elem.id;
        img.src = elem.url;
        img.style.width = 200 + 'px';
        images.appendChild(img);
      });
    });
});
