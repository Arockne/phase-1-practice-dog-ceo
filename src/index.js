console.log('%c HI', 'color: firebrick')

function getRandomImages() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(appendImages)
  .catch(error => document.querySelector().appendChild(error.message))
}

function appendImages(json) {
  const images = json.message;
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.width = 350;
    document.querySelector('#dog-image-container').appendChild(img);
  })
}

function getDogBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => console.log(json))
  .catch(error => document.querySelector('#dog-breeds').appendChild(error.message))
}

function init() {
  getRandomImages();
  getDogBreeds();
}

init();