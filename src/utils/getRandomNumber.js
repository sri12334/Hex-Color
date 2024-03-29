import data from '../data.js';

const getRandomNumber = () => {
  const randomIndex = Math.floor(Math.random() * data.characters.length);
  return data.characters[randomIndex];
};

export default getRandomNumber;
