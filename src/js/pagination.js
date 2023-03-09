import newsApiService from './fetch';
import { addToStorage, getFromStorage, moviesDataUpdate } from './localStorage';
import { renderGalleryFilms } from './gallery';

const ApiService = new newsApiService();

const galleryEl = document.querySelector('.gallery-list');
const paginationBar = document.querySelector('.pagination-btns');
const prevBtn = document.querySelector('.page-btn.prev');
const nextBtn = document.querySelector('.page-btn.next');

console.log(paginationBar);

async function main() {
  const data = await ApiService.fetchTrendingMovie();
  console.log(data);
  function displayList() {}
  function displayPagination() {}
  function displayPaginationBtn() {}
}
