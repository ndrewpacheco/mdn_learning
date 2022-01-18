const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = [];
for (let i = 1; i <= 5; i++) {
  let pic = `pic${i}.jpg`;
  pics.push(pic);
}

/* Looping through images */
pics.forEach(picName => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${picName}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', (e)=>{displayedImage.src = e.currentTarget.src});
})
/* Wiring up the Darken/Lighten button */
function toggleOverlay() {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'lighten');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
  }
}


btn.addEventListener('click', toggleOverlay);