import newsApiService from './fetch';
import { addToStorage, getFromStorage, moviesDataUpdate } from './localStorage';
import { renderGalleryFilms } from './gallery';

const ApiService = new newsApiService();

const galleryEl = document.querySelector('.gallery-list');
const paginationBar = document.querySelector('.pagination-btns');
const prevBtn = document.querySelector('.page-btn.prev');
const nextBtn = document.querySelector('.page-btn.next');

async function main() {
  const data = await ApiService.fetchTrendingMovie();
  let currentPage = ApiService.page;
  let rows = 20;
  console.log(currentPage);
  console.log(data);
  function displayList() {}
  function displayPagination() {}
  function displayPaginationBtn() {}
}

main();
