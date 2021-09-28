import setAttributes from './setAttributes.js';

const lightboxImage = document.querySelector('.lightbox__image');
const lightboxJS = document.querySelector('.js-lightbox');

const addIsOpenToLightbox = (imageInfo) => {
  setAttributes(lightboxImage, {
    src: imageInfo.getAttribute('data'),
    alt: imageInfo.alt,
  });
  lightboxJS.classList.add('is-open');
};

const onClickHandler = (e) => {
  e.preventDefault();

  addIsOpenToLightbox(e.target);
};

const removeLightBox = () => {
  lightboxImage.src = '';
  lightboxJS.classList.remove('is-open');
};

const onCloseHandler = (e) => {
  e.preventDefault();

  removeLightBox();
};

const onPushEsc = (e) => {
  e.preventDefault();

  if (e.keyCode === 27) {
    removeLightBox();
  }
};

export { onClickHandler, onCloseHandler, onPushEsc };
