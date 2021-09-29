const setAttributes = (el, attrs) => {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  return el;
};

export default setAttributes;
