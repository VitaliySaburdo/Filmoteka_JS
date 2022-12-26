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
  const filmObject = JSON.stringify(movieData);
  const cartItem = document.querySelector(`[data-id="${movieData.id}"]`);

  // Подключаем кнопки модального окна
  const watchBtn = document.querySelector('.js-watched');
  const queueBtn = document.querySelector('.js-queue');
  console.log(localStorage.getItem('queue').includes(filmObject));

  if (localStorage.getItem('watch').includes(filmObject)) {
    watchBtn.classList.add('button--accent-btn');
    watchBtn.textContent = 'REMOVE FROM WATCHED';
  }

  if (localStorage.getItem('queue').includes(filmObject)) {
    queueBtn.classList.add('button--accent-btn');
    queueBtn.textContent = 'REMOVE FROM QUEUE';
  }

  watchBtn.addEventListener('click', () => {
    if (movieData) {
      let film = JSON.parse(localStorage.getItem('watch')) || [];
      if (film.find(e => e.id === movieData.id)) {
        watchBtn.classList.remove('button--accent-btn');
        watchBtn.textContent = 'ADD TO WATCHED';
        film = film.filter(e => e.id !== movieData.id);
        if (cartItem) {
          localStorage.removeItem('watch');
        }
      } else {
        watchBtn.classList.add('button--accent-btn');
        watchBtn.textContent = 'REMOVE FROM WATCHED';
        film.push(movieData);
      }
      localStorage.setItem('watch', JSON.stringify(film));
    }
  });

  queueBtn.addEventListener('click', () => {
    if (movieData) {
      let film = JSON.parse(localStorage.getItem('queue')) || [];
      if (film.find(e => e.id === movieData.id)) {
        queueBtn.classList.remove('button--accent-btn');
        queueBtn.textContent = 'ADD TO QUEUE';
        film = film.filter(e => e.id !== movieData.id);

        if (cartItem) {
          localStorage.removeItem('queue');
        }
      } else {
        queueBtn.classList.add('button--accent-btn');
        queueBtn.textContent = 'REMOVE FROM QUEUE';
        film.push(movieData);
      }
      localStorage.setItem('queue', JSON.stringify(film));
    }
  });
}

function renderLibrary(storageContent) {
  const markup = storageContent
    .map(({ id, poster_path, title, genres, release_date }) => {
      return `<li class="gallery__item" data-id="${id}">
    <a href="#" class="gallery__link" data-id="${id}"><div class="gallery__thumb">
    <img class="gallery__img" id="${id}" src="${IMG_URL + poster_path}
    "alt="${title}" /></div><div class="gallery__descr">
    <h2 class="gallery__title">${title}</h2>
    <p class="gallery__text">${genres
      .map(({ name }) => name)
      .join(', ')} | ${release_date.slice(0, 4)}</p>
    </div></a></li>`;
    })
    .join('');

  if (libraryEl) {
    libraryEl.innerHTML = markup;
  }
}
