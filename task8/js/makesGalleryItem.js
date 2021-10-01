const setAttributes = (el, attrs) => {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  return el;
};

const listObject = () => {
  const object = document.createElement('li');

  setAttributes(object, { className: 'gallery__item' });

  return object;
};

const ImageObject = (item) => {
  const object = document.createElement('img');

  setAttributes(object, {
    className: 'gallery__image',
    src: item.preview,
    data: item.original,
    alt: item.description,
    width: '340',
  });

  return object;
};

const linkObject = (item) => {
  const object = document.createElement('a');

  setAttributes(object, {
    className: 'gallery__link',
    href: item.original,
  });

  return object;
};

const createObject = (item) => {
  const liEl = listObject();
  const aEl = linkObject(item);

  aEl.appendChild(ImageObject(item));
  liEl.appendChild(aEl);
  liEl.appendChild(document.createElement('li'));

  return liEl;
};

const makesGalleryItem = (items) => items.map((item) => createObject(item));

export default makesGalleryItem;
