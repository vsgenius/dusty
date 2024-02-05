const currentRate = document.querySelector('.current-rate');

function getMoney() {
   fetch('http://api.wordnik.com/v4/words.json/randomWord?api_key='+API_KEY)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
  // fetch('https://api.unsplash.com/search/photos/?client_id=' + client_id+'&query=cat&per_page=1')
  //   .then((response) => response.json())
  //   .then((result) => {
  //     console.log(result);
  //   });

}

window.onload = () => {
  getMoney();
  setInterval(() => {
    getMoney();
  }, 10000);
};
