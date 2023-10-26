import { stopIsEscapeKey } from './util.js';
import { onModalEscapeKeydown } from './util.js';
import { hashtagInput, commentsInput, pristine } from './validation-data.js';

const overlayForForm = document.querySelector('.img-upload__overlay');
const uploadFotoInput = document.querySelector('.img-upload__input');
const closeUploadPictureModalButton = document.querySelector('.img-upload__cancel');

const closeUploadPictureModal = () => {
  overlayForForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadFotoInput.value = '';
  hashtagInput.value = '';
  commentsInput.value = '';
  pristine.reset();
};

hashtagInput.addEventListener('blur', () => {
  onModalEscapeKeydown(closeUploadPictureModal);
});

stopIsEscapeKey(hashtagInput);
stopIsEscapeKey(commentsInput);

closeUploadPictureModalButton.addEventListener('click', () => {
  closeUploadPictureModal();
});

const openUploadPictureModal = () => {
  uploadFotoInput.addEventListener('change', () => {
    overlayForForm.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    onModalEscapeKeydown(closeUploadPictureModal);
  });
};

export { openUploadPictureModal };


