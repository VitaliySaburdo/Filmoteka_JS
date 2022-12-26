// Library-sorage
import { addToStorage, getFromStorage } from './localStorage';

const libraryEl = document.querySelector('.library-storage-list');
// const queueButton = document.querySelector('.queue_button');
// const watchedButton = document.querySelector('.watched_button');

// if (libraryEl) {
//   watchedButton.addEventListener('click', handleClickWatched);
//   queueButton.addEventListener('click', handleClickQueue);
// }

export function libraryStorage(movieData) {
  // const filmObject = JSON.stringify(movieData);
  const cartItem = document.querySelector(`[data-id="${movieData.id}"]`);

  // Подключаем кнопки модального окна
  const watchBtn = document.querySelector('.js-watched');
  const queueBtn = document.querySelector('.js-queue');

  watchBtn.addEventListener('click', () => {
    if (movieData) {
      let film = JSON.parse(localStorage.getItem('watch')) || [];
      if (film.find(e => e.id === movieData.id)) {
        watchBtn.classList.remove('button--accent-btn');
        watchBtn.textContent = 'ADD TO WATCHED';
        film = film.filter(e => e.id !== movieData.id);
        if (cartItem) {
          cartItem.remove();
        }
      } else {
        watchBtn.classList.add('button--accent-btn');
        watchBtn.textContent = 'REMOVE FROM WATCHED';
        film.push(movieData);
      }
      localStorage.setItem('watch', JSON.stringify(film));
    }
  });
}
