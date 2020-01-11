let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

let randomBtn = document.getElementById('random-color-btn');

const setGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;

  css.textContent = `${body.style.background};`;
};

const randomColorGernator = () =>
  `#${((Math.random() * 0xffffff) << 0).toString(16)}`;

const randomColor = () => {
  color1.value = randomColorGernator();
  color2.value = randomColorGernator();
  setGradient();
};

randomBtn.addEventListener('click', randomColor);
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
