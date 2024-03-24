//! напиши всю логіку роботи додатка

import iziToast from 'izitoast'; // Описаний у документації
import 'izitoast/dist/css/iziToast.min.css'; // Додатковий імпорт стилів

import SimpleLightbox from 'simplelightbox'; // Описаний у документації
import 'simplelightbox/dist/simple-lightbox.min.css'; // Додатковий імпорт стилів

// import { getImages } from './js/pixabay-api';
// import { galleryTemplate } from './js/render-functions';

const formEl = document.querySelector('.form'); // доступ до форми
const imageContainer = document.querySelector('.js-image-container'); // доступ до контейнеру

//! 1. подія
formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.request.value;
  console.log(query); //! видалити

  getImages(query)
    .then(data => {
      const markup = imageTemplate(data);
      imageContainer.insertAdjacentHTML('beforeend', markup);
      console.log(data); //! видалити
    })
    .catch(err => {
      console.log(err);
    });
});

//! 2. запит
function getImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43032032-8eb24f10be4f06f56a6a96441',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${params}`;
  console.log(url); //! видалити

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

//! 3. рендер
function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<div class="gallery">
  <div class = "image-container">
    <a class="gallery-link" href="${webformatURL}">
    <img class="gallery-image"
    src="${largeImageURL}" alt="${tags}"/>
    </a>
    </div>
    <div class="image-info">
<span>likes: ${likes}</span>
<span>views: ${views}</span>
<span>comments: ${comments}</span>
<span>downloads: ${downloads}</span>
 </div></div>`;
}
