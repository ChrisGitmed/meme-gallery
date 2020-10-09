var imageUrls = [];

var imageUrlInput = document.querySelector("input");
var addImageButton = document.querySelector("button");

function addURL() {
  console.log(imageUrlInput.value);
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
    imageUrlInput.value = '';
  }
}
addImageButton.addEventListener('click', addURL);
