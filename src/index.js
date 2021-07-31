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
  .then(appendDogBreeds)
  .catch(error => console.log(error))
}

function appendDogBreeds(json) {
  const breeds = Object.entries(json.message);

  breeds.forEach(breed => {
    const li = document.createElement('li');
    li.textContent = breed[0];

    if (breed[1].length > 0) {
      const ul = document.createElement('ul');

      breed[1].forEach(otherBreed => {
        const innerLi = document.createElement('li');
        innerLi.textContent = otherBreed;
        ul.appendChild(innerLi);
      })

      li.appendChild(ul);
    }

    document.querySelector('#dog-breeds').appendChild(li);
  })
}

function init() {
  getRandomImages();
  getDogBreeds();
}

init();