import dom from '../dom.js';

const changeColor = (color) => {
  dom.hexCode.innerText = color;
  dom.bgColor.style.backgroundColor = color;
};

export default changeColor;
