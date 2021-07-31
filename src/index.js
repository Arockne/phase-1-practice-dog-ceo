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

document.addEventListener('DOMContentLoaded', () => {
  getRandomImages();
})