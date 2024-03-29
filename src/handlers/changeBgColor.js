import changeColor from '../components/changeColor.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const changeBgColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += getRandomNumber();
  }
  changeColor(color);
};

export default changeBgColor;
