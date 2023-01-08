import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// import * as basicLightbox from 'basiclightbox'
// const basicLightbox = require('basiclightbox')


const gallareEl = document.querySelector(".gallery");
function markup(items) {
  return items.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("");

};
const createdGalary = markup(galleryItems);
gallareEl.insertAdjacentHTML("beforeend", createdGalary);
gallareEl.addEventListener("click", (ev) => {
  ev.preventDefault();
  const instance = basicLightbox.create(`
    <img calss = "gallery__image gallery__image:hover" src="${ev.target.dataset.source}" width="100%" height="100%">
`)
  instance.show()
  document.addEventListener("keyup", event => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
})
