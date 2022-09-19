// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galeryContainer = document.querySelector('.gallery');
galeryContainer.insertAdjacentHTML(
  'beforeend',
  createGaleryItems(galleryItems)
);

function createGaleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}" />
      </a> `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  animationSpeed: 250,
  captionsData: 'alt',
  captionDelay: 250,
});
