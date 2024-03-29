import dom from '../dom.js';
import changeBgColor from '../handlers/changeBgColor.js';

const event = dom.colorBtn.addEventListener('click', changeBgColor);
export default event;
