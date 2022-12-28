import newsApiService from './fetch';

const imageGallaryRef = document.querySelector('.gallery-list');

const ApiService = new newsApiService();

ApiService.getGenres().then(({ genres }) => {
  //Добавление списка жанров в localStorage
  addToStorage('genresList', genres);
  JSON.parse(localStorage.getItem('genresList'));
});

ApiService.fetchTrendingMovie().then(data => {
  renderGalleryFilms(data.results);
});

function renderGalleryFilms(data) {
  imageGallaryRef.innerHTML = murkup(data);
}
