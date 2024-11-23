function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', function() {
  const randomColor = getRandomHexColor();
  const rgbColor = hexToRgb(randomColor);

  document.body.style.backgroundColor = rgbColor;
  colorSpan.textContent = randomColor;
});

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

