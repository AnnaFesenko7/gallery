const galleryModal = document.querySelector('[data-gallery-modal]');
const galleryElement = document.querySelector('.gallery__list');

const galleryModalContainer = document.querySelector(
  '[data-gallery-modal-container]'
);
galleryElement.addEventListener('click', onImgClick);

function openModal() {
  galleryModal.classList.remove('is-hidden');
  galleryModal.addEventListener('click', onGalleryModalClick);
}

function closeModal() {
  galleryModal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscClick);
  galleryModal.removeEventListener('click', onGalleryModalClick);
  galleryModalContainer.innerHTML = '';
}
function onGalleryModalClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
  return;
}

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const URL = evt.target.dataset.source;
  console.log(evt.target);

  const markup = createGalleryModalMarkup(URL);
  galleryModalContainer.innerHTML = markup;
  openModal();
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.key === 'Escape') {
    closeModal();
    return;
  }
}

function createGalleryModalMarkup(URL) {
  return `<img  class="gallery-modal-image" src=${URL} />`;
  // return `<img  class="gallery-modal-image" src="images/gallery/boy-640.jpg" />`;
}
