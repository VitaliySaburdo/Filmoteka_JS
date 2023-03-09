import newsApiService from './fetch';
import { addToStorage, getFromStorage, moviesDataUpdate } from './localStorage';
import { renderGalleryFilms } from './gallery';

const ApiService = new newsApiService();

const cardsContainer = document.querySelector('.gallery-list');
const paginationBar = document.querySelector('.pagination-btns');
const prevBtn = document.querySelector('.page-btn.prev');
const nextBtn = document.querySelector('.page-btn.next');

async function main() {
  nextBtn.addEventListener('click', onNextBtn);
  prevBtn.addEventListener('click', onPrevBtn);

  // const { total_pages } = await ApiService.fetchTrendingMovie();
  // const data = await ApiService.fetchTrendingMovie();
  // const { page } = await ApiService.fetchTrendingMovie();

  // console.log(page);
  // console.log(data)

  async function onNextBtn() {
    if (ApiService.currentPage < total_pages) {
      ApiService.currentPage += 1;
      const { results } = await ApiService.fetchTrendingMovie();
      cardsContainer.innerHTML = '';
      renderGalleryFilms(results);
    }
  }
  async function onPrevBtn() {
    if (ApiService.currentPage > 1) {
      ApiService.currentPage--;
      const { results } = await ApiService.fetchTrendingMovie();
      cardsContainer.innerHTML = '';
      renderGalleryFilms(results);
    }
  }
}

main();
