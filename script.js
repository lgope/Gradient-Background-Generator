let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

let randomBtn = document.getElementById('random-color-btn');

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;

  css.textContent = `${body.style.background};`;
}

function rc() {
  var r1 = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  return r1;
}
function randomColor() {
  color1.value = rc();
  color2.value = rc();
  setgrad();
}
console.log(css);
console.log(color1.value);
console.log(color2.value);

rand.addEventListener('click', randomColor);
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
