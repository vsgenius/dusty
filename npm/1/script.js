let parent = document.querySelector('#form-group');
let btn = document.querySelector('.btn');

let picker = new Picker(parent);

picker.onChange = function (color) {
  console.log(color);
  parent.querySelector('#parent').value = color.hex;
};

btn.addEventListener('click', (event) => {
  document.body.style.backgroundColor = parent.querySelector('#parent').value;
});
