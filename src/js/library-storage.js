import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';

let watchMovie = [];
let queueMovie = [];

export function libraryStorage(movieData) {
  const cartItem = document.querySelector(`[data-id="${movieData.id}"]`);

  const watchBtn = document.querySelector('.js-watched');
  const queueBtn = document.querySelector('.js-queue');

  if (getFromStorage('watch')) {
    watchMovie = getFromStorage('watch');
    watchBtn.textContent = 'REMOVE FROM WATCHED';
  }

  watchBtn.addEventListener('click', onWatchBtn);

  function onWatchBtn() {
        if (movieData) {
      if (watchMovie.find(e => e.id === movieData.id)) {
        watchBtn.classList.remove('button--accent-btn');
        watchBtn.textContent = 'ADD TO WATCHED';
        watchMovie = watchMovie.filter(e => e.id !== movieData.id);
        if (cartItem) {
          removeFromStorage('watch');
        }
      } else {
        watchBtn.classList.add('button--accent-btn');
        watchBtn.textContent = 'REMOVE FROM WATCHED';
        watchMovie.push(movieData);
      }
      addToStorage('watch', watchMovie);
    }
}

function renderGalleryFilms(data) {
  const markup = data
    .map(
      ({
        id,
        original_title,
        poster_path,
        title,
        genre_ids,
        release_date,
      }) => `<li class="gallery__item" data-id="${id}">
        <img src="${renderImg(
          poster_path
        )}" alt="${title}" class="gallery_img" width="395" height="574" />
        <h2 class="gallery__title">${checkTitle(original_title)}</h2>
        <p class="gallery__txt">${changeGenre(genre_ids)} | ${checkDate(
        release_date
      )}
      </li>`
    )
    .join('');

  libraryEl.innerHTML = markup;
}
