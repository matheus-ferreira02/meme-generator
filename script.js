const text = document.getElementById('text-input');

text.addEventListener('keyup', () => {
  const areaText = document.getElementById('meme-text');
  areaText.innerText = text.value;
});

const inputImage = document.getElementById('meme-insert');
inputImage.addEventListener('change', () => {
  const tagImage = document.getElementById('meme-image');
  const file = inputImage.files[0];
  const src = URL.createObjectURL(file);
  tagImage.src = src;
});

const containerMeme = document.getElementById('meme-image-container');
const fireStyle = document.getElementById('fire');
fireStyle.addEventListener('click', () => {
  containerMeme.style.border = '3px dashed red';
});

const waterStyle = document.getElementById('water');
waterStyle.addEventListener('click', () => {
  containerMeme.style.border = '5px double blue';
});

const earthStyle = document.getElementById('earth');
earthStyle.addEventListener('click', () => {
  containerMeme.style.border = '6px groove green';
});

function addMeme(event) {
  const element = event.target;
  const tagImage = document.getElementById('meme-image');
  tagImage.src = element.src;
}

const meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', addMeme);

const meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', addMeme);

const meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', addMeme);

const meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', addMeme);
