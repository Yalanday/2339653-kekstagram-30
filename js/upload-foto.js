import { formUploadFoto } from './validation-data';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const preview = document.querySelector('.img-upload__preview img');

formUploadFoto.addEventListener('change', () => {
  const file = formUploadFoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
