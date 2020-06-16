let previewURL;
const image = document.querySelector('#image');
const imagePreview = document.querySelector('#image-preview');
const imageName = document.querySelector('#image-name');
image.addEventListener('change', () => {
  const file = image.files[0];
  previewURL = URL.createObjectURL(file);
  imageName.textContent = file.name;
  imagePreview.setAttribute('src', previewURL);
  imagePreview.style.display = 'inline-block';
});
