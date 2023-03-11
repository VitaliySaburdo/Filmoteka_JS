import newsApiService from './fetch';
import { addToStorage, getFromStorage, moviesDataUpdate } from './localStorage';
import { renderGalleryFilms } from './gallery';

const ApiService = new newsApiService();

;
const prevBtn = document.querySelector('.page-btn.prev');
const nextBtn = document.querySelector('.page-btn.next');


async function main() {
    nextBtn.addEventListener('click', onNextBtn);
    prevBtn.addEventListener('click', onPrevBtn);

    async function getData() {
        const cardsContainer = document.querySelector('.gallery-list')
        const { results } = await ApiService.fetchTrendingMovie();
        cardsContainer.innerHTML = '';
        renderGalleryFilms(results);
    }

    function markupPagination() {
        let coints = 7;
        const paginationBar = document.querySelector('.pagination');
        for (let i = 0; i < coints; i++) {
            const liEl = document.createElement('li');
            liEl.classList.add('page');
            liEl.textContent = ApiService.currentPage + i;
            paginationBar.appendChild(liEl);
            liEl.addEventListener('click', () => {
                ApiService.currentPage = liEl.textContent;
                getData()
            })
        }
    }
    markupPagination()
    function onNextBtn() {
        ApiService.currentPage++;
        getData()

    }

    function onPrevBtn() {
        if (ApiService.currentPage > 1) {
            ApiService.currentPage--;
            getData()
        }
    }
}

main();
