import { addToStorage, getFromStorage } from './localStorage';
let movieData;
let watchMovie = [];
let queueMovie = [];

export function libraryStorage(data) {
  movieData = data;
  console.log(movieData.id);

  const watchBtn = document.querySelector('.js-watched');
  const queueBtn = document.querySelector('.js-queue');

  watchBtn.addEventListener('click', onWatchBtn);
}

function onWatchBtn() {
  console.log(movieData.id);
  addToStorage('watch', movieData.id);
}
