import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';

export const libraryEl = document.querySelector('.library__list');
const queueButton = document.querySelector('.queue_button');
const watchedButton = document.querySelector('.watched_button');

if (libraryEl) {
  watchedButton.addEventListener('click', handleClickWatched);
  queueButton.addEventListener('click', handleClickQueue);
}

export function libraryStorage(movieData) {
  const cartItem = document.querySelector(`[data-id="${movieData.id}"]`);
  const filmObject = JSON.stringify(movieData);

  const watchBtn = document.querySelector('.js-watched');
  const queueBtn = document.querySelector('.js-queue');

  if (
    localStorage.getItem('watch') !== null &&
    localStorage.getItem('watch').includes(filmObject)
  ) {
    watchBtn.textContent = 'REMOVE FROM WATCHED';
    watchBtn.classList.add('button--accent');
  }
  if (
    localStorage.getItem('queue') !== null &&
    localStorage.getItem('queue').includes(filmObject)
  ) {
    queueBtn.textContent = 'REMOVE FROM QUEUE';
    watchBtn.classList.add('button--accent');
  }

  watchBtn.addEventListener('click', onWatchBtn);
  queueBtn.addEventListener('click', onQueueBtn);

  function onWatchBtn() {
    let watchMovie = getFromStorage('watch') || [];
    if (movieData) {
      if (watchMovie.find(e => e.id === movieData.id)) {
        watchBtn.classList.remove('button--accent');
        watchBtn.textContent = 'ADD TO WATCHED';
        watchMovie = watchMovie.filter(e => e.id !== movieData.id);
        if (cartItem) {
          removeFromStorage('watch');
          renderLibrary(watchMovie);
        }
      } else {
        watchBtn.textContent = 'REMOVE FROM WATCHED';
        watchBtn.classList.add('button--accent');
        watchMovie.push(movieData);
      }
      addToStorage('watch', watchMovie);
    }
  }

  function onQueueBtn() {
    let queueMovie = getFromStorage('queue') || [];
    if (movieData) {
      if (queueMovie.find(e => e.id === movieData.id)) {
        queueBtn.classList.remove('button--accent');
        queueBtn.textContent = 'ADD TO QUEUE';
        queueMovie = queueMovie.filter(e => e.id !== movieData.id);
        if (cartItem) {
          removeFromStorage('queue');
          renderLibrary(queueMovie);
        }
      } else {
        queueBtn.textContent = 'REMOVE FROM QUEUE';
        queueBtn.classList.add('button--accent');
        queueMovie.push(movieData);
      }
      addToStorage('queue', queueMovie);
    }
  }
}
// const removeButton = document.querySelector('.remove_button');
// console.log(removeButton);

// if (removeButton) {
//   removeButton.addEventListener('click', onRemoveButton);
// }

// function onRemoveButton(e) {
//   if (e.target.nodeName === 'BUTTON') {
//     removeFromStorage(e);
//     const filmId = e.target.dataset.id;
//     const storageKey = e.target.dataset.btn;
//     console.log(storageKey);
//     removeFilmFromLocalrStorage(filmId, storageKey);
//     libraryEl.innerHTML = '';
//     renderLibrary(movieData);
//   }
//   removeButton.removeEventListener('click', onRemoveButton);
// }

handleClickWatched();
function handleClickWatched() {
  renderSavedFilms('watch');
  if (libraryEl) {
    watchedButton.classList.add('btn__active');
    queueButton.classList.remove('btn__active');
  }
}

function handleClickQueue() {
  renderSavedFilms('queue');
  if (libraryEl) {
    watchedButton.classList.remove('btn__active');
    queueButton.classList.add('btn__active');
  }
}

function clearFilmList() {
  if (libraryEl) {
    libraryEl.innerHTML = '';
  }
}

function renderSavedFilms(name) {
  clearFilmList();
  const storageMovies = getFromStorage(name);
  if (storageMovies) {
    renderLibrary(storageMovies, name);
  }
}
// document.location.reload();
function renderLibrary(data, name) {
  const markup = data
    .map(
      ({
        id,
        poster_path,
        title,
        genres,
        release_date,
      }) => `<li class="gallery__item" data-id="${id}">
        <img src="${renderImg(
          poster_path
        )}" alt="${title}" class="gallery_img" width="395" height="574" />
        <h2 class="gallery__title">${title}</h2>
        <p class="gallery__txt">${genresConverting(
          genres
        )} | ${release_date.slice(0, 4)}
                <button class="remove_button" data-action="remove"
        data-id="${id}" data-btn="${name}" type="button">
        Remove
        </button>
        </li>`
    )
    .join('');

  if (libraryEl) {
    libraryEl.innerHTML = markup;
  }
}

function renderImg(poster_path) {
  if (poster_path) {
    return `https://image.tmdb.org/t/p/w500${poster_path}`;
  }
  return `https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`;
}

function genresConverting(genres) {
  if (genres.length) {
    const genreArray = [];
    genres.map(genre => {
      genreArray.push(genre.name);
    });

    return genreArray.join(', ');
  }
  return 'N/A';
}
