console.log('%c HI', 'color: firebrick')

//on page load, fetches the images using "https://dog.ceo/api/breeds/image/random/4"
//parses the response as json
//add image elements to the DOM for each image in the array
function getRandomImages() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => createImages(json.message))
  .catch(error => document.body.appendChild(error.message))
}

function getBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => appendBreedsToList(json.message));
}

function appendBreedsToList(breeds) {
  const mainBreeds = Object.keys(breeds);
  mainBreeds.forEach(breed => {
    const li = document.createElement('li');
    li.textContent = breed;
    li.addEventListener('click', e => e.target.style.color = 'red');
    document.querySelector('#dog-breeds').appendChild(li);
  })
}

//appends images to DOM
function createImages(images) {
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.width = 250;
    document.body.appendChild(img);
  })
}

document.addEventListener('DOMContentLoaded', () => {
  getRandomImages();
  getBreeds();
})