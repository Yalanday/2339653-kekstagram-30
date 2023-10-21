import { createArrayPhoto } from './data.js';

const miniaturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const createListPictures = document.createDocumentFragment();

createArrayPhoto.forEach(({ url, description, likes, comments }, currentIndex) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').id = currentIndex;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  createListPictures.appendChild(pictureElement);
});

miniaturesList.appendChild(createListPictures);

export { miniaturesList };

