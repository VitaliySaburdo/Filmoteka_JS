import NewsApiService from './fetch';
import { renderGalleryFilms } from './gallery';

const NewApiService = new NewsApiService();
const searchForm = document.querySelector('#header-form');
const cardsContainer = document.querySelector('.gallery-list');

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  query = e.currentTarget.elements.searchQuery.value.trim();
  console.log(query);
  NewApiService.getFilmOnSearch(query)
    .then(data => {
      cardsContainer.innerHTML = '';
      renderGalleryFilms(data.results);
    })
    .catch(err => console.log(err));
}
