import galleryItems from './items.js';
import makesGalleryItem from './makesGalleryItem.js';
import lightboxHandler from './lightboxHandler.js';

const gallery = document.querySelector('.js-gallery');

const items = makesGalleryItem(galleryItems);
gallery.append(...items);

lightboxHandler();
