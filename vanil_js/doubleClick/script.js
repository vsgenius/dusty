const btns = document.querySelectorAll('.click-button');

const listPromise = [];

function clickBtn(elem) {
  return new Promise((resolve, reject) => {
    resolve(elem.textContent);
  });
}

function dblClick() {
  btns.forEach((elem) => {
    elem.addEventListener('click', () => {
      listPromise.push(clickBtn(elem));
      if (listPromise.length == 2)
        Promise.all(listPromise).then((result) => console.log(result));
    });
  });
}
dblClick();
