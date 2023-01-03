import NewsApiService from './fetch';
import { renderGalleryFilms } from './gallery';

const NewApiService = new NewsApiService();
const searchForm = document.querySelector('#header-form');
const cardsContainer = document.querySelector('.gallery-list');

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  NewApiService.query = e.currentTarget.elements.searchQuery.value.trim();
  console.log(NewApiService.query);
  NewApiService.getFilmOnSearch()
    .then(data => {
      cardsContainer.innerHTML = '';
      renderGalleryFilms(data.results);
    })
    .catch(err => console.log(err));
}
