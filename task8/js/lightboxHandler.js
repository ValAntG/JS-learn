const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');

const onClickHandler = (e) => {
  e.preventDefault();

  lightboxImage.src = e.target.getAttribute('data');
  lightboxImage.alt = e.target.alt;
  lightbox.classList.add('is-open');
};

const removeLightBox = () => {
  lightboxImage.src = '';
  lightbox.classList.remove('is-open');
};

const onPushMouse = (e) => {
  e.preventDefault();

  removeLightBox();
};

const onPushEsc = (e) => {
  e.preventDefault();

  if (e.keyCode === 27) {
    removeLightBox();
  }
};

const lightboxHandler = () => {
  const gallery = document.querySelector('.js-gallery');
  gallery.addEventListener('click', onClickHandler);

  lightbox
    .querySelector('[data-action="close-lightbox"]')
    .addEventListener('click', onPushMouse);

  lightbox
    .querySelector('.lightbox__overlay')
    .addEventListener('click', onPushMouse);

  document.addEventListener('keydown', onPushEsc);
};

export default lightboxHandler;
